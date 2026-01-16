import React from 'react';
import { Phone } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a 
        href="#"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center w-14 h-14"
        title="Chat on WhatsApp"
      >
         {/* Simple text representation since specific brand icons aren't in Lucide */}
         <span className="font-bold text-xs">WA</span>
      </a>
      <a 
        href="#"
        className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center w-14 h-14"
        title="Chat on Viber"
      >
        <span className="font-bold text-xs">VB</span>
      </a>
      <a 
        href="tel:+97714XXXXXX"
        className="bg-primary hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center w-14 h-14"
        title="Call Us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default StickyCTA;