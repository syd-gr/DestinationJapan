import React from 'react';
import { Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            A decade of excellence in connecting Nepalese talent with Japanese opportunities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
          Founded in October 2024, our educational consultancy marks the beginning of a new chapter in Nepal, building upon a solid foundation of experience and success in Japan. While we are a newly established consultancy in Nepal, our roots in Japan run deep, where we have been actively contributing to sectors such as human resources, work support, construction, and room support since 2016. Our diverse team includes talented individuals from Japan, Nepal, Sri Lanka, and Vietnam, working together across all departments to provide exceptional services. With over 500 full-time and part-time employees, we are a dynamic organization that values hard work, dedication, and a global perspective. We are passionate about bringing our extensive experience to Nepal and offering more than just educational consultancy services. Our mission is to not only guide students in their educational journeys but to also support them in their everyday lives. Whether you need help adapting to life in Japan, securing part-time job opportunities, or even finding full-time employment after graduation, we are here to support you every step of the way. At the heart of our work is a commitment to building meaningful futures. Let us help you navigate your lifestyle needs, find opportunities in Japan, and create a fulfilling career that will last a lifetime. We look forward to working together to shape your future.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To empower students and professionals with correct information and skills to succeed in Japan.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-red-100 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading bridge between Nepal and Japan, fostering cultural and economic exchange.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Our Values</h3>
            <p className="text-gray-600">
              Integrity, Transparency, Excellence, and Student-Centricity are at the core of everything we do.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-l-8 border-secondary">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <h2 className="text-3xl font-bold text-primary mb-6">Why Choose DestinationJapan?</h2>
               <div className="space-y-4">
                 <div className="flex gap-4">
                   <span className="text-6xl font-bold text-gray-200">01</span>
                   <div>
                     <h4 className="text-xl font-bold text-gray-800">Direct School Partnerships</h4>
                     <p className="text-gray-600">We deal directly with institutions, ensuring faster processing.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <span className="text-6xl font-bold text-gray-200">02</span>
                   <div>
                     <h4 className="text-xl font-bold text-gray-800">High Visa Success Rate</h4>
                     <p className="text-gray-600">Our meticulous documentation has led to a 99.99% approval rate.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <span className="text-6xl font-bold text-gray-200">03</span>
                   <div>
                     <h4 className="text-xl font-bold text-gray-800">Support in Japan</h4>
                     <p className="text-gray-600">Our job doesn't end in Nepal. We have a support desk in Tokyo.</p>
                   </div>
                 </div>
               </div>
            </div>
            <div className="md:w-1/2">
              <img src="/img/about.jpg" alt="Team meeting" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;