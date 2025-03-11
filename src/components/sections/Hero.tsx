import React from "react";
import { ArrowDown } from "lucide-react";
import DNAHelixAnimation from "../ui/DNAHelixAnimation";
const Hero: React.FC = () => {
  return <div id="home" className="min-h-[100vh] flex flex-col items-center justify-center relative pt-20 overflow-hidden">
      {/* Dark blue to black gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-900 via-blue-950 to-black" aria-hidden="true" />
      
      {/* DNA Helix Animation */}
      <DNAHelixAnimation />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-down">
            <span className="inline-block py-1 px-3 mb-5 rounded-full bg-medical-lightBlue text-medical-blue text-sm font-medium">
              Medical Data Science & AI Division
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down animate-delay-100 tracking-tight text-white">
            Transforming Healthcare Through 
            <span className="text-sky-400"> Data Science &amp; Artificial Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 animate-fade-down animate-delay-200 max-w-3xl mx-auto">
            Advancing anesthesiology and intensive care through innovative research, data-driven insights, and cutting-edge artificial intelligence at Udayana University.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-down animate-delay-300">
            <a href="#about" className="px-6 py-3 rounded-lg bg-medical-blue text-white font-medium transition-all hover:shadow-lg hover:translate-y-[-2px]">
              Learn More
            </a>
            <a href="#contact" className="px-6 py-3 rounded-lg border border-gray-300 text-white font-medium hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="rounded-full p-2 border border-gray-400 hover:border-medical-blue transition-colors" aria-label="Scroll down">
          <ArrowDown className="h-5 w-5 text-gray-200" />
        </a>
      </div>
    </div>;
};
export default Hero;