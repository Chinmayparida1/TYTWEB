// import React, { useState } from 'react';
// import { 
//   ChevronDown, 
//   Phone, 
//   ChevronRight,
//   MapPin,
//   Calendar,
//   Star,
//   Globe,
//   Map,
//   Compass,
//   Camera,
//   Mountain,
//   Waves,
//   TreePine,
//   Plane
// } from 'lucide-react';
// import logo from '../assets/logo.png';

// // Custom WhatsApp Icon Component
// const WhatsAppIcon = ({ className = "h-4 w-4" }) => (
//   <svg 
//     className={className}
//     viewBox="0 0 24 24" 
//     fill="currentColor"
//   >
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
//   </svg>
// );

// const ModernTravelHeader = () => {
//   const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
//   const [isPackagesOpen, setIsPackagesOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('domestic');
//   const [activeRegion, setActiveRegion] = useState(null);

//   // Close dropdowns when clicking outside
//   React.useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.dropdown-container')) {
//         setIsDestinationsOpen(false);
//         setIsPackagesOpen(false);
//         setActiveRegion(null);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const destinations = {
//     domestic: {
//       'North India': {
//         icon: <Mountain className="h-4 w-4" />,
//         places: ['Rajasthan', 'Himachal Pradesh', 'Uttarakhand', 'Punjab', 'Haryana'],
//         featured: 'Golden Triangle'
//       },
//       'South India': {
//         icon: <Waves className="h-4 w-4" />,
//         places: ['Kerala', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Telangana'],
//         featured: 'Backwaters & Beaches'
//       },
//       'East India': {
//         icon: <TreePine className="h-4 w-4" />,
//         places: ['Sikkim', 'Assam', 'West Bengal', 'Odisha', 'Tripura'],
//         featured: 'Cultural Heritage'
//       },
//       'West India': {
//         icon: <Compass className="h-4 w-4" />,
//         places: ['Goa', 'Gujarat', 'Maharashtra', 'Rajasthan'],
//         featured: 'Royal Palaces'
//       }
//     },
//     international: {
//       'Southeast Asia': {
//         icon: <Waves className="h-4 w-4" />,
//         places: ['Thailand', 'Bali', 'Singapore', 'Malaysia', 'Vietnam'],
//         featured: 'Tropical Paradise'
//       },
//       'Europe': {
//         icon: <Mountain className="h-4 w-4" />,
//         places: ['Switzerland', 'Italy', 'France', 'Germany', 'Spain'],
//         featured: 'Classic Grand Tour'
//       },
//       'East Asia': {
//         icon: <TreePine className="h-4 w-4" />,
//         places: ['Japan', 'South Korea', 'China', 'Taiwan'],
//         featured: 'Cherry Blossoms'
//       },
//       'Middle East': {
//         icon: <Compass className="h-4 w-4" />,
//         places: ['Dubai', 'Turkey', 'Jordan', 'Egypt'],
//         featured: 'Desert Adventures'
//       }
//     }
//   };

//   const packages = {
//     'Adventure': {
//       icon: <Mountain className="h-4 w-4" />,
//       tours: ['Trekking Tours', 'Wildlife Safari', 'River Rafting', 'Rock Climbing']
//     },
//     'Cultural': {
//       icon: <Camera className="h-4 w-4" />,
//       tours: ['Heritage Tours', 'Temple Circuits', 'Art & Craft Tours', 'Festival Tours']
//     },
//     'Luxury': {
//       icon: <Star className="h-4 w-4" />,
//       tours: ['Palace Hotels', 'Luxury Trains', 'Private Jets', 'Yacht Cruises']
//     },
//     'Family': {
//       icon: <Globe className="h-4 w-4" />,
//       tours: ['Kid-Friendly Tours', 'Educational Tours', 'Theme Parks', 'Beach Resorts']
//     }
//   };

