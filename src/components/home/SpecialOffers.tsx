
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag } from 'lucide-react';

// Sample data for special offers
const offers = [
  {
    id: 1,
    title: 'Weekend Getaway Special',
    discount: '20% OFF',
    description: 'Book a car for the weekend and get 20% off on your rental. Perfect for those spontaneous weekend trips.',
    validUntil: 'May 31, 2025',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80',
    color: 'bg-gradient-to-r from-blue-500 to-purple-600'
  },
  {
    id: 2,
    title: 'Weekly Rental Deal',
    discount: '15% OFF',
    description: 'Save 15% when you book a car for a week or longer. The longer you rent, the more you save.',
    validUntil: 'June 15, 2025',
    image: 'https://images.unsplash.com/photo-1502239608882-93b729c6af43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    color: 'bg-gradient-to-r from-orange-500 to-pink-500'
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="car-header mb-3">Special Offers</h2>
          <p className="car-subheader max-w-2xl mx-auto">
            Take advantage of our limited-time deals and save on your next car rental
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-2/5 h-64 md:h-auto relative">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full ${offer.color} mb-3`}>
                    <Tag className="h-3 w-3 inline mr-1" />
                    {offer.discount}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-car-darkblue">{offer.title}</h3>
                  <p className="text-car-gray mb-4">{offer.description}</p>
                  <div className="flex items-center mb-4 text-sm text-car-gray">
                    <Calendar className="h-4 w-4 mr-2 text-car-blue" />
                    <span>Valid until: {offer.validUntil}</span>
                  </div>
                  <Button className="bg-car-blue hover:bg-car-blue/90 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-car-darkblue mb-2">Need a car for your next trip?</h3>
              <p className="text-car-gray">Book now and save up to 25% on your first rental!</p>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-car-blue mr-3 hidden md:block" />
              <Button className="bg-car-orange hover:bg-car-orange/90 text-white px-6">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
