
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarIcon, Users, Fuel, GaugeCircle, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data for featured cars
const featuredCars = [
  {
    id: 1,
    name: 'Toyota Camry',
    category: 'Sedan',
    price: 45,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    rating: 4.8,
    features: {
      seats: 5,
      fuel: 'Hybrid',
      transmission: 'Automatic',
      mileage: '25 km/l'
    }
  },
  {
    id: 2,
    name: 'Honda CR-V',
    category: 'SUV',
    price: 60,
    image: 'https://images.unsplash.com/photo-1568844293986-ca4c357d2006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    rating: 4.7,
    features: {
      seats: 7,
      fuel: 'Petrol',
      transmission: 'Automatic',
      mileage: '18 km/l'
    }
  },
  {
    id: 3,
    name: 'Tesla Model 3',
    category: 'Electric',
    price: 75,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    rating: 4.9,
    features: {
      seats: 5,
      fuel: 'Electric',
      transmission: 'Automatic',
      mileage: '400 km range'
    }
  },
  {
    id: 4,
    name: 'BMW 3 Series',
    category: 'Luxury',
    price: 90,
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 4.8,
    features: {
      seats: 5,
      fuel: 'Petrol',
      transmission: 'Automatic',
      mileage: '15 km/l'
    }
  }
];

const FeaturedCars = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="car-header mb-3">Featured Cars</h2>
          <p className="car-subheader max-w-2xl mx-auto">
            Discover our most popular vehicles loved by our customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <Link to={`/car/${car.id}`} key={car.id} className="block transition-transform hover:-translate-y-1 duration-300">
              <Card className="car-card h-full flex flex-col">
                <div className="car-card-image-container">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="car-card-image"
                  />
                  <Badge className="absolute top-2 right-2 bg-car-blue">
                    {car.category}
                  </Badge>
                </div>
                
                <div className="car-card-content flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="car-card-title">{car.name}</h3>
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-medium">{car.rating}</span>
                    </div>
                  </div>
                  
                  <div className="car-card-features mb-4">
                    <div className="car-card-feature">
                      <Users className="h-3 w-3 mr-1" />
                      <span>{car.features.seats} seats</span>
                    </div>
                    <div className="car-card-feature">
                      <Fuel className="h-3 w-3 mr-1" />
                      <span>{car.features.fuel}</span>
                    </div>
                    <div className="car-card-feature">
                      <Cog className="h-3 w-3 mr-1" />
                      <span>{car.features.transmission}</span>
                    </div>
                    <div className="car-card-feature">
                      <GaugeCircle className="h-3 w-3 mr-1" />
                      <span>{car.features.mileage}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="car-card-price">
                      <div>
                        <span className="text-xl font-bold text-car-blue">${car.price}</span>
                        <span className="text-sm text-car-gray">/day</span>
                      </div>
                      <Button size="sm" className="bg-car-orange hover:bg-car-orange/90">
                        Rent Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-car-blue text-car-blue hover:bg-car-blue hover:text-white">
            View All Cars
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