//   const RegionCard = ({ region, data }) => (
//     <div 
//       className="group p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-300 cursor-pointer"
//       onMouseEnter={() => setActiveRegion(region)}
//     >
//       <div className="flex items-center space-x-3 mb-3">
//         <div className="p-2 rounded-lg bg-green-100 text-green-600 group-hover:bg-green-200 transition-colors">
//           {data.icon}
//         </div>
//         <div>
//           <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
//             {region}
//           </h4>
//           <p className="text-xs text-gray-500">{data.featured}</p>
//         </div>
//       </div>
//       <div className="space-y-1">
//         {data.places.slice(0, 3).map((place, idx) => (
//           <div key={idx} className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
//             • {place}
//           </div>
//         ))}
//         {data.places.length > 3 && (
//           <div className="text-sm text-green-600 font-medium">
//             +{data.places.length - 3} more destinations
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   const PackageCard = ({ category, data }) => (
//     <div className="group p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-300 cursor-pointer">
//       <div className="flex items-center space-x-3 mb-3">
//         <div className="p-2 rounded-lg bg-green-100 text-green-600 group-hover:bg-green-200 transition-colors">
//           {data.icon}
//         </div>
//         <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
//           {category} Tours
//         </h4>
//       </div>
//       <div className="space-y-1">
//         {data.tours.map((tour, idx) => (
//           <div key={idx} className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
//             • {tour}
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <header className="relative">
//       {/* Top Bar */}
//       <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center text-sm">
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 <Phone className="h-3 w-3 mr-1" />
//                 <span>+91-9354042780</span>
//               </div>
//               <div className="hidden md:flex items-center">
//                 <MapPin className="h-3 w-3 mr-1" />
//                 <span>Based in Delhi, India</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
//                 Special Offers Available!
//               </span>
//               <div className="flex items-center">
//                 <span className="mr-2">🇮🇳</span>
//                 <span>INR</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="bg-white shadow-xl relative z-50 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             {/* Brand Logo */}
//             <div className="flex items-center space-x-3">
//               {/* Logo Image */}
//               <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg bg-white p-0">
//                 <img 
//                   src={logo}
//                   alt="Tick Your Trip Logo" 
//                   className="w-full h-full object-contain"
//                 />
//               </div>
              
//               <div className="flex flex-col">
//                 <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
//                   TICK YOUR TRIP
//                 </h1>
//                 <p className="text-sm text-green-600 italic font-medium">To reset, recharge, and live longer.</p>
//               </div>
//             </div>

//             {/* Navigation */}
//             <nav className="hidden lg:flex items-center space-x-8">
//               {/* Destinations Dropdown */}
//               <div className="relative dropdown-container">
//                 <button 
//                   className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-all duration-200 font-semibold py-3 px-2 rounded-lg hover:bg-green-50"
//                   onClick={() => {
//                     setIsDestinationsOpen(!isDestinationsOpen);
//                     setIsPackagesOpen(false);
//                   }}
//                   onMouseEnter={() => {
//                     setIsDestinationsOpen(true);
//                     setIsPackagesOpen(false);
//                   }}
//                 >
//                   <Globe className="h-4 w-4" />
//                   <span>Destinations</span>
//                   <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDestinationsOpen ? 'rotate-180' : ''}`} />
//                 </button>
                
//                 {isDestinationsOpen && (
//                   <div 
//                     className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden"
//                     onMouseLeave={() => setTimeout(() => {
//                       setIsDestinationsOpen(false);
//                       setActiveRegion(null);
//                     }, 200)}
//                   >
//                     <div className="w-[800px]">
//                       {/* Tabs */}
//                       <div className="flex border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
//                         <button
//                           className={`flex-1 px-8 py-4 text-sm font-semibold transition-all duration-200 relative ${
//                             activeTab === 'domestic' 
//                               ? 'text-green-600 bg-white' 
//                               : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
//                           }`}
//                           onClick={() => {
//                             setActiveTab('domestic');
//                             setActiveRegion(null);
//                           }}
//                         >
//                           <div className="flex items-center justify-center space-x-2">
//                             <Map className="h-4 w-4" />
//                             <span>Domestic India</span>
//                           </div>
//                           {activeTab === 'domestic' && (
//                             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-t-full"></div>
//                           )}
//                         </button>
//                         <button
//                           className={`flex-1 px-8 py-4 text-sm font-semibold transition-all duration-200 relative ${
//                             activeTab === 'international' 
//                               ? 'text-green-600 bg-white' 
//                               : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
//                           }`}
//                           onClick={() => {
//                             setActiveTab('international');
//                             setActiveRegion(null);
//                           }}
//                         >
//                           <div className="flex items-center justify-center space-x-2">
//                             <Plane className="h-4 w-4" />
//                             <span>International</span>
//                           </div>
//                           {activeTab === 'international' && (
//                             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-t-full"></div>
//                           )}
//                         </button>
//                       </div>

//                       {/* Content */}
//                       <div className="p-6">
//                         <div className="grid grid-cols-2 gap-4">
//                           {Object.entries(destinations[activeTab]).map(([region, data]) => (
//                             <RegionCard key={region} region={region} data={data} />
//                           ))}
//                         </div>
                        
//                         <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
//                           <div className="text-sm text-gray-600">
//                             <span className="font-semibold text-green-600">50+</span> destinations available
//                           </div>
//                           <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center space-x-1 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors">
//                             <span>Explore All Destinations</span>
//                             <ChevronRight className="h-4 w-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Packages Dropdown */}
//               <div className="relative dropdown-container">
//                 <button 
//                   className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-all duration-200 font-semibold py-3 px-2 rounded-lg hover:bg-green-50"
//                   onClick={() => {
//                     setIsPackagesOpen(!isPackagesOpen);
//                     setIsDestinationsOpen(false);
//                   }}
//                   onMouseEnter={() => {
//                     setIsPackagesOpen(true);
//                     setIsDestinationsOpen(false);
//                   }}
//                 >
//                   <Calendar className="h-4 w-4" />
//                   <span>Packages</span>
//                   <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPackagesOpen ? 'rotate-180' : ''}`} />
//                 </button>
                
//                 {isPackagesOpen && (
//                   <div 
//                     className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden"
//                     onMouseLeave={() => setTimeout(() => setIsPackagesOpen(false), 200)}
//                   >
//                     <div className="w-[600px] p-6">
//                       <div className="grid grid-cols-2 gap-4">
//                         {Object.entries(packages).map(([category, data]) => (
//                           <PackageCard key={category} category={category} data={data} />
//                         ))}
//                       </div>
                      
//                       <div className="mt-6 pt-4 border-t border-gray-100 text-center">
//                         <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center space-x-1 hover:bg-green-50 px-6 py-3 rounded-lg transition-colors mx-auto">
//                           <span>View All Package Categories</span>
//                           <ChevronRight className="h-4 w-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Other Nav Items */}
//               <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-semibold py-3 px-2 rounded-lg hover:bg-green-50">
//                 About Us
//               </a>
//               <a href="#achievements" className="text-gray-700 hover:text-green-600 transition-colors font-semibold py-3 px-2 rounded-lg hover:bg-green-50">
//                 Achievements
//               </a>
//             </nav>

//             {/* Action Buttons */}
//             <div className="flex items-center space-x-4">
//               <div className="hidden md:flex items-center space-x-3">
//                 <a 
//                   href="https://wa.me/919354042780" 
//                   className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
//                 >
//                   <WhatsAppIcon className="h-4 w-4" />
//                   <span>WhatsApp</span>
//                 </a>
//                 <a 
//                   href="tel:+919354042780"
//                   className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
//                 >
//                   <Phone className="h-4 w-4" />
//                   <span>Call Now</span>
//                 </a>
//               </div>
              
//               {/* Mobile buttons */}
//               <div className="md:hidden flex space-x-2">
//                 <a 
//                   href="https://wa.me/919354042780" 
//                   className="p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors shadow-lg"
//                 >
//                   <WhatsAppIcon className="h-5 w-5" />
//                 </a>
//                 <a 
//                   href="tel:+919354042780"
//                   className="p-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors shadow-lg"
//                 >
//                   <Phone className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hero Banner Strip */}
//       <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-b border-sky-100 py-3">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-center space-x-8 text-sm">
//             <div className="flex items-center space-x-2 text-sky-700">
//               <Star className="h-4 w-4 fill-current" />
//               <span className="font-semibold">4.8/5 Rating</span>
//               <span className="text-gray-600">from 2000+ travelers</span>
//             </div>
//             <div className="hidden md:flex items-center space-x-2 text-sky-700">
//               <Globe className="h-4 w-4" />
//               <span className="font-semibold">50+ Destinations</span>
//             </div>
//             <div className="hidden md:flex items-center space-x-2 text-sky-700">
//               <Calendar className="h-4 w-4" />
//               <span className="font-semibold">Custom Itineraries</span>
//             </div>
//             <div className="flex items-center space-x-2 text-sky-700">
//               <Phone className="h-4 w-4" />
//               <span className="font-semibold">24/7 Support</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default ModernTravelHeader;
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Phone, 
  ChevronRight,
  MapPin,
  Calendar,
  Star,
  Globe,
  Map,
  Compass,
  Camera,
  Mountain,
  Waves,
  TreePine,
  Plane,
  Menu,
  X
} from 'lucide-react';
import logo from '../assets/logo.png';  
// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className = "h-4 w-4" }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
  </svg>
);

