
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div 
      id="home"
      className="min-h-[100vh] flex flex-col items-center justify-center relative pt-20 overflow-hidden"
    >
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,190,255,0.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      
      {/* Floating animation elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {/* Data points floating animation */}
        <div className="absolute h-2 w-2 bg-medical-blue rounded-full top-1/4 left-1/4 animate-pulse opacity-70"></div>
        <div className="absolute h-3 w-3 bg-medical-blue rounded-full top-1/3 left-1/2 animate-pulse opacity-50 animate-delay-300"></div>
        <div className="absolute h-2 w-2 bg-medical-blue rounded-full top-2/3 left-1/3 animate-pulse opacity-60 animate-delay-500"></div>
        <div className="absolute h-4 w-4 bg-medical-blue rounded-full top-1/2 left-3/4 animate-pulse opacity-40"></div>
        
        {/* Neural network lines */}
        <div className="absolute h-[1px] w-40 bg-gradient-to-r from-transparent via-medical-blue/30 to-transparent rotate-45 top-1/3 left-1/4 animate-fade-in animate-delay-200"></div>
        <div className="absolute h-[1px] w-32 bg-gradient-to-r from-transparent via-medical-blue/20 to-transparent -rotate-45 top-1/2 left-1/3 animate-fade-in animate-delay-300"></div>
        <div className="absolute h-[1px] w-48 bg-gradient-to-r from-transparent via-medical-blue/30 to-transparent rotate-12 top-2/3 left-1/2 animate-fade-in"></div>
        
        {/* Floating circles */}
        <div className="absolute h-20 w-20 border border-medical-blue/10 rounded-full top-1/4 right-1/4 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
        <div className="absolute h-32 w-32 border border-medical-blue/5 rounded-full bottom-1/4 left-1/4 animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20 animate-delay-200"></div>
        <div className="absolute h-48 w-48 border border-medical-blue/5 rounded-full top-1/3 right-1/3 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite] opacity-10 animate-delay-400"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
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
              className="px-6 py-3 rounded-lg bg-medical-blue text-white font-medium transition-all hover:shadow-lg hover:translate-y-[-2px] group"
            >
              Learn More
              <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
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
      
      {/* Animated wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-16" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <path 
            fill="#E1F0FF" 
            fillOpacity="0.3" 
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-[pulse_10s_ease-in-out_infinite]"
          ></path>
        </svg>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
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
