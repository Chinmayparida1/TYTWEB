// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, X, Send, MessageSquare, User, Mail, Phone } from 'lucide-react';

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     query: '',
//     name: '',
//     email: '',
//     mobile: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const slides = [
//     {
//       image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
//       title: 'Explore the World with Us',
//       subtitle: 'Discover breathtaking destinations and create memories that last forever'
//     },
//     {
//       image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg',
//       title: 'Adventure Awaits',
//       subtitle: 'Experience the thrill of new cultures and magnificent landscapes'
//     },
//     {
//       image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
//       title: 'Reset, Recharge, Reconnect',
//       subtitle: 'Find your perfect escape and return refreshed and rejuvenated'
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   // Close modal when clicking outside
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') {
//         setIsModalOpen(false);
//       }
//     };
//     document.addEventListener('keydown', handleEscape);
//     return () => document.removeEventListener('keydown', handleEscape);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async () => {
//     // Basic validation
//     if (!formData.query.trim() || !formData.name.trim() || !formData.email.trim() || !formData.mobile.trim()) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate form submission
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Here you would normally send the data to your backend
//       console.log('Form submitted:', formData);
      
//       // Reset form and close modal
//       setFormData({ query: '', name: '', email: '', mobile: '' });
//       setIsModalOpen(false);
      
//       // You could show a success message here
//       alert('Thank you! We will get back to you soon.');
      
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setFormData({ query: '', name: '', email: '', mobile: '' });
//   };

//   return (
//     <>
//       <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center text-white px-4">
//                 <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
//                   {slide.title}
//                 </h2>
//                 <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
//                   {slide.subtitle}
//                 </p>
//                 <button 
//                   onClick={openModal}
//                   className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
//                 >
//                   Start Your Journey
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
        
//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </button>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Modal Overlay */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 relative animate-scale-in">
            
//             {/* Header with Close Button */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900">Plan Your Trip</h3>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-400 hover:text-gray-600 transition-colors p-1"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             {/* Form */}
//             <div className="p-6 space-y-4">
              
//               {/* Query Field */}
//               <div>
//                 <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
//                   Travel Requirements
//                 </label>
//                 <textarea
//                   id="query"
//                   name="query"
//                   value={formData.query}
//                   onChange={handleInputChange}
//                   placeholder="Tell us about your destination, dates, budget, and preferences..."
//                   rows={3}
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
//                 />
//               </div>

//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="Your full name"
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
//                 />
//               </div>

//               {/* Email and Phone Row */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="your@email.com"
//                     required
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     id="mobile"
//                     name="mobile"
//                     value={formData.mobile}
//                     onChange={handleInputChange}
//                     placeholder="Mobile number"
//                     required
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
//               >
//                 {isSubmitting ? (
//                   <div className="flex items-center justify-center">
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                     Sending...
//                   </div>
//                 ) : (
//                   'Submit Inquiry'
//                 )}
//               </button>

//               {/* Footer */}
//               <p className="text-xs text-gray-500 text-center">
//                 We'll contact you within 24 hours
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes scale-in {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
        
//         .animate-scale-in {
//           animation: scale-in 0.3s ease-out;
//         }

//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes fade-in-delay {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .animate-fade-in {
//           animation: fade-in 1s ease-out;
//         }

//         .animate-fade-in-delay {
//           animation: fade-in-delay 1s ease-out 0.3s both;
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeroSlider;
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    travel_requirements: '',
    user_name: '',
    user_email: '',
    user_phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef();

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
      title: 'Explore the World with Us',
      subtitle: 'Discover breathtaking destinations and create memories that last forever'
    },
    {
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg',
      title: 'Adventure Awaits',
      subtitle: 'Experience the thrill of new cultures and magnificent landscapes'
    },
    {
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
      title: 'Reset, Recharge, Reconnect',
      subtitle: 'Find your perfect escape and return refreshed and rejuvenated'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // handle input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // send form via EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.travel_requirements || !formData.user_name || !formData.user_email || !formData.user_phone) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      alert('✅ Thank you! We will get back to you soon.');
      setFormData({ travel_requirements: '', user_name: '', user_email: '', user_phone: '' });
      setIsModalOpen(false);

    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ travel_requirements: '', user_name: '', user_email: '', user_phone: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <button 
                  onClick={openModal}
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all">
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 relative animate-scale-in">
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Plan Your Trip</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-4">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Travel Requirements</label>
                <textarea 
                  name="travel_requirements"
                  value={formData.travel_requirements} 
                  onChange={handleInputChange}
                  placeholder="Destination, dates, budget..." 
                  rows={3} 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 text-sm resize-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  value={formData.user_name} 
                  onChange={handleInputChange} 
                  required
                  placeholder="Your full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 text-sm" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="user_email"
                    value={formData.user_email} 
                    onChange={handleInputChange} 
                    required
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    name="user_phone"
                    value={formData.user_phone} 
                    onChange={handleInputChange} 
                    required
                    placeholder="Mobile number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 text-sm" />
                </div>
              </div>

              {/* Hidden Submitted At field */}
              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md font-medium hover:bg-blue-700 transition disabled:opacity-50 text-sm"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>

              <p className="text-xs text-gray-500 text-center">We'll contact you within 24 hours</p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSlider;
