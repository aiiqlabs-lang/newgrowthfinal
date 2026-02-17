#!/usr/bin/env python3
"""
Backend API Testing for Contact Form
Tests the contact form endpoints: POST /api/contact and GET /api/contact
"""

import requests
import sys
import json
from datetime import datetime
from typing import Dict, Any

class ContactFormAPITester:
    def __init__(self, base_url="https://contact-form-fix-7.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name: str, success: bool, details: str = ""):
        """Log test results"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            
        result = {
            "test_name": name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        status = "✅ PASSED" if success else "❌ FAILED"
        print(f"\n{status} - {name}")
        if details:
            print(f"  Details: {details}")

    def test_api_health(self):
        """Test basic API connectivity"""
        try:
            response = requests.get(f"{self.base_url}/api/", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}, Response: {response.text[:100]}"
            self.log_test("API Health Check", success, details)
            return success
        except Exception as e:
            self.log_test("API Health Check", False, f"Connection error: {str(e)}")
            return False

    def test_contact_form_submission(self):
        """Test POST /api/contact endpoint"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+1 555-123-4567",
            "message": "This is a test message from automated testing",
            "source": "test"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/api/contact",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            success = response.status_code == 200
            response_data = response.json() if response.status_code == 200 else {}
            
            # Verify response structure
            if success and response_data:
                required_fields = ['id', 'name', 'email', 'message', 'created_at']
                missing_fields = [field for field in required_fields if field not in response_data]
                if missing_fields:
                    success = False
                    details = f"Missing fields in response: {missing_fields}"
                else:
                    details = f"Status: {response.status_code}, ID: {response_data.get('id', 'N/A')}"
                    # Store the submission ID for later retrieval test
                    self.last_submission_id = response_data.get('id')
            else:
                details = f"Status: {response.status_code}, Response: {response.text[:200]}"
                
            self.log_test("Contact Form Submission (POST)", success, details)
            return success, response_data
            
        except Exception as e:
            self.log_test("Contact Form Submission (POST)", False, f"Request error: {str(e)}")
            return False, {}

    def test_contact_form_retrieval(self):
        """Test GET /api/contact endpoint"""
        try:
            response = requests.get(
                f"{self.base_url}/api/contact",
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            success = response.status_code == 200
            
            if success:
                submissions = response.json()
                if isinstance(submissions, list):
                    details = f"Status: {response.status_code}, Found {len(submissions)} submissions"
                    
                    # If we have submissions, verify structure
                    if submissions:
                        first_submission = submissions[0]
                        required_fields = ['id', 'name', 'email', 'message', 'created_at']
                        missing_fields = [field for field in required_fields if field not in first_submission]
                        if missing_fields:
                            success = False
                            details += f", Missing fields: {missing_fields}"
                else:
                    success = False
                    details = f"Status: {response.status_code}, Expected list, got {type(submissions)}"
            else:
                details = f"Status: {response.status_code}, Response: {response.text[:200]}"
                
            self.log_test("Contact Form Retrieval (GET)", success, details)
            return success
            
        except Exception as e:
            self.log_test("Contact Form Retrieval (GET)", False, f"Request error: {str(e)}")
            return False

    def test_contact_form_validation(self):
        """Test contact form validation with invalid data"""
        # Test with missing required fields
        invalid_data = {
            "name": "",  # Empty name
            "email": "invalid-email",  # Invalid email
            "message": ""  # Empty message
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/api/contact",
                json=invalid_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            # Expecting validation error (422 or 400)
            success = response.status_code in [400, 422]
            details = f"Status: {response.status_code}, Response: {response.text[:200]}"
            
            self.log_test("Contact Form Validation", success, details)
            return success
            
        except Exception as e:
            self.log_test("Contact Form Validation", False, f"Request error: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all backend tests"""
        print("🔍 Starting Contact Form Backend API Tests")
        print(f"Base URL: {self.base_url}")
        print("-" * 50)
        
        # Test 1: API Health
        if not self.test_api_health():
            print("\n❌ API is not accessible. Stopping tests.")
            return False
        
        # Test 2: Contact form submission
        submission_success, submission_data = self.test_contact_form_submission()
        
        # Test 3: Contact form retrieval
        self.test_contact_form_retrieval()
        
        # Test 4: Validation (optional)
        self.test_contact_form_validation()
        
        # Print summary
        print(f"\n📊 Test Summary")
        print(f"Tests run: {self.tests_run}")
        print(f"Tests passed: {self.tests_passed}")
        print(f"Success rate: {(self.tests_passed/self.tests_run)*100:.1f}%")
        
        return self.tests_passed == self.tests_run

def main():
    tester = ContactFormAPITester()
    success = tester.run_all_tests()
    
    # Save test results
    with open("/app/test_reports/backend_test_results.json", "w") as f:
        json.dump({
            "timestamp": datetime.now().isoformat(),
            "tests_run": tester.tests_run,
            "tests_passed": tester.tests_passed,
            "success_rate": (tester.tests_passed/tester.tests_run)*100 if tester.tests_run > 0 else 0,
            "results": tester.test_results
        }, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())