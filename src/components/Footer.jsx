import React from 'react';
import { Phone, MessageCircle, MapPin, Facebook, Instagram, Twitter} from 'lucide-react';
const WhatsAppIcon = ({ className = "h-4 w-4" }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TICK YOUR TRIP</h3>
            <p className="text-gray-300 mb-4 italic">To reset, recharge, and live longer.</p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted travel companion for unforgettable journeys across the globe. 
              We create personalized travel experiences that transform the way you see the world.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/919354042780" className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-colors">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a href="tel:+919354042780" className="bg-sky-600 p-3 rounded-full hover:bg-sky-700 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-sky-400 p-3 rounded-full hover:bg-sky-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#packages" className="text-gray-300 hover:text-white transition-colors">Packages</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#achievements" className="text-gray-300 hover:text-white transition-colors">Achievements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-sky-400" />
                <span className="text-gray-300">+91 9354042780</span>
              </div>
              <div className="flex items-center">
                <WhatsAppIcon className="h-5 w-5 mr-3 text-green-400" />
                <span className="text-gray-300">WhatsApp Available</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-orange-400" />
                <span className="text-gray-300">India & Worldwide</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2025 TICK YOUR TRIP. All rights reserved. | Designed by Chinmay Parida.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;