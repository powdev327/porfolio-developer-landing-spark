
import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-900 text-white py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Interested in working together or have a question? Feel free to reach out to me via email or use the contact form.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 text-blue-400" size={20} />
                <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-blue-400" size={20} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 text-blue-400" size={20} />
                <span className="text-gray-300">
                  San Francisco, CA, United States
                </span>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Send Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-2 rounded bg-navy-800 border border-navy-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 rounded bg-navy-800 border border-navy-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-2 rounded bg-navy-800 border border-navy-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your message" 
                  rows={4} 
                  className="w-full px-4 py-2 rounded bg-navy-800 border border-navy-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                ></textarea>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-navy-700 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} - All Rights Reserved</p>
          <p className="mt-2">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
