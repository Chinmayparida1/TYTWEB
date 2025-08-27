// import React from 'react';
// import { Award, Globe, Shield, Clock, Heart, Plane, MapPin, Users } from 'lucide-react';

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center bg-sky-50 px-4 py-2 rounded-full mb-6">
//             <Globe className="h-5 w-5 text-sky-600 mr-2" />
//             <span className="text-sky-700 font-medium">India-based • Global Reach</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             About <span className="text-sky-600">TICK YOUR TRIP</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Your trusted global travel booking portal connecting you to 130+ countries worldwide
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
//           {/* Content Section */}
//           <div className="lg:col-span-7 space-y-8">
            
//             {/* Introduction */}
//             <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
//                 <Plane className="h-6 w-6 text-sky-600 mr-3" />
//                 Global Travel Made Simple
//               </h3>
//               <p className="text-lg text-gray-700 leading-relaxed mb-4">
//                 Tick Your Trip is an <strong>India-based global travel booking portal</strong> where you can effortlessly 
//                 book flights, hotels, holidays and vacation packages across <span className="bg-sky-100 px-2 py-1 rounded text-sky-800 font-semibold">130+ countries</span> worldwide.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 We help travelers find the best deals by comparing options from <span className="bg-blue-100 px-2 py-1 rounded text-blue-800 font-semibold">500+ airlines</span>, 
//                 ensuring you always <strong className="text-sky-700">travel more for less!</strong>
//               </p>
//             </div>

//             {/* Services */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
//                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//                   <MapPin className="h-6 w-6 text-green-600" />
//                 </div>
//                 <h4 className="font-semibold text-gray-900 mb-2">Domestic Travel</h4>
//                 <p className="text-gray-600 text-sm">Comprehensive travel solutions within India - flights, hotels, and holiday packages</p>
//               </div>
              
//               <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
//                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
//                   <Globe className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <h4 className="font-semibold text-gray-900 mb-2">International Travel</h4>
//                 <p className="text-gray-600 text-sm">Global destinations across Europe, Middle East, Africa, Australia & Americas</p>
//               </div>
//             </div>

//             {/* Mission Statement */}
//             <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-sky-500">
//               <blockquote className="text-lg text-gray-700 italic leading-relaxed">
//                 "We operate to serve people by fulfilling their travel needs, making your experience easier and affordable - 
//                 not only because we are the best at what we do, but because we <strong className="text-sky-700 not-italic">love doing it!</strong>"
//               </blockquote>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="lg:col-span-5">
//             <div className="relative h-full min-h-[500px]">
//               {/* Main Image */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
//                 <img
//                   src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
//                   alt="Global travel destinations and flight booking"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
//               </div>
              
//               {/* Floating Stats Cards */}
//               <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-lg">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-sky-600">130+</div>
//                   <div className="text-xs text-gray-600">Countries</div>
//                 </div>
//               </div>
              
//               <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
//                 <div className="flex items-center space-x-3">
//                   <Plane className="h-8 w-8 text-blue-600" />
//                   <div>
//                     <div className="font-bold text-gray-900">500+ Airlines</div>
//                     <div className="text-sm text-gray-600">Best Deals</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Why Choose Us Section */}
//         <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20">
//           <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
//             Why Choose Tick Your Trip?
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center group">
//               <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
//                 <Shield className="h-10 w-10 text-white" />
//               </div>
//               <h4 className="text-xl font-bold text-gray-900 mb-3">IATA Certified Professionals</h4>
//               <p className="text-gray-600 leading-relaxed">
//                 Our travel professionals are IATA certified, ensuring you can book your trip with complete confidence and industry-standard expertise.
//               </p>
//             </div>

//             <div className="text-center group">
//               <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
//                 <Clock className="h-10 w-10 text-white" />
//               </div>
//               <h4 className="text-xl font-bold text-gray-900 mb-3">24/7 Customer Support</h4>
//               <p className="text-gray-600 leading-relaxed">
//                 Round-the-clock customer support to assist you whenever you need help, ensuring peace of mind throughout your journey.
//               </p>
//             </div>

//             <div className="text-center group">
//               <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
//                 <Heart className="h-10 w-10 text-white" />
//               </div>
//               <h4 className="text-xl font-bold text-gray-900 mb-3">Passionate Service</h4>
//               <p className="text-gray-600 leading-relaxed">
//                 Our passion is to make every trip an unforgettable journey, creating amazing experiences that last a lifetime.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Statistics */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
//           <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
//             <div className="text-4xl font-bold text-sky-600 mb-2">130+</div>
//             <div className="text-gray-600 font-medium">Countries Covered</div>
//           </div>
//           <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
//             <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
//             <div className="text-gray-600 font-medium">Partner Airlines</div>
//           </div>
//           <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
//             <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
//             <div className="text-gray-600 font-medium">Happy Travelers</div>
//           </div>
//           <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
//             <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
//             <div className="text-gray-600 font-medium">Customer Support</div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white">
//           <div className="absolute inset-0 bg-black/10"></div>
//           <div className="relative z-10">
//             <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
//             <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//               Book your next trip with us and experience the difference of traveling with India's trusted global travel portal!
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
//                 Book Your Trip Now
//               </button>
//               <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-sky-600 transition-colors">
//                 Get Free Quote
//               </button>
//             </div>
//           </div>
          
