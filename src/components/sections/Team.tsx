
import React from "react";
import Section from "../ui/Section";
import { Linkedin, Mail } from "lucide-react";

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
      name: "Dr. Kresna Sucandra",
      role: "Division Head & Medical AI Engineer",
      bio: "Intensivist Anesthesiologist with expertise in AI applications for perioperative and critical care.",
      image: "",
      email: "#",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Dr. Marilaeta Cindryani",
      role: "Research Director & Data Scientist",
      bio: "Intensivist anesthesiologist specializes in machine learning algorithms for critical care decision support systems.",
      image: "",
      email: "#",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Dr. Krisna Sutawan",
      role: "Vice Director & Clinical Researcher",
      bio: "Neuroanesthesiologist expert in biomedical research, and mindfulness for patient outcomes.",
      image: "",
      email: "#",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Dr. Tjahya Aryasa",
      role: "Clinical Integration Specialist",
      bio: "Obstetric Anesthesiologist focuses on translating research findings into practical clinical applications.",
      image: "",
      email: "#",
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
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 mb-4">
          Interested in contributing to our initiatives?
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
