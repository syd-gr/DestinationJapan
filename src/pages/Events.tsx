import React from 'react';
import { EVENTS } from '../constants';
import { Clock, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Events & Seminars</h1>
          <p className="text-blue-100">Join our upcoming sessions to learn more about life in Japan.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-6 max-w-4xl mx-auto">
          {EVENTS.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow border-l-4 border-secondary">
              <div className="flex-shrink-0 flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg min-w-[120px]">
                <span className="text-secondary font-bold text-3xl">{event.date.split(' ')[1].replace(',','')}</span>
                <span className="text-gray-600 font-medium uppercase text-sm">{event.date.split(' ')[0]}</span>
                <span className="text-gray-400 text-xs mt-1">{event.date.split(' ')[2]}</span>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                   <span className="bg-blue-100 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">{event.type}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 border-t pt-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} /> 10:00 AM - 2:00 PM
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} /> Main Hall, NipponNepal Office
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:border-l pl-0 md:pl-6">
                 <button className="bg-primary text-white px-6 py-2 rounded font-medium hover:bg-blue-800 transition-colors w-full md:w-auto">
                   Register
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;