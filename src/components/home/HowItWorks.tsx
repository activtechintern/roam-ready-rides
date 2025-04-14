
import React from 'react';
import { Search, Calendar, Car } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Find Your Car',
    description: 'Use our search and filter options to find the perfect car for your needs',
    icon: Search,
    color: 'bg-blue-100 text-car-blue'
  },
  {
    id: 2,
    title: 'Book Your Dates',
    description: 'Select your pick-up and return dates with our easy-to-use calendar',
    icon: Calendar,
    color: 'bg-orange-100 text-car-orange'
  },
  {
    id: 3,
    title: 'Enjoy Your Ride',
    description: 'Pick up your car and enjoy the freedom of the open road',
    icon: Car,
    color: 'bg-green-100 text-green-600'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="car-header mb-3">How It Works</h2>
          <p className="car-subheader max-w-2xl mx-auto">
            Renting a car with us is quick and easy in just three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center">
              <div className="relative mb-8">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-gray-200 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                )}
                
                <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-car-blue text-white flex items-center justify-center text-sm font-bold">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-car-darkblue">{step.title}</h3>
              <p className="text-car-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
