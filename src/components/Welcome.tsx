
import React, { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, Fireworks as FireworksIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  
  // Add tilt effect based on mouse position
  useEffect(() => {
    const profileElement = profileRef.current;
    if (!profileElement) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!profileElement) return;
      const rect = profileElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 10;
      const tiltY = (centerX - x) / 10;
      
      profileElement.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };
    
    const handleMouseLeave = () => {
      profileElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      profileElement.style.transition = 'transform 0.5s ease';
    };
    
    profileElement.addEventListener('mousemove', handleMouseMove);
    profileElement.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      profileElement.removeEventListener('mousemove', handleMouseMove);
      profileElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-br from-navy-900 to-black overflow-hidden"
    >
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-2 opacity-0 animate-fade-slide-up anim-delay-100">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white opacity-0 animate-fade-slide-up anim-delay-200">
            Full Stack <span className="highlight animate-pulse-shadow">Developer</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg opacity-0 animate-fade-slide-up anim-delay-300">
            With over 5 years of experience building robust and scalable web applications.
            I specialize in creating modern, responsive user interfaces and powerful backend systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-slide-up anim-delay-400">
            <Button className="bg-blue-600 hover:bg-blue-700 hover-lift">
              <FireworksIcon className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-900/20 hover-lift">
              Download Resume
            </Button>
          </div>
          
          <div className="mt-8 flex items-center space-x-4 opacity-0 animate-fade-slide-up anim-delay-500">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform">
              <Github size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform">
              <Linkedin size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform">
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center" ref={profileRef}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse-shadow">
            <div className="absolute inset-2 rounded-full glass-dark flex items-center justify-center overflow-hidden animate-float">
              {/* Developer image placeholder */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">
                <span className="text-sm">Developer Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Welcome;
