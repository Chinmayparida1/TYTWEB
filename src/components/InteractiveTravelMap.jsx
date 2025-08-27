import React, { useState } from 'react';
import { 
  MapPin, 
  Star, 
  Camera, 
  Plane, 
  Navigation,
  Clock,
  Users,
  Heart,
  ChevronRight,
  X,
  Globe,
  Mountain,
  Waves,
  Building,
  TreePine
} from 'lucide-react';

const IndiaInteractiveTravelMap = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [hoveredDestination, setHoveredDestination] = useState(null);

  const destinations = [
    {
      id: 1,
      name: 'Kashmir',
      state: 'Jammu & Kashmir',
      position: { x: 37, y: 15 },
      price: '₹35,000',
      duration: '6D/5N',
      rating: 4.8,
      reviews: 2341,
      image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg',
      category: 'Mountain',
      highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam'],
      description: 'Paradise on Earth with stunning valleys, pristine lakes, and snow-capped mountains.',
      bestTime: 'Apr - Oct',
      weather: '10°C - 25°C'
    },
    {
      id: 2,
      name: 'Rajasthan',
      state: 'Rajasthan',
      position: { x: 32, y: 35 },
      price: '₹28,000',
      duration: '7D/6N',
      rating: 4.7,
      reviews: 3456,
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      category: 'Heritage',
      highlights: ['Jaipur', 'Udaipur', 'Jaisalmer'],
      description: 'Land of Kings with magnificent palaces, forts, and desert landscapes.',
      bestTime: 'Oct - Mar',
      weather: '15°C - 30°C'
    },
    {
      id: 3,
      name: 'Kerala',
      state: 'Kerala',
      position: { x: 33, y: 75 },
      price: '₹32,000',
      duration: '6D/5N',
      rating: 4.9,
      reviews: 2876,
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
      category: 'Nature',
      highlights: ['Backwaters', 'Munnar', 'Kochi'],
      description: 'God\'s Own Country with serene backwaters, lush hills, and pristine beaches.',
      bestTime: 'Oct - Mar',
      weather: '22°C - 32°C'
    },
    {
      id: 4,
      name: 'Goa',
      state: 'Goa',
      position: { x: 30, y: 60 },
      price: '₹25,000',
      duration: '5D/4N',
      rating: 4.5,
      reviews: 4123,
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
      category: 'Beach',
      highlights: ['Baga Beach', 'Old Goa', 'Dudhsagar Falls'],
      description: 'Tropical paradise with golden beaches, Portuguese heritage, and vibrant nightlife.',
      bestTime: 'Nov - Feb',
      weather: '20°C - 32°C'
    },
    {
      id: 5,
      name: 'Himachal Pradesh',
      state: 'Himachal Pradesh',
      position: { x: 35, y: 23 },
      price: '₹30,000',
      duration: '7D/6N',
      rating: 4.6,
      reviews: 1987,
      image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
      category: 'Mountain',
      highlights: ['Shimla', 'Manali', 'Dharamshala'],
      description: 'Hill station paradise with apple orchards, snow peaks, and colonial charm.',
      bestTime: 'Mar - Jun',
      weather: '5°C - 20°C'
    },
    {
      id: 6,
      name: 'Tamil Nadu',
      state: 'Tamil Nadu',
      position: { x: 37, y: 72 },
      price: '₹26,000',
      duration: '6D/5N',
      rating: 4.4,
      reviews: 2654,
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      category: 'Heritage',
      highlights: ['Chennai', 'Madurai', 'Kanyakumari'],
      description: 'Temple state with ancient Dravidian architecture and rich cultural heritage.',
      bestTime: 'Nov - Mar',
      weather: '20°C - 35°C'
    },
    {
      id: 7,
      name: 'Uttarakhand',
      state: 'Uttarakhand',
      position: { x: 38, y: 26 },
      price: '₹24,000',
      duration: '5D/4N',
      rating: 4.7,
      reviews: 1543,
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
      category: 'Spiritual',
      highlights: ['Rishikesh', 'Haridwar', 'Nainital'],
      description: 'Land of Gods with sacred temples, yoga ashrams, and Himalayan beauty.',
      bestTime: 'Apr - Jun',
      weather: '15°C - 30°C'
    },
    {
      id: 8,
      name: 'Andaman Islands',
      state: 'Andaman & Nicobar',
      position: { x: 70, y: 60 },
      price: '₹45,000',
      duration: '6D/5N',
      rating: 4.8,
      reviews: 1234,
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
      category: 'Beach',
      highlights: ['Havelock', 'Port Blair', 'Neil Island'],
      description: 'Tropical islands with pristine beaches, coral reefs, and crystal-clear waters.',
      bestTime: 'Oct - May',
      weather: '23°C - 31°C'
    },
    {
      id: 9,
      name: 'Maharashtra',
      state: 'Maharashtra',
      position: { x: 34, y: 50 },
      price: '₹22,000',
      duration: '5D/4N',
      rating: 4.3,
      reviews: 2987,
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
      category: 'Urban',
      highlights: ['Mumbai', 'Pune', 'Lonavala'],
      description: 'Commercial capital with bustling cities, hill stations, and Bollywood glamour.',
      bestTime: 'Oct - Mar',
      weather: '15°C - 35°C'
    },
    {
      id: 10,
      name: 'West Bengal',
      state: 'West Bengal',
      position: { x: 62, y: 45 },
      price: '₹20,000',
      duration: '4D/3N',
      rating: 4.5,
      reviews: 1876,
      image: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg',
      category: 'Cultural',
      highlights: ['Kolkata', 'Darjeeling', 'Sundarbans'],
      description: 'Cultural hub with colonial architecture, tea gardens, and literary heritage.',
      bestTime: 'Oct - Mar',
      weather: '10°C - 30°C'
    }
  ];

  const categories = [
    { name: 'All', icon: Globe, color: 'blue' },
    { name: 'Mountain', icon: Mountain, color: 'green' },
    { name: 'Beach', icon: Waves, color: 'cyan' },
    { name: 'Heritage', icon: Building, color: 'orange' },
    { name: 'Nature', icon: TreePine, color: 'emerald' },
    { name: 'Spiritual', icon: Heart, color: 'purple' },
    { name: 'Urban', icon: Navigation, color: 'gray' },
    { name: 'Cultural', icon: Camera, color: 'pink' }
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDestinations = activeCategory === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeCategory);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-full mb-4 sm:mb-6 border border-orange-200">
            <Globe className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-orange-700 font-semibold text-sm">INCREDIBLE INDIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Incredible India</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover the diverse beauty of India - from the majestic Himalayas to tropical beaches, 
            ancient temples to modern cities. Click on any destination to start your journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 shadow-sm border border-orange-200'
              }`}
            >
              <category.icon className="h-4 w-4 mr-2" />
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </div>

        {/* India Map */}
        <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-200">
          
          {/* India Map SVG */}
          <div className="relative h-96 sm:h-[500px] lg:h-[700px]">
            <svg
              viewBox="0 0 800 900"
              className="w-full h-full"
              style={{ background: 'linear-gradient(135deg, #FEF3C7 0%, #FEE2E2 50%, #FCE7F3 100%)' }}
            >
              {/* India Map Outline */}
              <g fill="#10B981" stroke="#059669" strokeWidth="2" opacity="0.8">
                {/* Main India Outline */}
                <path d="M300,100 Q320,80 350,85 L380,90 Q420,85 450,100 L480,120 Q500,140 510,170 L520,200 Q525,230 520,260 L515,290 Q510,320 505,350 L500,380 Q495,410 490,440 L485,470 Q480,500 475,530 L470,560 Q465,590 460,620 L455,650 Q450,680 440,700 L430,720 Q420,740 400,750 L380,755 Q360,750 340,745 L320,735 Q300,720 285,700 L275,680 Q270,650 275,620 L280,590 Q285,560 290,530 L295,500 Q300,470 295,440 L290,410 Q285,380 280,350 L275,320 Q270,290 275,260 L280,230 Q285,200 290,170 L295,140 Q300,120 300,100 Z" />
                
                {/* Kashmir */}
                <path d="M295,100 Q310,85 325,90 L340,95 Q350,100 355,110 L360,120 Q355,130 345,135 L330,140 Q315,135 305,125 L300,115 Q295,105 295,100 Z" />
                
                {/* Northeast States */}
                <path d="M520,200 Q540,190 560,200 L580,210 Q590,220 595,235 L600,250 Q595,265 585,270 L570,275 Q555,270 545,255 L535,240 Q525,225 520,200 Z" />
                
                {/* Andaman & Nicobar Islands */}
                <path d="M620,400 Q625,395 630,405 L635,420 Q630,435 625,440 L620,435 Q615,420 620,400 Z" />
                <path d="M615,460 Q620,455 625,465 L630,480 Q625,495 620,500 L615,495 Q610,480 615,460 Z" />
                
                {/* Lakshadweep */}
                <path d="M200,500 Q205,495 210,505 L215,515 Q210,525 205,520 L200,515 Q195,505 200,500 Z" />
                
                {/* State Boundaries (Internal) */}
                <g fill="none" stroke="#065F46" strokeWidth="1" opacity="0.3">
                  {/* Rajasthan */}
                  <path d="M240,200 L320,180 L350,220 L340,280 L290,300 L250,260 Z" />
                  {/* Maharashtra */}
                  <path d="M250,350 L350,330 L380,380 L350,430 L290,420 L260,380 Z" />
                  {/* Uttar Pradesh */}
                  <path d="M320,180 L420,170 L430,220 L400,260 L350,250 L320,220 Z" />
                  {/* Madhya Pradesh */}
                  <path d="M290,300 L400,280 L420,330 L380,370 L330,360 L300,330 Z" />
                  {/* Karnataka */}
                  <path d="M290,420 L350,430 L370,480 L340,530 L300,520 L280,470 Z" />
                  {/* Tamil Nadu */}
                  <path d="M340,530 L390,540 L400,600 L370,650 L330,640 L320,580 Z" />
                  {/* Kerala */}
                  <path d="M280,470 L320,480 L330,540 L320,600 L290,590 L270,530 Z" />
                  {/* Andhra Pradesh */}
                  <path d="M350,430 L420,420 L440,480 L420,530 L370,520 L350,470 Z" />
                  {/* Odisha */}
                  <path d="M420,330 L470,320 L480,370 L460,410 L430,400 L420,360 Z" />
                  {/* West Bengal */}
                  <path d="M470,280 L520,270 L530,320 L510,360 L480,350 L470,310 Z" />
                  {/* Bihar */}
                  <path d="M430,220 L480,210 L490,250 L470,280 L440,270 L430,240 Z" />
                  {/* Jharkhand */}
                  <path d="M470,250 L510,240 L520,280 L500,310 L480,300 L470,270 Z" />
                  {/* Gujarat */}
                  <path d="M200,280 L250,260 L270,320 L240,380 L190,370 L180,320 Z" />
                </g>
              </g>
            </svg>

            {/* Destination Markers */}
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{
                  left: `${destination.position.x}%`,
                  top: `${destination.position.y}%`
                }}
                onClick={() => handleDestinationClick(destination)}
                onMouseEnter={() => setHoveredDestination(destination.id)}
                onMouseLeave={() => setHoveredDestination(null)}
              >
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-75"></div>
                
                {/* Main Marker */}
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-125 border-2 border-white">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>

                {/* Hover Card */}
                {hoveredDestination === destination.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 sm:w-64 bg-white rounded-xl shadow-xl border border-orange-200 p-4 z-10">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-24 sm:h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{destination.name}</h3>
                    <p className="text-xs text-gray-500 mb-2">{destination.state}</p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{destination.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({destination.reviews})</span>
                      </div>
                      <span className="text-sm text-gray-500">{destination.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-orange-600">{destination.price}</span>
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                        {destination.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200">
              <Plane className="h-5 w-5 text-orange-600" />
              <span className="text-orange-700 font-medium text-sm">Explore India</span>
            </div>

            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200">
              <span className="text-orange-700 text-sm font-medium">
                {filteredDestinations.length} Destinations
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 px-4">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg text-center border border-orange-200">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">28+</div>
            <div className="text-sm sm:text-base text-gray-600">States & UTs</div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg text-center border border-red-200">
            <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">100+</div>
            <div className="text-sm sm:text-base text-gray-600">Destinations</div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg text-center border border-pink-200">
            <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-2">50K+</div>
            <div className="text-sm sm:text-base text-gray-600">Happy Travelers</div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg text-center border border-orange-200">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">4.7★</div>
            <div className="text-sm sm:text-base text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-screen px-2 sm:px-4 pt-4 pb-4 sm:pb-20">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal panel */}
            <div className="relative w-full max-w-lg sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform transition-all sm:my-8">
              
              {/* Modal Header */}
              <div className="relative h-48 sm:h-64">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                {/* Destination Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {selectedDestination.name}
                  </h2>
                  <p className="text-white/80 text-sm mb-2">{selectedDestination.state}</p>
                  <div className="flex items-center space-x-4 text-white/90 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{selectedDestination.rating}</span>
                      <span className="ml-1">({selectedDestination.reviews})</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{selectedDestination.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6">
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {selectedDestination.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Top Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedDestination.highlights.map((highlight, idx) => (
                        <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-700 text-sm rounded-full border border-orange-200">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Travel Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Best Time</div>
                      <div className="font-medium text-gray-900">{selectedDestination.bestTime}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Weather</div>
                      <div className="font-medium text-gray-900">{selectedDestination.weather}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-xs text-gray-500">Starting from</div>
                    <div className="text-2xl font-bold text-orange-600">{selectedDestination.price}</div>
                    <div className="text-xs text-gray-500">per person</div>
                  </div>
                  <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                    <span>Book Now</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IndiaInteractiveTravelMap;