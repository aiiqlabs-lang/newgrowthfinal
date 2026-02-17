import { ArrowRight, Brain, Zap, Code2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  const services = [
    {
      title: "AI Strategy",
      description: "Strategic guidance for your AI transformation journey. We analyze your operations and create a clear roadmap.",
      icon: Brain,
    },
    {
      title: "Custom AI Products",
      description: "We build tailored generative AI solutions that integrate seamlessly with your existing processes.",
      icon: Code2,
    },
    {
      title: "AI Integration",
      description: "End-to-end integration of AI capabilities into your business workflows with enterprise-grade security.",
      icon: Zap,
    },
  ];

  const products = [
    {
      name: "SalesOS",
      description: "Unlock hidden value in your unstructured sales data with AI-powered conversation analysis.",
      capabilities: ["Revenue Intelligence", "CRM Enrichment", "Training Recommendations"],
    },
    {
      name: "ResearchOS",
      description: "Transform your research workflow with AI-powered automation and document synthesis.",
      capabilities: ["Document Understanding", "Knowledge Base Development", "Answer Engine"],
    },
    {
      name: "ComplianceOS",
      description: "Ensure consistency and compliance across all content with AI-driven oversight.",
      capabilities: ["Compliance Verification", "Style Guide Enforcement", "Brand Monitoring"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f10]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f10]/50 to-[#0f0f10]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-8"
              data-testid="hero-title"
            >
              We build custom
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                generative AI
              </span>
              products
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-12">
              Our mission is to accelerate business growth through custom AI agents tailored for specific use cases. We transform abstract business problems into end-to-end solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-sans text-base font-medium rounded-full transition-colors duration-200"
                data-testid="hero-cta-primary"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-sans text-base font-medium rounded-full transition-colors duration-200"
                data-testid="hero-cta-secondary"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-[#0f0f10]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-4 block">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
              AI Solutions for
              <span className="block text-gray-500">Modern Businesses</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group"
                data-testid={`service-card-${index}`}
              >
                <CardContent className="p-8 md:p-10">
                  <div className="w-14 h-14 rounded-xl bg-indigo-600/20 flex items-center justify-center mb-8 group-hover:bg-indigo-600/30 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="font-sans text-gray-400 text-base leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 md:py-32 bg-[#0f0f10]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-4 block">
              Our Products
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
              BusinessOS Stack
            </h2>
          </div>

          <div className="space-y-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
                data-testid={`product-card-${index}`}
              >
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-xs text-indigo-400">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-heading text-2xl font-semibold text-white">
                          {product.name}
                        </h3>
                      </div>
                      <p className="font-sans text-gray-400 text-base leading-relaxed max-w-xl">
                        {product.description}
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-3 block">
                        Capabilities
                      </span>
                      <ul className="space-y-2">
                        {product.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <ChevronRight className="w-4 h-4 text-indigo-400" />
                            <span className="font-sans text-gray-300 text-sm">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-[#0f0f10]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <ContactForm 
            title="Get in touch"
            subtitle="Ready to transform your business with AI? Fill out the form and we'll get back to you within 24 hours."
            source="homepage"
          />
          <div className="mt-8 text-center">
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-sans text-base font-medium rounded-full transition-colors duration-200"
              data-testid="cta-careers-btn"
            >
              Looking to join our team? View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
