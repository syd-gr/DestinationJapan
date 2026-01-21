import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';
import { ArrowRight, CheckCircle, GraduationCap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/hero-img.jpg" 
            alt="Japan Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block bg-secondary px-4 py-1 rounded-full text-sm font-semibold mb-6 tracking-wide">
              NO. 1 CONSULTANCY IN NEPAL
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your Gateway to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">
                Education & Career
              </span> in Japan
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              From language mastery to visa processing, we provide end-to-end guidance to help you build a successful future in the Land of the Rising Sun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-secondary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2"
              >
                Start Your Journey <ArrowRight size={20} />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative -mt-16 z-20 container mx-auto px-4 rounded-xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-4 border-r last:border-r-0 border-gray-100">
            <div className="text-secondary font-bold text-4xl mb-2">10+</div>
            <div className="text-gray-600 font-medium">Years Experience in Japan</div>
          </div>
          <div className="text-center p-4 border-r last:border-r-0 border-gray-100">
            <div className="text-primary font-bold text-4xl mb-2">200+</div>
            <div className="text-gray-600 font-medium">Students Placed</div>
          </div>  
          <div className="text-center p-4 border-r last:border-r-0 border-gray-100">
            <div className="text-secondary font-bold text-4xl mb-2">99%</div>
            <div className="text-gray-600 font-medium">Visa Success Rate</div>
          </div>
          <div className="text-center p-4">
            <div className="text-primary font-bold text-4xl mb-2">10+</div>
            <div className="text-gray-600 font-medium">School Partners</div>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/img/about.jpg" 
                alt="Counseling" 
                className="rounded-lg shadow-2xl z-10 relative w-full max-w-md mx-auto" 
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl z-0"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-secondary font-bold tracking-wider uppercase mb-2">Who We Are</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Bridging Dreams Between Nepal & Japan</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Established with a vision to provide authentic and transparent educational consultancy services, Destination Japanese Language Institue and Consultancy has become a trusted name for students and job seekers. We don't just process visas; we build careers.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Certified Educational Counselors",
                "Complete Documentation Support",
                "JLPT/NAT Preparation by Qualified Instructors",
                "Direct Tie-ups with Top Japanese Language aschool"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="text-primary font-bold hover:text-secondary flex items-center gap-2 group">
              Read More About Us <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Premium Services</h2>
            <p className="text-gray-600">Tailored solutions for every step of your journey to Japan.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <service.icon className="text-secondary" size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                  <Link to={`/services/${service.id}`} className="inline-flex items-center text-secondary font-semibold hover:text-red-800">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
         {/* Decorative pattern */}
         <div className="absolute top-0 right-0 p-12 opacity-5">
            <GraduationCap size={400} />
         </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Japanese Adventure?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Book a free counseling session today. Our experts are ready to guide you through the next enrollment intake.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-secondary text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:bg-red-700 transition-all">
              Book Appointment
            </Link>
            <a href="tel:+97712345678" className="bg-white text-primary px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Student Success Stories</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary relative">
                <div className="absolute top-4 right-8 text-6xl text-gray-100 font-serif leading-none">"</div>
                <p className="text-gray-600 italic mb-6 relative z-10">{t.content}</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                      {t.name.charAt(0)}
                   </div>
                   <div>
                     <h4 className="font-bold text-primary">{t.name}</h4>
                     <p className="text-xs text-secondary font-semibold uppercase">{t.role} • {t.location}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;