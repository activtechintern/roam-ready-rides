
import React from 'react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from 'lucide-react';

// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    role: 'Business Traveler',
    comment: 'The car was in perfect condition and the booking process was incredibly smooth. Definitely my go-to car rental service for all my business trips now!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'Family Vacation',
    comment: 'We needed a spacious SUV for our family vacation and RoamReadyRides delivered exactly what we needed. The kids loved it and the price was very reasonable.',
    rating: 4
  },
  {
    id: 3,
    name: 'Sophie Williams',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    role: 'Weekend Getaway',
    comment: 'I rented a convertible for a weekend trip along the coast, and it made the experience so much better. Easy pickup and return process too!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="car-header mb-3">What Our Customers Say</h2>
          <p className="car-subheader max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 h-full shadow hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-car-darkblue">{testimonial.name}</h3>
                  <p className="text-sm text-car-gray">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-car-gray italic">"{testimonial.comment}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
