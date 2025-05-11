
import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description: "Led development of enterprise SaaS platforms, managed a team of 5 developers, and implemented CI/CD pipelines that reduced deployment time by 40%.",
      technologies: ["React", "Node.js", "AWS", "MongoDB"]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2018 - 2020",
      description: "Developed and maintained multiple client web applications, increased site performance by 35%, and implemented responsive designs across all platforms.",
      technologies: ["Angular", "Express", "PostgreSQL", "Docker"]
    },
    {
      role: "Frontend Developer",
      company: "Creative Web Agency",
      period: "2016 - 2018",
      description: "Created interactive UIs for clients in various industries, collaborated with designers to implement pixel-perfect designs, and optimized web performance.",
      technologies: ["JavaScript", "HTML/CSS", "jQuery", "SASS"]
    }
  ];
  
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
      image: "bg-gray-200",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Task Management App",
      description: "A Kanban-style project management tool with real-time updates, file sharing, and team collaboration features.",
      image: "bg-gray-200",
      category: "frontend",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Fitness Tracking API",
      description: "RESTful API for tracking workouts, nutrition, and health metrics with data visualization capabilities.",
      image: "bg-gray-200",
      category: "backend",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media accounts with report generation and scheduling features.",
      image: "bg-gray-200",
      category: "fullstack",
      technologies: ["Vue.js", "Express", "GraphQL", "Chart.js"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Portfolio</h2>
        
        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-navy-900">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 rounded-full bg-blue-500"></div>
                <h4 className="text-lg font-semibold text-navy-900">{exp.role}</h4>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{exp.company}</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-blue-50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Projects */}
        <h3 className="text-2xl font-semibold mb-8 text-navy-900">Projects</h3>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className={`h-48 ${project.image} flex items-center justify-center text-gray-400`}>
                <span className="text-sm">Project Image</span>
              </div>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-2 text-navy-900">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.links.demo} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a href={project.links.github} className="flex items-center text-sm text-gray-600 hover:text-gray-800">
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
