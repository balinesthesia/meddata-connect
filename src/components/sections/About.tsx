
import React from "react";
import Section from "../ui/Section";
import AnimatedImage from "../ui/AnimatedImage";
import { Check } from "lucide-react";

const About: React.FC = () => {
  const features = [
    "Advanced AI algorithms for medical diagnostics",
    "Data-driven research in anesthesiology",
    "Interdisciplinary collaboration with global experts",
    "Integration of machine learning in clinical practice",
    "Development of innovative healthcare solutions",
    "Education and training in medical data science"
  ];

  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-medical-blue font-medium mb-2 block">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pioneering the Future of Medical Data Science
          </h2>
          <p className="text-gray-600 mb-6">
            The Medical Data Science and Artificial Intelligence Division at Udayana University 
            is dedicated to transforming healthcare through innovative research and applications 
            of artificial intelligence, with a special focus on anesthesiology and intensive care.
          </p>
          <p className="text-gray-600 mb-8">
            Our multidisciplinary team combines expertise in medicine, computer science, statistics, 
            and engineering to develop cutting-edge solutions for complex medical challenges, 
            improving patient outcomes and advancing medical knowledge.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-medical-lightBlue p-1">
                  <Check className="h-3 w-3 text-medical-blue" />
                </div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <a 
            href="#research" 
            className="inline-flex items-center text-medical-blue hover:underline font-medium"
          >
            Discover Our Research
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -z-10 inset-0 -m-8 rounded-3xl bg-medical-lightBlue opacity-20 blur-2xl"></div>
          <AnimatedImage 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Medical researchers analyzing data" 
            className="rounded-2xl shadow-soft w-full h-[400px] object-cover"
            priority={true}
          />
          <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-medium p-4 max-w-xs">
            <p className="text-sm font-medium">
              "We're bridging the gap between complex data and practical medical applications."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
