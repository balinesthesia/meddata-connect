
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div 
      id="home"
      className="min-h-[100vh] flex flex-col items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,190,255,0.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      
      {/* DNA Helix */}
      <div className="absolute inset-0 -z-5 opacity-20" aria-hidden="true">
        <div className="absolute w-full h-full">
          {/* DNA Strands */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={`dna-strand-${i}`}
              className="absolute top-1/2 left-1/2 w-[300px] md:w-[500px] h-[2px] bg-medical-blue origin-center animate-rotate-slow"
              style={{ 
                transform: `translate(-50%, -50%) rotate(${i * 15}deg)`, 
                animationDelay: `${i * 0.1}s`
              }}
            >
              {/* DNA Rungs */}
              {[...Array(10)].map((_, j) => (
                <div 
                  key={`rung-${i}-${j}`}
                  className="absolute w-[10px] h-[10px] rounded-full bg-medical-blue animate-pulse-slow"
                  style={{ 
                    left: `${j * 10}%`, 
                    top: `${j % 2 === 0 ? -10 : 10}px`,
                    animationDelay: `${j * 0.2}s`
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Neural Network */}
      <div className="absolute inset-0 -z-5 opacity-10" aria-hidden="true">
        {/* Neural Nodes */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={`node-${i}`}
            className="absolute w-[8px] h-[8px] rounded-full bg-medical-darkBlue animate-float-slow"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {/* Connection Lines */}
            {[...Array(3)].map((_, j) => (
              <div 
                key={`connection-${i}-${j}`}
                className="absolute top-1/2 left-1/2 w-[100px] h-[1px] bg-medical-darkBlue origin-left animate-pulse-slow opacity-70"
                style={{ 
                  transform: `rotate(${j * 120}deg)`,
                  animationDelay: `${j * 0.3}s`
                }}
              />
            ))}
          </div>
        ))}
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
