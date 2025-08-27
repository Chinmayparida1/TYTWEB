// import React, { useState } from 'react';
// import { 
//   MapPin, 
//   Star, 
//   Calendar, 
//   Users, 
//   ChevronRight, 
//   Heart,
//   Share2,
//   Camera,
//   Plane
// } from 'lucide-react';

// const ProfessionalPackagesSection = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [likedPackages, setLikedPackages] = useState(new Set());

//   const packages = [
//     { 
//       name: 'Andaman Islands', 
//       image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
//       price: '₹45,000',
//       originalPrice: '₹52,000',
//       duration: '6D/5N',
//       rating: 4.8,
//       reviews: 234,
//       highlights: ['Pristine Beaches', 'Water Sports', 'Coral Reefs'],
//       type: 'Beach Paradise'
//     },
//     { 
//       name: 'Haridwar', 
//       image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
//       price: '₹18,000',
//       originalPrice: '₹22,000',
//       duration: '4D/3N',
//       rating: 4.6,
//       reviews: 187,
//       highlights: ['Sacred Ghats', 'Ganga Aarti', 'Ancient Temples'],
//       type: 'Spiritual Journey'
//     },
//     { 
//       name: 'Switzerland', 
//       image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg',
//       price: '₹1,85,000',
//       originalPrice: '₹2,10,000',
//       duration: '8D/7N',
//       rating: 4.9,
//       reviews: 456,
//       highlights: ['Alpine Views', 'Luxury Hotels', 'Train Journeys'],
//       type: 'Luxury Escape'
//     },
//     { 
//       name: 'Goa', 
//       image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
//       price: '₹25,000',
//       originalPrice: '₹28,000',
//       duration: '5D/4N',
//       rating: 4.5,
//       reviews: 312,
//       highlights: ['Beach Clubs', 'Portuguese Heritage', 'Nightlife'],
//       type: 'Coastal Getaway'
//     },
//     { 
//       name: 'Mussoorie', 
//       image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
//       price: '₹22,000',
//       originalPrice: '₹26,000',
//       duration: '4D/3N',
//       rating: 4.4,
//       reviews: 198,
//       highlights: ['Hill Station', 'Cable Car', 'Mall Road'],
//       type: 'Mountain Retreat'
//     },
//     { 
//       name: 'Austria', 
//       image: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg',
//       price: '₹1,65,000',
//       originalPrice: '₹1,90,000',
//       duration: '7D/6N',
//       rating: 4.7,
//       reviews: 287,
//       highlights: ['Mozart\'s City', 'Imperial Palaces', 'Classical Music'],
//       type: 'Cultural Heritage'
//     },
//     { 
//       name: 'Lakshadweep', 
//       image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
//       price: '₹55,000',
//       originalPrice: '₹62,000',
//       duration: '6D/5N',
//       rating: 4.8,
//       reviews: 156,
//       highlights: ['Crystal Waters', 'Coral Islands', 'Marine Life'],
//       type: 'Island Paradise'
//     },
//     { 
//       name: '4 Dham Yatra', 
//       image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
//       price: '₹48,000',
//       originalPrice: '₹55,000',
//       duration: '12D/11N',
//       rating: 4.6,
//       reviews: 143,
//       highlights: ['Holy Shrines', 'Himalayan Journey', 'Spiritual Bliss'],
//       type: 'Pilgrimage Tour'
//     },
//     { 
//       name: 'France', 
//       image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
//       price: '₹1,95,000',
//       originalPrice: '₹2,20,000',
//       duration: '9D/8N',
//       rating: 4.9,
//       reviews: 389,
//       highlights: ['Eiffel Tower', 'Louvre Museum', 'French Cuisine'],
//       type: 'Romantic Europe'
//     },
//     { 
//       name: 'Spain', 
//       image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
//       price: '₹1,75,000',
//       originalPrice: '₹2,00,000',
//       duration: '8D/7N',
//       rating: 4.7,
//       reviews: 267,
//       highlights: ['Barcelona Gothic', 'Madrid Museums', 'Flamenco Shows'],
//       type: 'Iberian Adventure'
//     }
//   ];

//   const toggleLike = (index) => {
//     const newLikedPackages = new Set(likedPackages);
//     if (newLikedPackages.has(index)) {
//       newLikedPackages.delete(index);
//     } else {
//       newLikedPackages.add(index);
//     }
//     setLikedPackages(newLikedPackages);
//   };

//   const calculateDiscount = (original, current) => {
//     return Math.round(((original - current) / original) * 100);
//   };

