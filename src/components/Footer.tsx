
import React, { useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  // Intersection Observer for scroll animations
  const animateOnScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(animateOnScroll, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    document.querySelectorAll('.scroll-animation').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <footer id="contact" className="bg-black text-white py-16 overflow-hidden">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="scroll-animation opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Interested in working together or have a question? Feel free to reach out to me via email or use the contact form.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center hover-lift">
                <Mail className="mr-3 text-blue-400 animate-float" style={{ animationDelay: '0s' }} />
                <a href="mailto:contact@example.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center hover-lift">
                <Phone className="mr-3 text-blue-400 animate-float" style={{ animationDelay: '0.5s' }} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center hover-lift">
                <MapPin className="mr-3 text-blue-400 animate-float" style={{ animationDelay: '1s' }} />
                <span className="text-gray-300">
                  San Francisco, CA, United States
                </span>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform">
                <Github size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform">
                <Linkedin size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform">
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div className="scroll-animation opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-6">Send Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-2 rounded glass-dark focus:outline-none focus:ring-2 focus:ring-blue-500 text-white hover-lift"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 rounded glass-dark focus:outline-none focus:ring-2 focus:ring-blue-500 text-white hover-lift"
                  />
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-2 rounded glass-dark focus:outline-none focus:ring-2 focus:ring-blue-500 text-white hover-lift"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your message" 
                  rows={4} 
                  className="w-full px-4 py-2 rounded glass-dark focus:outline-none focus:ring-2 focus:ring-blue-500 text-white hover-lift"
                ></textarea>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 hover-lift">Send Message</Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm scroll-animation opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
          <p>© {new Date().getFullYear()} - All Rights Reserved</p>
          <p className="mt-2">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
