import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { APP_NAME, ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm">NN</span>
              {APP_NAME}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We bridge the gap between Nepalese ambition and Japanese opportunity. Trusted by thousands of students and professionals since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-secondary pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li><NavLink to="/about" className="text-gray-300 hover:text-white hover:pl-2 transition-all">About Us</NavLink></li>
              <li><NavLink to="/services" className="text-gray-300 hover:text-white hover:pl-2 transition-all">Our Services</NavLink></li>
              <li><NavLink to="/team" className="text-gray-300 hover:text-white hover:pl-2 transition-all">Our Team</NavLink></li>
              <li><NavLink to="/message" className="text-gray-300 hover:text-white hover:pl-2 transition-all">Message from MD</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-300 hover:text-white hover:pl-2 transition-all">Contact Support</NavLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-secondary pl-3">Our Services</h3>
            <ul className="space-y-3">
              <li><NavLink to="/services/student-visa" className="text-gray-300 hover:text-white hover:pl-2 transition-all">Student Visa</NavLink></li>
              <li><NavLink to="/services/ssw" className="text-gray-300 hover:text-white hover:pl-2 transition-all">SSW Program</NavLink></li>
              <li><NavLink to="/services/language" className="text-gray-300 hover:text-white hover:pl-2 transition-all">Language Classes</NavLink></li>
              <li><NavLink to="/services/work-visa" className="text-gray-300 hover:text-white hover:pl-2 transition-all">Work Visa</NavLink></li>
              <li><NavLink to="/services/tourist-visa" className="text-gray-300 hover:text-white hover:pl-2 transition-all">Tourist Visa</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-secondary pl-3">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={18} />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <span>{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <span>{EMAIL_ADDRESS}</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-blue-900 rounded-lg border border-blue-800">
              <h4 className="font-semibold text-sm mb-2 text-white">Join our newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/10 border border-white/20 rounded px-3 py-1 text-sm w-full text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
                />
                <button className="bg-secondary p-2 rounded hover:bg-red-700 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All Rights Reserved. Designed with ❤️ in Nepal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;