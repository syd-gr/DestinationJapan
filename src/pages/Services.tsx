import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  const { type } = useParams();

  useEffect(() => {
    if (type) {
      const element = document.getElementById(type);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [type]);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-blue-100 max-w-2xl">
            We offer comprehensive support for every aspect of your journey to Japan, tailored to meet your specific goals.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-16">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 pt-8`}
            >
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary p-3 rounded-xl shadow-lg">
                    <service.icon size={32} />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  {service.title}
                  <div className="h-1 flex-grow bg-gray-100 ml-4 rounded-full max-w-[100px]">
                    <div className="h-full w-1/2 bg-secondary rounded-full"></div>
                  </div>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                  <br /><br />
                  Our expert team ensures that every document is meticulously prepared, and you are fully trained to face interviews and cultural integration.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Expert Guidance", "Document Review", "Interview Prep", "Post-Arrival Support"].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check size={12} className="text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;