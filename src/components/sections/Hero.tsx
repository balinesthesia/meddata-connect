
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div 
      id="home"
      className="min-h-[100vh] flex flex-col items-center justify-center relative pt-20"
    >
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,190,255,0.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-down">
            <span className="inline-block py-1 px-3 mb-5 rounded-full bg-medical-lightBlue text-medical-blue text-sm font-medium">
              Medical Data Science & AI Division
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down animate-delay-100 tracking-tight">
            Transforming Healthcare Through 
            <span className="text-medical-blue"> Data Science & AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 animate-fade-down animate-delay-200 max-w-3xl mx-auto">
            Advancing anesthesiology and intensive care through innovative research, data-driven insights, and cutting-edge artificial intelligence at Udayana University.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-down animate-delay-300">
            <a 
              href="#about" 
              className="px-6 py-3 rounded-lg bg-medical-blue text-white font-medium transition-all hover:shadow-lg hover:translate-y-[-2px]"
            >
              Learn More
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about" 
          className="rounded-full p-2 border border-gray-200 hover:border-medical-blue transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 text-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
