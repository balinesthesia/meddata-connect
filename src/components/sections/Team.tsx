
import React from "react";
import Section from "../ui/Section";
import { LinkedIn, Mail } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      role: "Division Head & Principal Investigator",
      bio: "Anesthesiologist with expertise in AI applications for pain management and perioperative care.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      email: "jane.smith@meddsai.org",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Dr. Robert Chen",
      role: "Research Director",
      bio: "Specializes in machine learning algorithms for critical care decision support systems.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      email: "robert.chen@meddsai.org",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      role: "Data Science Lead",
      bio: "Expert in biomedical data analysis and predictive modeling for patient outcomes.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
      email: "sarah.johnson@meddsai.org",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Prof. Michael Patel",
      role: "Clinical Integration Specialist",
      bio: "Focuses on translating research findings into practical clinical applications.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2078&q=80",
      email: "michael.patel@meddsai.org",
      linkedin: "#"
    }
  ];

  return (
    <Section id="team" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-medical-blue font-medium mb-2 block">Our Team</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet the Experts Behind Our Innovation
        </h2>
        <p className="text-gray-600">
          Our multidisciplinary team combines expertise in medicine, data science, 
          and engineering to develop groundbreaking solutions for healthcare challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="group">
            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5]">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 ease-custom group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-sm text-white/90">{member.role}</p>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
              <div className="flex space-x-3">
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-gray-500 hover:text-medical-blue transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                )}
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    className="text-gray-500 hover:text-medical-blue transition-colors"
                    aria-label={`LinkedIn profile for ${member.name}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <LinkedIn className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 mb-4">
          Interested in joining our team?
        </p>
        <a 
          href="#contact" 
          className="inline-block px-6 py-3 rounded-lg bg-medical-blue text-white font-medium hover:shadow-lg transition-all"
        >
          Get in Touch
        </a>
      </div>
    </Section>
  );
};

export default Team;
