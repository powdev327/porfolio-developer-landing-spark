
import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-xl md:text-2xl font-medium text-blue-600 mb-2">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy-900">
            Full Stack <span className="highlight">Developer</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            With over 5 years of experience building robust and scalable web applications.
            I specialize in creating modern, responsive user interfaces and powerful backend systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-navy-900 hover:bg-navy-800">
              View My Work
            </Button>
            <Button variant="outline">
              Download Resume
            </Button>
          </div>
          
          <div className="mt-8 flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={22} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center overflow-hidden">
              {/* Developer image placeholder */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                <span className="text-sm">Developer Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Welcome;
