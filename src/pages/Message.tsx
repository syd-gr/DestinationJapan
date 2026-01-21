import React from 'react';
import { Quote } from 'lucide-react';

const Message: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Message from Management</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-2xl shadow-xl relative border border-gray-100">
           <div className="absolute top-8 left-8 text-primary/10">
             <Quote size={80} />
           </div>
           
           <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src="/img/team-3.webp"
                  alt="Managing Director" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover border-4 border-white"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-xl text-primary">Mr. Dilip kr Shrestha</h3>
                  <p className="text-secondary font-medium">Managing Director</p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-primary mb-6">Namaste and Konnichiwa!</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    It gives me immense pleasure to welcome you to Destination Japanese Language Institute and Consultancy. Japan has emerged not just as a global economic powerhouse but as a center for academic excellence and technological innovation.
                  </p>
                  <p>
                    For Nepalese students and skilled workers, Japan offers a unique blend of high-quality life, safe environment, and tremendous career growth. However, the path to Japan requires discipline, language proficiency, and accurate documentation.
                  </p>
                  <p>
                    At Destination Japanese Language Institute and Consultancy, we pledge to provide you with honest counseling and top-tier language training. We treat every applicant's dream as our own responsibility.
                  </p>
                  <p>
                    I invite you to visit our office and experience the difference in our approach. Let us work together to build your future.
                  </p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Message;