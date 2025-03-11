
import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medical-grey py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-medical-blue">MedDSAI</h3>
            <p className="text-gray-600 max-w-md">
              Medical Data Science and Artificial Intelligence Division under the Department of Anesthesiology and Intensive Care, Medical Faculty of Udayana University.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://mortonjournal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-medical-blue hover:underline gap-1 text-sm"
              >
                Visit our Journal <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-600 hover:text-medical-blue transition-colors">
                About Us
              </a>
              <a href="#research" className="block text-gray-600 hover:text-medical-blue transition-colors">
                Research
              </a>
              <a href="#team" className="block text-gray-600 hover:text-medical-blue transition-colors">
                Our Team
              </a>
              <a href="#publications" className="block text-gray-600 hover:text-medical-blue transition-colors">
                Publications
              </a>
              <a href="#contact" className="block text-gray-600 hover:text-medical-blue transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-medical-blue shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Department of Anesthesiology and Intensive Care, Medical Faculty of Udayana University, Bali, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-medical-blue" />
                <a href="mailto:contact@meddsai.org" className="text-gray-600 hover:text-medical-blue transition-colors">
                  contact@meddsai.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-medical-blue" />
                <span className="text-gray-600">+62 (0) 123 456789</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} MedDSAI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-medical-blue transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-medical-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
