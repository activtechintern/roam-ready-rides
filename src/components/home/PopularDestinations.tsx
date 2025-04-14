
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from 'lucide-react';

// Sample data for popular destinations
const destinations = [
  {
    id: 1,
    name: 'New York City',
    image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    carCount: 120
  },
  {
    id: 2,
    name: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    carCount: 95
  },
  {
    id: 3,
    name: 'Miami',
    image: 'https://images.unsplash.com/photo-1617581629397-0c449d682d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1462&q=80',
    carCount: 78
  },
  {
    id: 4,
    name: 'San Francisco',
    image: 'https://images.unsplash.com/photo-1478999670386-0c39e2847785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80',
    carCount: 83
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="car-header mb-3">Popular Destinations</h2>
          <p className="car-subheader max-w-2xl mx-auto">
            Explore our top locations where our services are highly rated
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-car-darkblue/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <div className="flex items-center mb-1">
                    <MapPin className="h-4 w-4 text-car-blue mr-1" />
                    <h3 className="text-lg font-bold">{destination.name}</h3>
                  </div>
                  <p className="text-sm text-gray-200">{destination.carCount} cars available</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