//           {/* Decorative Elements */}
//           <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
//           <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import React from 'react';
import { Award, Globe, Shield, Clock, Heart, Plane, MapPin, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-sky-50 px-4 py-2 rounded-full mb-6">
            <Globe className="h-5 w-5 text-sky-600 mr-2" />
            <span className="text-sky-700 font-medium">India-based • Global Reach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-sky-600">TICK YOUR TRIP</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your trusted global travel booking portal connecting you to 130+ countries worldwide
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Content Section */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Introduction */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Plane className="h-6 w-6 text-sky-600 mr-3" />
                Global Travel Made Simple
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Tick Your Trip is an <strong>India-based global travel booking portal</strong> where you can effortlessly 
                book flights, hotels, holidays and vacation packages across <span className="bg-sky-100 px-2 py-1 rounded text-sky-800 font-semibold">130+ countries</span> worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We help travelers find the best deals by comparing options from <span className="bg-blue-100 px-2 py-1 rounded text-blue-800 font-semibold">500+ airlines</span>, 
                ensuring you always <strong className="text-sky-700">travel more for less!</strong>
              </p>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Domestic Travel</h4>
                <p className="text-gray-600 text-sm">Comprehensive travel solutions within India - flights, hotels, and holiday packages</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">International Travel</h4>
                <p className="text-gray-600 text-sm">Global destinations across Europe, Middle East, Africa, Australia & Americas</p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-sky-500">
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "We operate to serve people by fulfilling their travel needs, making your experience easier and affordable - 
                not only because we are the best at what we do, but because we <strong className="text-sky-700 not-italic">love doing it!</strong>"
              </blockquote>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[500px]">
              {/* Main Image - Travel Booking Portal Theme */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg"
                  alt="Online travel booking portal with flight search and hotel booking"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-600/20 to-transparent"></div>
              </div>
              
              {/* Booking Portal UI Overlay */}
              <div className="absolute top-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900 text-sm">Quick Book</h4>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                  {/* <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs">
                      <Plane className="h-3 w-3 text-blue-600" />
                      <span className="text-gray-600">DEL → NYC</span>
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Best Price</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <MapPin className="h-3 w-3 text-orange-600" />
                      <span className="text-gray-600">5-Star Hotels Available</span>
                    </div>
                  </div> */}
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className="absolute top-32 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-600">130+</div>
                  <div className="text-xs text-gray-600">Countries</div>
                  <div className="text-xs text-green-600 font-medium">✓ Available</div>
                </div>
              </div>
              
              {/* Service Indicators */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <Plane className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <div className="text-xs font-medium text-gray-900">Flights</div>
                      <div className="text-xs text-gray-600">500+ Airlines</div>
                    </div>
                    <div className="text-center">
                      <MapPin className="h-6 w-6 text-green-600 mx-auto mb-1" />
                      <div className="text-xs font-medium text-gray-900">Hotels</div>
                      <div className="text-xs text-gray-600">Best Rates</div>
                    </div>
                    <div className="text-center">
                      <Globe className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                      <div className="text-xs font-medium text-gray-900">Packages</div>
                      <div className="text-xs text-gray-600">Customized Plans</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Live Booking Indicator */}
              {/* <div className="absolute top-24 left-6">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  Live Booking
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Tick Your Trip?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">IATA Certified Professionals</h4>
              <p className="text-gray-600 leading-relaxed">
                Our travel professionals are IATA certified, ensuring you can book your trip with complete confidence and industry-standard expertise.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">24/7 Customer Support</h4>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock customer support to assist you whenever you need help, ensuring peace of mind throughout your journey.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Passionate Service</h4>
              <p className="text-gray-600 leading-relaxed">
                Our passion is to make every trip an unforgettable journey, creating amazing experiences that last a lifetime.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="text-4xl font-bold text-sky-600 mb-2">130+</div>
            <div className="text-gray-600 font-medium">Countries Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Partner Airlines</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
            <div className="text-gray-600 font-medium">Happy Travelers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Customer Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book your next trip with us and experience the difference of traveling with India's trusted global travel portal!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Book Your Trip Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-sky-600 transition-colors">
                Get Free Quote
              </button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;