import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Careers from "@/pages/Careers";
import Pricing from "@/pages/Pricing";
import ChatBot from "@/components/ChatBot";

function App() {
  return (
    <div className="App bg-[#0f0f10] min-h-screen">
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </BrowserRouter>
    </div>
  );
}

export default App;
