import React from 'react';
import { Users, MapPin, Award, Star } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Users,
      number: '1000+',
      label: 'Happy Customers',
      color: 'bg-sky-600 group-hover:bg-sky-500'
    },
    {
      icon: MapPin,
      number: '100+',
      label: 'Destinations Covered',
      color: 'bg-orange-500 group-hover:bg-orange-400'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Experienced Professionals',
      color: 'bg-green-500 group-hover:bg-green-400'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Customer Rating',
      color: 'bg-purple-500 group-hover:bg-purple-400'
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognized for excellence in travel services and customer satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`${achievement.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{achievement.number}</div>
                <div className="text-gray-300">{achievement.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;