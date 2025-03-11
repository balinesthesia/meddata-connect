
import React from "react";
import Section from "../ui/Section";
import AnimatedImage from "../ui/AnimatedImage";
import { ArrowRight } from "lucide-react";

const Research: React.FC = () => {
  const researchProjects = [
    {
      id: 1,
      title: "AI-Powered Anesthesia Monitoring",
      description: "Developing machine learning algorithms to predict and prevent complications during anesthesia, enhancing patient safety.",
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Predictive Analytics for ICU Outcomes",
      description: "Using big data analytics to predict patient outcomes in intensive care, enabling earlier interventions and personalized treatment.",
      image: "https://images.unsplash.com/photo-1603143285586-f6defc3a0fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Natural Language Processing in Medical Records",
      description: "Leveraging NLP to extract valuable insights from unstructured medical data, improving diagnostic accuracy and treatment planning.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      link: "#"
    }
  ];

  return (
    <Section id="research" className="bg-medical-grey">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-medical-blue font-medium mb-2 block">Our Research</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Innovating at the Intersection of AI and Medicine
        </h2>
        <p className="text-gray-600">
          Our research combines medical expertise with cutting-edge data science and artificial intelligence,
          focusing on real-world applications that improve patient care and advance medical knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {researchProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-medium hover:translate-y-[-5px]"
          >
            <div className="image-hover h-48">
              <AnimatedImage 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
              <a 
                href={project.link} 
                className="inline-flex items-center text-sm text-medical-blue hover:underline font-medium"
              >
                Learn more
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="#publications" 
          className="inline-block px-6 py-3 rounded-lg border border-medical-blue text-medical-blue font-medium hover:bg-medical-lightBlue transition-colors"
        >
          View Related Publications
        </a>
      </div>
    </Section>
  );
};

export default Research;
