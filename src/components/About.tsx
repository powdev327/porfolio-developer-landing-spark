
import React from "react";
import { Code, Globe, Laptop, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "GraphQL"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"] },
  ];

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: "Web Development",
      description: "End-to-end web application development with focus on performance and scalability."
    },
    {
      icon: <Laptop className="h-8 w-8 text-blue-500" />,
      title: "Frontend Engineering",
      description: "Creating responsive, accessible, and modern user interfaces with the latest technologies."
    },
    {
      icon: <Server className="h-8 w-8 text-blue-500" />,
      title: "Backend Development",
      description: "Building robust APIs, server architecture, and microservices that power your applications."
    },
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Technical Consultation",
      description: "Expert advice on technology stack selection, system design, and problem solving."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with 5+ years of experience designing and implementing innovative web solutions. 
              I thrive in collaborative environments and enjoy solving complex technical challenges.
            </p>
            <p className="text-lg text-gray-600">
              My approach combines clean, efficient code with thoughtful user experience design to create applications that are both powerful and intuitive.
              I'm constantly learning and exploring new technologies to stay on the cutting edge of web development.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-900 mb-2">{skillGroup.category}</h3>
                <ul className="text-gray-600 text-sm">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="mb-1 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-8 text-navy-900">What I Do</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-navy-900">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