const FullyResponsiveHeader = () => {
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('domestic');
  const [activeRegion, setActiveRegion] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveSection, setMobileActiveSection] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsDestinationsOpen(false);
        setIsPackagesOpen(false);
        setActiveRegion(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const destinations = {
    domestic: {
      'North India': {
        icon: <Mountain className="h-4 w-4" />,
        places: ['Rajasthan', 'Himachal Pradesh', 'Uttarakhand', 'Punjab', 'Haryana'],
        featured: 'Golden Triangle'
      },
      'South India': {
        icon: <Waves className="h-4 w-4" />,
        places: ['Kerala', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Telangana'],
        featured: 'Backwaters & Beaches'
      },
      'East India': {
        icon: <TreePine className="h-4 w-4" />,
        places: ['Sikkim', 'Assam', 'West Bengal', 'Odisha', 'Tripura'],
        featured: 'Cultural Heritage'
      },
      'West India': {
        icon: <Compass className="h-4 w-4" />,
        places: ['Goa', 'Gujarat', 'Maharashtra', 'Rajasthan'],
        featured: 'Royal Palaces'
      }
    },
    international: {
      'Southeast Asia': {
        icon: <Waves className="h-4 w-4" />,
        places: ['Thailand', 'Bali', 'Singapore', 'Malaysia', 'Vietnam'],
        featured: 'Tropical Paradise'
      },
      'Europe': {
        icon: <Mountain className="h-4 w-4" />,
        places: ['Switzerland', 'Italy', 'France', 'Germany', 'Spain'],
        featured: 'Classic Grand Tour'
      },
      'East Asia': {
        icon: <TreePine className="h-4 w-4" />,
        places: ['Japan', 'South Korea', 'China', 'Taiwan'],
        featured: 'Cherry Blossoms'
      },
      'Middle East': {
        icon: <Compass className="h-4 w-4" />,
        places: ['Dubai', 'Turkey', 'Jordan', 'Egypt'],
        featured: 'Desert Adventures'
      }
    }
  };

  const packages = {
    'Adventure': {
      icon: <Mountain className="h-4 w-4" />,
      tours: ['Trekking Tours', 'Wildlife Safari', 'River Rafting', 'Rock Climbing']
    },
    'Cultural': {
      icon: <Camera className="h-4 w-4" />,
      tours: ['Heritage Tours', 'Temple Circuits', 'Art & Craft Tours', 'Festival Tours']
    },
    'Luxury': {
      icon: <Star className="h-4 w-4" />,
      tours: ['Palace Hotels', 'Luxury Trains', 'Private Jets', 'Yacht Cruises']
    },
    'Family': {
      icon: <Globe className="h-4 w-4" />,
      tours: ['Kid-Friendly Tours', 'Educational Tours', 'Theme Parks', 'Beach Resorts']
    }
  };

  const RegionCard = ({ region, data, isMobile = false }) => (
    <div 
      className={`group p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200 hover:border-green-300 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-300 cursor-pointer ${
        isMobile ? 'mb-2' : ''
      }`}
      onMouseEnter={() => !isMobile && setActiveRegion(region)}
    >
      <div className="flex items-start space-x-3 mb-2">
        <div className="p-2 rounded-lg bg-green-100 text-green-600 group-hover:bg-green-200 transition-colors flex-shrink-0">
          {data.icon}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors text-sm sm:text-base">
            {region}
          </h4>
          <p className="text-xs text-gray-500">{data.featured}</p>
        </div>
      </div>
      <div className="space-y-1 ml-11">
        {data.places.slice(0, 3).map((place, idx) => (
          <div key={idx} className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
            • {place}
          </div>
        ))}
        {data.places.length > 3 && (
          <div className="text-xs sm:text-sm text-green-600 font-medium">
            +{data.places.length - 3} more destinations
          </div>
        )}
      </div>
    </div>
  );

  const PackageCard = ({ category, data, isMobile = false }) => (
    <div className={`group p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200 hover:border-green-300 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-300 cursor-pointer ${
      isMobile ? 'mb-2' : ''
    }`}>
      <div className="flex items-start space-x-3 mb-2">
        <div className="p-2 rounded-lg bg-green-100 text-green-600 group-hover:bg-green-200 transition-colors flex-shrink-0">
          {data.icon}
        </div>
        <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors text-sm sm:text-base">
          {category} Tours
        </h4>
      </div>
      <div className="space-y-1 ml-11">
        {data.tours.map((tour, idx) => (
          <div key={idx} className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
            • {tour}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-1.5 sm:py-2 text-xs">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center">
                <Phone className="h-3 w-3 mr-1" />
                <span>+91-9354042780</span>
              </div>
              <div className="hidden sm:flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                <span>Delhi, India</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-yellow-500 text-yellow-900 px-2 py-0.5 rounded-full text-xs font-semibold animate-pulse">
                <span className="hidden sm:inline">Special Offers!</span>
                <span className="sm:hidden">Offers!</span>
              </span>
              <div className="flex items-center text-xs">
                <span className="mr-1">🇮🇳</span>
                <span>INR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white relative z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      } border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-2 sm:py-3 lg:py-4">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <div className="w-16 h-16 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl overflow-hidden shadow-md bg-white flex-shrink-0">
                <img 
                  src={logo}
                  alt="Tick Your Trip Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient background if image fails
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                        <div class="relative">
                          <svg class="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <div class="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
              
              <div className="min-w-0">
                <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                  TICK YOUR TRIP
                </h1>
                <p className="text-xs sm:text-sm text-green-600 italic font-medium leading-none">
                  <span className="hidden sm:inline">To reset, recharge, and live longer.</span>
                  <span className="sm:hidden">Travel & Tours</span>
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6">
              {/* Destinations Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-all duration-200 font-semibold py-2 px-3 rounded-lg hover:bg-green-50"
                  onClick={() => {
                    setIsDestinationsOpen(!isDestinationsOpen);
                    setIsPackagesOpen(false);
                  }}
                  onMouseEnter={() => {
                    setIsDestinationsOpen(true);
                    setIsPackagesOpen(false);
                  }}
                >
                  <Globe className="h-4 w-4" />
                  <span>Destinations</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDestinationsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDestinationsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden"
                    onMouseLeave={() => setTimeout(() => {
                      setIsDestinationsOpen(false);
                      setActiveRegion(null);
                    }, 200)}
                  >
                    <div className="w-[700px] lg:w-[800px]">
                      <div className="flex border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                        <button
                          className={`flex-1 px-6 py-3 text-sm font-semibold transition-all duration-200 relative ${
                            activeTab === 'domestic' 
                              ? 'text-green-600 bg-white' 
                              : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                          }`}
                          onClick={() => {
                            setActiveTab('domestic');
                            setActiveRegion(null);
                          }}
                        >
                          <div className="flex items-center justify-center space-x-2">
                            <Map className="h-4 w-4" />
                            <span>Domestic India</span>
                          </div>
                          {activeTab === 'domestic' && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-t-full"></div>
                          )}
                        </button>
                        <button
                          className={`flex-1 px-6 py-3 text-sm font-semibold transition-all duration-200 relative ${
                            activeTab === 'international' 
                              ? 'text-green-600 bg-white' 
                              : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                          }`}
                          onClick={() => {
                            setActiveTab('international');
                            setActiveRegion(null);
                          }}
                        >
                          <div className="flex items-center justify-center space-x-2">
                            <Plane className="h-4 w-4" />
                            <span>International</span>
                          </div>
                          {activeTab === 'international' && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-t-full"></div>
                          )}
                        </button>
                      </div>

                      <div className="p-4 lg:p-6">
                        <div className="grid grid-cols-2 gap-3 lg:gap-4">
                          {Object.entries(destinations[activeTab]).map(([region, data]) => (
                            <RegionCard key={region} region={region} data={data} />
                          ))}
                        </div>
                        
                        <div className="mt-4 lg:mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                          <div className="text-sm text-gray-600">
                            <span className="font-semibold text-green-600">50+</span> destinations available
                          </div>
                          <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center space-x-1 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors">
                            <span>Explore All Destinations</span>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Packages Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-all duration-200 font-semibold py-2 px-3 rounded-lg hover:bg-green-50"
                  onClick={() => {
                    setIsPackagesOpen(!isPackagesOpen);
                    setIsDestinationsOpen(false);
                  }}
                  onMouseEnter={() => {
                    setIsPackagesOpen(true);
                    setIsDestinationsOpen(false);
                  }}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Packages</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPackagesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isPackagesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden"
                    onMouseLeave={() => setTimeout(() => setIsPackagesOpen(false), 200)}
                  >
                    <div className="w-[500px] lg:w-[600px] p-4 lg:p-6">
                      <div className="grid grid-cols-2 gap-3 lg:gap-4">
                        {Object.entries(packages).map(([category, data]) => (
                          <PackageCard key={category} category={category} data={data} />
                        ))}
                      </div>
                      
                      <div className="mt-4 lg:mt-6 pt-4 border-t border-gray-100 text-center">
                        <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center space-x-1 hover:bg-green-50 px-6 py-3 rounded-lg transition-colors mx-auto">
                          <span>View All Package Categories</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-semibold py-2 px-3 rounded-lg hover:bg-green-50">
                About Us
              </a>
              <a href="#achievements" className="text-gray-700 hover:text-green-600 transition-colors font-semibold py-2 px-3 rounded-lg hover:bg-green-50">
                Achievements
              </a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
              
              {/* Desktop Contact Buttons */}
              <div className="hidden lg:flex items-center space-x-2">
                <a 
                  href="https://wa.me/919354042780" 
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium text-sm"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="tel:+919354042780"
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium text-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </a>
              </div>

              {/* Tablet Contact Buttons */}
              <div className="hidden md:flex lg:hidden items-center space-x-1">
                <a 
                  href="https://wa.me/919354042780" 
                  className="flex items-center space-x-1 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors shadow-md text-sm font-medium"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span className="hidden md:inline">WhatsApp</span>
                </a>
                <a 
                  href="tel:+919354042780"
                  className="flex items-center space-x-1 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors shadow-md text-sm font-medium"
                >
                  <Phone className="h-4 w-4" />
                  <span className="hidden md:inline">Call</span>
                </a>
              </div>
              
              {/* Mobile Contact Buttons */}
              <div className="md:hidden flex space-x-1">
                <a 
                  href="https://wa.me/919354042780" 
                  className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
                <a 
                  href="tel:+919354042780"
                  className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md"
                  aria-label="Call"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="relative bg-white h-full w-full max-w-sm ml-auto shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-green-50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-white shadow-md">
                    <img 
                      src={logo}
                      alt="Logo" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-gray-900">TICK YOUR TRIP</h2>
                    <p className="text-sm text-green-600">Menu</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                
                {/* Destinations Section */}
                <div>
                  <button
                    onClick={() => setMobileActiveSection(mobileActiveSection === 'destinations' ? null : 'destinations')}
                    className="flex items-center justify-between w-full p-3 text-left font-semibold text-gray-800 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-green-600" />
                      <span>Destinations</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileActiveSection === 'destinations' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileActiveSection === 'destinations' && (
                    <div className="mt-3 space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setActiveTab('domestic')}
                          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            activeTab === 'domestic'
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          <Map className="h-4 w-4 mx-auto mb-1" />
                          Domestic
                        </button>
                        <button
                          onClick={() => setActiveTab('international')}
                          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            activeTab === 'international'
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          <Plane className="h-4 w-4 mx-auto mb-1" />
                          International
                        </button>
                      </div>
                      
                      <div className="space-y-2">
                        {Object.entries(destinations[activeTab]).map(([region, data]) => (
                          <RegionCard key={region} region={region} data={data} isMobile={true} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Packages Section */}
                <div>
                  <button
                    onClick={() => setMobileActiveSection(mobileActiveSection === 'packages' ? null : 'packages')}
                    className="flex items-center justify-between w-full p-3 text-left font-semibold text-gray-800 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <span>Packages</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileActiveSection === 'packages' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileActiveSection === 'packages' && (
                    <div className="mt-3 space-y-2">
                      {Object.entries(packages).map(([category, data]) => (
                        <PackageCard key={category} category={category} data={data} isMobile={true} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Other Menu Items */}
                <div className="space-y-1">
                  <a 
                    href="#about" 
                    className="flex items-center space-x-3 p-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Camera className="h-5 w-5" />
                    <span>About Us</span>
                  </a>
                  <a 
                    href="#achievements" 
                    className="flex items-center space-x-3 p-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Star className="h-5 w-5" />
                    <span>Achievements</span>
                  </a>
                </div>

                {/* Mobile Contact Section */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3">Contact Us</h3>
                  <div className="space-y-2">
                    <a 
                      href="https://wa.me/919354042780"
                      className="flex items-center space-x-3 w-full p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      <div>
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-sm opacity-90">+91-9354042780</div>
                      </div>
                    </a>
                    <a 
                      href="tel:+919354042780"
                      className="flex items-center space-x-3 w-full p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Phone className="h-5 w-5" />
                      <div>
                        <div className="font-medium">Call Now</div>
                        <div className="text-sm opacity-90">+91-9354042780</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Stats Bar */}
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-center sm:justify-between py-2 sm:py-3">
            <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center space-x-1 text-sky-700">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                <span className="font-semibold">4.8/5</span>
                <span className="hidden sm:inline text-gray-600">from 2000+ travelers</span>
              </div>
              <div className="flex items-center space-x-1 text-sky-700">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-semibold">50+ Destinations</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1 text-sky-700">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-semibold">Custom Itineraries</span>
              </div>
              <div className="flex items-center space-x-1 text-sky-700">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullyResponsiveHeader;