import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100">We are here to answer all your questions.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info & Map */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Visit Our Office</h3>
                    <p className="text-gray-600">{ADDRESS}</p>
                    <p className="text-gray-500 text-sm mt-1">Opposite City Center Mall</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Call Us</h3>
                    <p className="text-gray-600">{PHONE_NUMBER}</p>
                    <p className="text-gray-600">+977 98510 90450</p>
                    <p className="text-gray-600">+977 98435 61314</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email Us</h3>
                    <p className="text-gray-600">{EMAIL_ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-300 relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d220.71338571832058!2d85.31759271056696!3d27.735368619750098!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQ0JzA3LjUiTiA4NcKwMTknMDMuNiJF!5e0!3m2!1sen!2sjp!4v1768551476975!5m2!1sen!2sjp"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Google Map"
               ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border-t-4 border-secondary">
              <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                  <p>Thank you for contacting us. Our team will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-semibold underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                        placeholder="98XXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    >
                      <option>General Inquiry</option>
                      <option>Student Visa Consultation</option>
                      <option>Language Classes</option>
                      <option>SSW Program</option>
                      <option>Work/Tourist Visa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-blue-900 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;