//   return (
//     <section id="packages" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full mb-6">
//             <Camera className="h-5 w-5 text-blue-600 mr-2" />
//             <span className="text-blue-700 font-semibold text-sm">CURATED EXPERIENCES</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             Holidays with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Fresh Vibe</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Discover our carefully curated travel experiences designed to create unforgettable memories. 
//             From serene beaches to majestic mountains, every journey tells a story.
//           </p>
//         </div>

//         {/* Packages Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
//           {packages.map((pkg, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Image Section */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={pkg.image}
//                   alt={pkg.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
                
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
//                 {/* Top Actions */}
//                 <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
//                   <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
//                     <span className="text-sm font-semibold text-gray-800">{pkg.type}</span>
//                   </div>
//                   <div className="flex space-x-2">
//                     <button
//                       onClick={() => toggleLike(index)}
//                       className={`p-2 rounded-full transition-all duration-300 ${
//                         likedPackages.has(index)
//                           ? 'bg-red-500 text-white'
//                           : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:text-red-500'
//                       }`}
//                     >
//                       <Heart className={`h-4 w-4 ${likedPackages.has(index) ? 'fill-current' : ''}`} />
//                     </button>
//                     <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-blue-600 transition-colors duration-300">
//                       <Share2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Discount Badge */}
//                 {pkg.originalPrice && (
//                   <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
//                     <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
//                       {calculateDiscount(parseInt(pkg.originalPrice.replace(/[₹,]/g, '')), parseInt(pkg.price.replace(/[₹,]/g, '')))}% OFF
//                     </div>
//                   </div>
//                 )}

//                 {/* Bottom Info */}
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center space-x-1">
//                         <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                         <span className="font-semibold text-gray-800 text-sm">{pkg.rating}</span>
//                         <span className="text-gray-500 text-xs">({pkg.reviews})</span>
//                       </div>
//                       <div className="flex items-center space-x-1 text-gray-600">
//                         <Calendar className="h-4 w-4" />
//                         <span className="text-sm font-medium">{pkg.duration}</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-baseline space-x-2">
//                         <span className="text-lg font-bold text-gray-900">{pkg.price}</span>
//                         {pkg.originalPrice && (
//                           <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
//                         )}
//                       </div>
//                       <span className="text-xs text-gray-500">per person</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-6">
//                 <div className="flex items-start justify-between mb-3">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
//                       {pkg.name}
//                     </h3>
//                     <div className="flex items-center text-gray-500 text-sm">
//                       <MapPin className="h-4 w-4 mr-1" />
//                       <span>India</span>
//                       {(pkg.name === 'Switzerland' || pkg.name === 'Austria' || pkg.name === 'France' || pkg.name === 'Spain') && (
//                         <>
//                           <Plane className="h-3 w-3 mx-2" />
//                           <span>International</span>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Highlights */}
//                 <div className="mb-4">
//                   <div className="flex flex-wrap gap-1">
//                     {pkg.highlights.slice(0, 2).map((highlight, idx) => (
//                       <span
//                         key={idx}
//                         className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
//                       >
//                         {highlight}
//                       </span>
//                     ))}
//                     {pkg.highlights.length > 2 && (
//                       <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
//                         +{pkg.highlights.length - 2} more
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* Action Button */}
//                 <button
//                   className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
//                     hoveredCard === index
//                       ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   <span>{hoveredCard === index ? 'Book Now' : 'View Details'}</span>
//                   <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${
//                     hoveredCard === index ? 'translate-x-1' : ''
//                   }`} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <div className="inline-flex items-center space-x-4">
//             <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//               Explore All Destinations
//             </button>
//             <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
//               Customize Your Trip
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProfessionalPackagesSection;

import React, { useState } from 'react';
import { 
  MapPin, 
  Star, 
  Calendar, 
  Users, 
  ChevronRight, 
  Heart,
  Share2,
  Camera,
  Plane,
  X,
  Clock,
  Check,
  Utensils,
  Bed,
  Car
} from 'lucide-react';

const ProfessionalPackagesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedPackages, setLikedPackages] = useState(new Set());
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    { 
      name: 'Andaman Islands', 
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
      price: '₹45,000',
      originalPrice: '₹52,000',
      duration: '6D/5N',
      rating: 4.8,
      reviews: 234,
      highlights: ['Pristine Beaches', 'Water Sports', 'Coral Reefs'],
      type: 'Beach Paradise',
      description: 'Experience the pristine beauty of Andaman Islands with crystal clear waters, white sandy beaches, and vibrant marine life.',
      includes: ['Accommodation', 'Meals', 'Airport Transfers', 'Sightseeing', 'Water Sports'],
      excludes: ['Personal Expenses', 'Travel Insurance', 'Extra Activities'],
      itinerary: [
        { day: 1, title: 'Arrival in Port Blair', activities: ['Airport pickup', 'Hotel check-in', 'Cellular Jail visit', 'Light & Sound show'] },
        { day: 2, title: 'Havelock Island', activities: ['Ferry to Havelock', 'Radhanagar Beach', 'Beach relaxation', 'Sunset viewing'] },
        { day: 3, title: 'Water Sports Day', activities: ['Scuba diving', 'Snorkeling', 'Jet skiing', 'Banana boat ride'] },
        { day: 4, title: 'Neil Island', activities: ['Ferry to Neil Island', 'Bharatpur Beach', 'Laxmanpur Beach', 'Natural Bridge'] },
        { day: 5, title: 'Port Blair Sightseeing', activities: ['Ross Island', 'North Bay Island', 'Coral Island', 'Shopping'] },
        { day: 6, title: 'Departure', activities: ['Hotel checkout', 'Last minute shopping', 'Airport transfer', 'Flight departure'] }
      ]
    },
    { 
      name: 'Haridwar', 
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      price: '₹18,000',
      originalPrice: '₹22,000',
      duration: '4D/3N',
      rating: 4.6,
      reviews: 187,
      highlights: ['Sacred Ghats', 'Ganga Aarti', 'Ancient Temples'],
      type: 'Spiritual Journey',
      description: 'Immerse yourself in the spiritual atmosphere of Haridwar, one of the holiest cities in India.',
      includes: ['Accommodation', 'Meals', 'Temple Visits', 'Ganga Aarti', 'Local Transportation'],
      excludes: ['Personal Expenses', 'Shopping', 'Extra Donations'],
      itinerary: [
        { day: 1, title: 'Arrival & Har Ki Pauri', activities: ['Hotel check-in', 'Har Ki Pauri visit', 'Evening Ganga Aarti', 'Temple prayers'] },
        { day: 2, title: 'Temple Tour', activities: ['Chandi Devi Temple', 'Mansa Devi Temple', 'Maya Devi Temple', 'Daksha Mahadev Temple'] },
        { day: 3, title: 'Rishikesh Day Trip', activities: ['Drive to Rishikesh', 'Laxman Jhula', 'Ram Jhula', 'Parmarth Niketan'] },
        { day: 4, title: 'Departure', activities: ['Morning prayers', 'Last temple visit', 'Shopping for souvenirs', 'Departure'] }
      ]
    },
    { 
      name: 'Switzerland', 
      image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg',
      price: '₹1,85,000',
      originalPrice: '₹2,10,000',
      duration: '8D/7N',
      rating: 4.9,
      reviews: 456,
      highlights: ['Alpine Views', 'Luxury Hotels', 'Train Journeys'],
      type: 'Luxury Escape',
      description: 'Discover the breathtaking beauty of Switzerland with its snow-capped mountains, pristine lakes, and charming cities.',
      includes: ['4-star Hotels', 'Daily Breakfast', 'Train Passes', 'Airport Transfers', 'City Tours'],
      excludes: ['Lunch & Dinner', 'Personal Expenses', 'Travel Insurance', 'Optional Activities'],
      itinerary: [
        { day: 1, title: 'Arrival in Zurich', activities: ['Airport pickup', 'Hotel check-in', 'Zurich city tour', 'Rhine Falls visit'] },
        { day: 2, title: 'Lucerne', activities: ['Train to Lucerne', 'Chapel Bridge', 'Mount Pilatus', 'Lake Lucerne cruise'] },
        { day: 3, title: 'Interlaken', activities: ['Travel to Interlaken', 'Jungfraujoch excursion', 'Top of Europe', 'Alpine views'] },
        { day: 4, title: 'Grindelwald', activities: ['Grindelwald village', 'First Cliff Walk', 'Cable car rides', 'Mountain hiking'] },
        { day: 5, title: 'Zermatt', activities: ['Train to Zermatt', 'Matterhorn viewing', 'Gornergrat railway', 'Village exploration'] },
        { day: 6, title: 'Geneva', activities: ['Travel to Geneva', 'Jet d\'Eau fountain', 'UN Office visit', 'Lake Geneva'] },
        { day: 7, title: 'Geneva Sightseeing', activities: ['Old Town tour', 'St. Pierre Cathedral', 'Reformation Wall', 'Shopping'] },
        { day: 8, title: 'Departure', activities: ['Hotel checkout', 'Last minute shopping', 'Airport transfer', 'Flight departure'] }
      ]
    },
    { 
      name: 'Goa', 
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      price: '₹25,000',
      originalPrice: '₹28,000',
      duration: '5D/4N',
      rating: 4.5,
      reviews: 312,
      highlights: ['Beach Clubs', 'Portuguese Heritage', 'Nightlife'],
      type: 'Coastal Getaway',
      description: 'Relax and unwind in the tropical paradise of Goa with its pristine beaches, vibrant culture, and delicious cuisine.',
      includes: ['Beach Resort', 'Daily Breakfast', 'Airport Transfers', 'Beach Activities', 'Sightseeing'],
      excludes: ['Lunch & Dinner', 'Alcohol', 'Water Sports', 'Personal Expenses'],
      itinerary: [
        { day: 1, title: 'Arrival & North Goa', activities: ['Airport pickup', 'Hotel check-in', 'Calangute Beach', 'Baga Beach'] },
        { day: 2, title: 'Old Goa Heritage', activities: ['Basilica of Bom Jesus', 'Se Cathedral', 'Archaeological Museum', 'Fontainhas walk'] },
        { day: 3, title: 'South Goa Beaches', activities: ['Colva Beach', 'Benaulim Beach', 'Palolem Beach', 'Beach shacks'] },
        { day: 4, title: 'Adventure & Nightlife', activities: ['Water sports', 'Spice plantation', 'Dudhsagar Falls', 'Night clubs'] },
        { day: 5, title: 'Departure', activities: ['Beach relaxation', 'Last minute shopping', 'Flea market', 'Airport transfer'] }
      ]
    },
    { 
      name: 'Mussoorie', 
      image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
      price: '₹22,000',
      originalPrice: '₹26,000',
      duration: '4D/3N',
      rating: 4.4,
      reviews: 198,
      highlights: ['Hill Station', 'Cable Car', 'Mall Road'],
      type: 'Mountain Retreat',
      description: 'Escape to the Queen of Hills and enjoy the cool mountain air, scenic views, and colonial charm of Mussoorie.',
      includes: ['Hill Resort', 'Daily Meals', 'Local Transport', 'Cable Car', 'Sightseeing'],
      excludes: ['Personal Expenses', 'Adventure Activities', 'Shopping'],
      itinerary: [
        { day: 1, title: 'Arrival & Mall Road', activities: ['Hotel check-in', 'Mall Road walk', 'Camel\'s Back Road', 'Sunset point'] },
        { day: 2, title: 'Kempty Falls & Gun Hill', activities: ['Kempty Falls', 'Gun Hill cable car', 'Lal Tibba', 'Christ Church'] },
        { day: 3, title: 'Dhanaulti Excursion', activities: ['Day trip to Dhanaulti', 'Eco Park', 'Adventure activities', 'Apple orchards'] },
        { day: 4, title: 'Departure', activities: ['Morning nature walk', 'Souvenir shopping', 'Check out', 'Departure'] }
      ]
    },
    { 
      name: 'Austria', 
      image: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg',
      price: '₹1,65,000',
      originalPrice: '₹1,90,000',
      duration: '7D/6N',
      rating: 4.7,
      reviews: 287,
      highlights: ['Mozart\'s City', 'Imperial Palaces', 'Classical Music'],
      type: 'Cultural Heritage',
      description: 'Experience the musical heritage and imperial grandeur of Austria with its stunning architecture and rich cultural history.',
      includes: ['4-star Hotels', 'Daily Breakfast', 'Train Passes', 'Museum Entries', 'City Tours'],
      excludes: ['Lunch & Dinner', 'Personal Expenses', 'Concert Tickets', 'Shopping'],
      itinerary: [
        { day: 1, title: 'Vienna Arrival', activities: ['Airport pickup', 'Hotel check-in', 'Schönbrunn Palace', 'Vienna State Opera'] },
        { day: 2, title: 'Vienna City Tour', activities: ['St. Stephen\'s Cathedral', 'Hofburg Palace', 'Belvedere Palace', 'Central Cemetery'] },
        { day: 3, title: 'Salzburg', activities: ['Train to Salzburg', 'Mozart\'s Birthplace', 'Old Town tour', 'Salzburg Cathedral'] },
        { day: 4, title: 'Hallstatt Day Trip', activities: ['Drive to Hallstatt', 'Lake cruise', 'Salt mine tour', 'Village exploration'] },
        { day: 5, title: 'Innsbruck', activities: ['Train to Innsbruck', 'Golden Roof', 'Nordkette Cable Car', 'Olympic Museum'] },
        { day: 6, title: 'Return to Vienna', activities: ['Travel back to Vienna', 'Naschmarkt', 'Last-minute sightseeing', 'Classical concert'] },
        { day: 7, title: 'Departure', activities: ['Hotel checkout', 'Souvenir shopping', 'Airport transfer', 'Flight departure'] }
      ]
    }
  ];

  const toggleLike = (index) => {
    const newLikedPackages = new Set(likedPackages);
    if (newLikedPackages.has(index)) {
      newLikedPackages.delete(index);
    } else {
      newLikedPackages.add(index);
    }
    setLikedPackages(newLikedPackages);
  };

  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100);
  };

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'unset';
  };

  const handleBookNow = (packageName) => {
    alert(`Booking initiated for ${packageName}. Redirecting to booking page...`);
    closeModal();
  };

  const handleViewDetails = (pkg) => {
    openModal(pkg);
  };

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full mb-6">
            <Camera className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold text-sm">CURATED EXPERIENCES</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Holidays with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Fresh Vibe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated travel experiences designed to create unforgettable memories. 
            From serene beaches to majestic mountains, every journey tells a story.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Top Actions */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">{pkg.type}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => toggleLike(index)}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        likedPackages.has(index)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${likedPackages.has(index) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Discount Badge */}
                {pkg.originalPrice && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {calculateDiscount(parseInt(pkg.originalPrice.replace(/[₹,]/g, '')), parseInt(pkg.price.replace(/[₹,]/g, '')))}% OFF
                    </div>
                  </div>
                )}

                {/* Bottom Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-800 text-sm">{pkg.rating}</span>
                        <span className="text-gray-500 text-xs">({pkg.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-lg font-bold text-gray-900">{pkg.price}</span>
                        {pkg.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">per person</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>India</span>
                      {(pkg.name === 'Switzerland' || pkg.name === 'Austria' || pkg.name === 'France' || pkg.name === 'Spain') && (
                        <>
                          <Plane className="h-3 w-3 mx-2" />
                          <span>International</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{pkg.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleViewDetails(pkg)}
                  className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    hoveredCard === index
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{hoveredCard === index ? 'Book Now' : 'View Details'}</span>
                  <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${
                    hoveredCard === index ? 'translate-x-1' : ''
                  }`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore All Destinations
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Customize Your Trip
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity bg-black bg-opacity-75 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal panel */}
            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-3xl sm:align-middle relative z-50">
              {/* Modal Header */}
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-gray-900 transition-colors z-10"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Package Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {selectedPackage.name}
                        </h2>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="mr-4">
                            {(selectedPackage.name === 'Switzerland' || selectedPackage.name === 'Austria' || 
                              selectedPackage.name === 'France' || selectedPackage.name === 'Spain') 
                              ? 'International' : 'India'}
                          </span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{selectedPackage.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 mb-3">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-gray-800">{selectedPackage.rating}</span>
                          <span className="text-gray-500 text-sm">({selectedPackage.reviews} reviews)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-baseline space-x-2 mb-1">
                          <span className="text-2xl sm:text-3xl font-bold text-gray-900">{selectedPackage.price}</span>
                          {selectedPackage.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">{selectedPackage.originalPrice}</span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">per person</span>
                        {selectedPackage.originalPrice && (
                          <div className="mt-2">
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                              {calculateDiscount(parseInt(selectedPackage.originalPrice.replace(/[₹,]/g, '')), parseInt(selectedPackage.price.replace(/[₹,]/g, '')))}% OFF
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="px-6 py-6 max-h-96 overflow-y-auto">
                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {selectedPackage.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Package Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPackage.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Includes & Excludes */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-2" />
                      Includes
                    </h3>
                    <ul className="space-y-2">
                      {selectedPackage.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <X className="h-5 w-5 text-red-600 mr-2" />
                      Excludes
                    </h3>
                    <ul className="space-y-2">
                      {selectedPackage.excludes.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Itinerary */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Day-wise Itinerary</h3>
                  <div className="space-y-4">
                    {selectedPackage.itinerary.map((day, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {day.day}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900 mb-2">{day.title}</h4>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {day.activities.map((activity, actIdx) => (
                                <div key={actIdx} className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                                  {activity}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>Accommodation</span>
                    </div>
                    <div className="flex items-center">
                      <Utensils className="h-4 w-4 mr-1" />
                      <span>Meals</span>
                    </div>
                    <div className="flex items-center">
                      <Car className="h-4 w-4 mr-1" />
                      <span>Transport</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={closeModal}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-gray-400 transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => handleBookNow(selectedPackage.name)}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Book Now</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfessionalPackagesSection;