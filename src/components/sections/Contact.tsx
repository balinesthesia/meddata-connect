
import React, { useState } from "react";
import Section from "../ui/Section";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset submitted status after some time
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <Section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <span className="text-medical-blue font-medium mb-2 block">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in Touch With Our Team
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions about our research, interested in collaboration, or want to learn more about our work?
            Reach out to us using the contact form or through the information below.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="bg-medical-lightBlue p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-medical-blue" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Address</h3>
                <p className="text-gray-600 text-sm">
                  Department of Anesthesiology and Intensive Care,<br />
                  Medical Faculty of Udayana University,<br />
                  Bali, Indonesia
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-medical-lightBlue p-3 rounded-lg">
                <Mail className="h-6 w-6 text-medical-blue" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <a href="mailto:contact@meddsai.org" className="text-gray-600 text-sm hover:text-medical-blue transition-colors">
                  contact@meddsai.org
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-medical-lightBlue p-3 rounded-lg">
                <Phone className="h-6 w-6 text-medical-blue" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">
                  +62 (0) 123 456789
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-medical-grey rounded-xl">
            <h3 className="font-medium mb-3">Visit Our Journal</h3>
            <p className="text-sm text-gray-600 mb-4">
              Explore our published research in the Morton Journal of Anesthesiology, the official journal of our division.
            </p>
            <a 
              href="https://mortonjournal.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-medical-blue font-medium text-sm hover:underline"
            >
              mortonjournal.org
            </a>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 animate-fade-in">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue outline-none transition-all"
                    placeholder="Research Collaboration"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 flex items-center justify-center gap-2 rounded-lg font-medium text-white transition-all ${
                    isSubmitting 
                      ? "bg-medical-blue/70 cursor-not-allowed" 
                      : "bg-medical-blue hover:shadow-md hover:translate-y-[-2px]"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
