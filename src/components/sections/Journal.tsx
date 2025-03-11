
import React from "react";
import Section from "@/components/ui/Section";
import { BookOpen, ExternalLink } from "lucide-react";

const Journal = () => {
  return (
    <Section id="journal" className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <BookOpen className="inline-block mr-2 h-8 w-8 text-medical-blue" />
              Our Journal
            </h2>
            <div className="w-20 h-1 bg-medical-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Explore the latest research and innovations in medical data science 
              and artificial intelligence through our peer-reviewed journal.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Medical Data Science & AI Journal
              </h3>
              <p className="text-gray-600 mb-6">
                Our quarterly journal features cutting-edge research, case studies, and reviews
                covering the intersection of medical science, data analysis, and artificial intelligence.
                Submissions are peer-reviewed by leading experts in the field.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4">
                    <BookOpen className="h-6 w-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Latest Issue</h4>
                    <p className="text-gray-600">Volume 5, Issue 2 - Spring 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4">
                    <ExternalLink className="h-6 w-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Access</h4>
                    <p className="text-gray-600">Open access for all published articles</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-medical-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Browse Latest Issue
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Submit Manuscript
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
              <h4 className="font-medium text-gray-800 mb-3">Editorial Board</h4>
              <p className="text-gray-600">
                Our diverse editorial board consists of leading researchers and practitioners
                from medical institutions, technology companies, and academic organizations worldwide.
              </p>
              <a 
                href="#"
                className="mt-2 inline-flex items-center text-medical-blue hover:text-blue-700 font-medium"
              >
                Meet the Editorial Board
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Journal;
