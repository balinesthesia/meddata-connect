
import React from "react";
import Section from "../ui/Section";
import { ExternalLink, BookOpen } from "lucide-react";

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  link: string;
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      id: 1,
      title: "Machine Learning Algorithms for Predicting Post-Anesthesia Complications: A Systematic Review",
      authors: "Smith J, Chen R, Johnson S, et al.",
      journal: "Morton Journal of Anesthesiology",
      year: 2023,
      link: "https://mortonjournal.org"
    },
    {
      id: 2,
      title: "Implementation of AI-Driven Decision Support System in Intensive Care: A Case Study",
      authors: "Patel M, Johnson S, Smith J, et al.",
      journal: "International Journal of Medical Informatics",
      year: 2022,
      link: "https://mortonjournal.org"
    },
    {
      id: 3,
      title: "Natural Language Processing for Automated Extraction of Critical Information from Anesthesia Records",
      authors: "Chen R, Smith J, et al.",
      journal: "Morton Journal of Anesthesiology",
      year: 2022,
      link: "https://mortonjournal.org"
    },
    {
      id: 4,
      title: "Predictive Analytics for Early Detection of Complications in High-Risk Surgical Patients",
      authors: "Johnson S, Patel M, et al.",
      journal: "Journal of Medical Systems",
      year: 2021,
      link: "https://mortonjournal.org"
    }
  ];

  return (
    <Section id="publications" className="bg-medical-grey">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-medical-blue font-medium mb-2 block">Our Publications</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Research Publications
          </h2>
          <p className="text-gray-600">
            Explore our recent publications in peer-reviewed journals, showcasing our contributions 
            to the field of medical data science and artificial intelligence.
          </p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-medium">Recent Papers</h3>
          <a 
            href="https://mortonjournal.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-medical-blue hover:underline gap-1 text-sm"
          >
            Visit Morton Journal <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="space-y-6">
          {publications.map((pub) => (
            <div 
              key={pub.id} 
              className="bg-white p-6 rounded-xl shadow-soft hover:shadow-medium transition-shadow"
            >
              <div className="flex justify-between">
                <div className="flex-1 pr-4">
                  <h4 className="font-medium text-lg mb-2">{pub.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{pub.authors}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {pub.journal}
                    </span>
                    <span>•</span>
                    <span>{pub.year}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-medical-blue hover:bg-medical-lightBlue p-2 rounded-full transition-colors"
                    aria-label="View publication"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://mortonjournal.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg border border-medical-blue text-medical-blue font-medium hover:bg-medical-lightBlue transition-colors"
          >
            View All Publications
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Publications;
