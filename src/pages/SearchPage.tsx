
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StarIcon, Users, Fuel, GaugeCircle, Cog, GridIcon, List, Filter, Search as SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data for cars
const cars = [
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
  },
  {
    id: 5,
    name: 'Audi Q5',
    category: 'SUV',
    price: 85,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',
    rating: 4.6,
    features: {
      seats: 5,
      fuel: 'Diesel',
      transmission: 'Automatic',
      mileage: '17 km/l'
    }
  },
  {
    id: 6,
    name: 'Nissan Leaf',
    category: 'Electric',
    price: 55,
    image: 'https://images.unsplash.com/photo-1593055357429-62eaf3b259ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 4.5,
    features: {
      seats: 5,
      fuel: 'Electric',
      transmission: 'Automatic',
      mileage: '270 km range'
    }
  }
];

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<number[]>([0, 150]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Get category from URL params, if any
  const categoryParam = searchParams.get('type');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="car-header mb-2">Find Your Perfect Car</h1>
            <p className="car-subheader">Explore our wide range of vehicles for any occasion</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters - Desktop */}
            <aside className="w-full lg:w-1/4 hidden lg:block">
              <Card className="p-6">
                <h2 className="font-bold text-lg mb-4 text-car-darkblue">Filters</h2>
                
                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <h3 className="font-medium text-sm mb-2 text-car-darkblue">Search</h3>
                    <div className="relative">
                      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input placeholder="Search cars..." className="pl-10" />
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium text-sm text-car-darkblue">Price Range</h3>
                      <span className="text-sm text-car-blue">${priceRange[0]} - ${priceRange[1]}</span>
                    </div>
                    <Slider
                      defaultValue={[0, 150]}
                      max={300}
                      step={5}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-4"
                    />
                  </div>
                  
                  {/* Car Type */}
                  <div>
                    <h3 className="font-medium text-sm mb-2 text-car-darkblue">Car Type</h3>
                    <div className="space-y-2">
                      {['SUV', 'Sedan', 'Luxury', 'Electric', 'Economy'].map((type) => (
                        <div key={type} className="flex items-center">
                          <Checkbox id={`type-${type}`} className="mr-2 data-[state=checked]:bg-car-blue" />
                          <label htmlFor={`type-${type}`} className="text-sm text-car-gray cursor-pointer">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Brands */}
                  <div>
                    <h3 className="font-medium text-sm mb-2 text-car-darkblue">Brands</h3>
                    <div className="space-y-2">
                      {['Toyota', 'Honda', 'BMW', 'Tesla', 'Audi', 'Nissan'].map((brand) => (
                        <div key={brand} className="flex items-center">
                          <Checkbox id={`brand-${brand}`} className="mr-2 data-[state=checked]:bg-car-blue" />
                          <label htmlFor={`brand-${brand}`} className="text-sm text-car-gray cursor-pointer">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Transmission */}
                  <div>
                    <h3 className="font-medium text-sm mb-2 text-car-darkblue">Transmission</h3>
                    <div className="space-y-2">
                      {['Automatic', 'Manual'].map((transmission) => (
                        <div key={transmission} className="flex items-center">
                          <Checkbox id={`transmission-${transmission}`} className="mr-2 data-[state=checked]:bg-car-blue" />
                          <label htmlFor={`transmission-${transmission}`} className="text-sm text-car-gray cursor-pointer">
                            {transmission}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Fuel Type */}
                  <div>
                    <h3 className="font-medium text-sm mb-2 text-car-darkblue">Fuel Type</h3>
                    <div className="space-y-2">
                      {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map((fuel) => (
                        <div key={fuel} className="flex items-center">
                          <Checkbox id={`fuel-${fuel}`} className="mr-2 data-[state=checked]:bg-car-blue" />
                          <label htmlFor={`fuel-${fuel}`} className="text-sm text-car-gray cursor-pointer">
                            {fuel}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Reset Button */}
                  <Button variant="outline" className="w-full border-car-blue text-car-blue hover:bg-car-blue hover:text-white">
                    Reset Filters
                  </Button>
                </div>
              </Card>
            </aside>
            
            {/* Mobile Filter Button */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-car-blue hover:bg-car-blue/90' : ''}
                >
                  <GridIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-car-blue hover:bg-car-blue/90' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Mobile Filters */}
            {isMobileFilterOpen && (
              <div className="lg:hidden mb-6">
                <Card className="p-6">
                  <div className="space-y-6">
                    {/* Price Range */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium text-sm text-car-darkblue">Price Range</h3>
                        <span className="text-sm text-car-blue">${priceRange[0]} - ${priceRange[1]}</span>
                      </div>
                      <Slider
                        defaultValue={[0, 150]}
                        max={300}
                        step={5}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="my-4"
                      />
                    </div>
                    
                    {/* Quick Filters */}
                    <div>
                      <h3 className="font-medium text-sm mb-2 text-car-darkblue">Quick Filters</h3>
                      <div className="flex flex-wrap gap-2">
                        {['SUV', 'Sedan', 'Luxury', 'Electric', 'Automatic', 'Manual'].map((filter) => (
                          <Badge key={filter} variant="outline" className="rounded-full cursor-pointer hover:bg-car-blue hover:text-white">
                            {filter}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full" onClick={() => setIsMobileFilterOpen(false)}>
                        Cancel
                      </Button>
                      <Button className="w-full bg-car-blue hover:bg-car-blue/90" onClick={() => setIsMobileFilterOpen(false)}>
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}
            
            {/* Car Listings */}
            <div className="w-full lg:w-3/4">
              {/* Sort and View Options */}
              <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <span className="text-sm text-car-gray mr-2">Sort by:</span>
                  <Select defaultValue="recommended">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="hidden lg:flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' ? 'bg-car-blue hover:bg-car-blue/90' : ''}
                  >
                    <GridIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'bg-car-blue hover:bg-car-blue/90' : ''}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Active Filters */}
              {categoryParam && (
                <div className="mb-6 flex items-center">
                  <span className="text-sm text-car-gray mr-2">Active filters:</span>
                  <Badge className="bg-car-blue">
                    Type: {categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)}
                    <button className="ml-2 text-xs">&times;</button>
                  </Badge>
                </div>
              )}
              
              {/* Grid View */}
              {viewMode === 'grid' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cars.map((car) => (
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
              )}
              
              {/* List View */}
              {viewMode === 'list' && (
                <div className="space-y-4">
                  {cars.map((car) => (
                    <Link to={`/car/${car.id}`} key={car.id} className="block">
                      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:w-1/3 h-48 sm:h-auto relative">
                            <img 
                              src={car.image} 
                              alt={car.name} 
                              className="w-full h-full object-cover"
                            />
                            <Badge className="absolute top-2 right-2 bg-car-blue">
                              {car.category}
                            </Badge>
                          </div>
                          
                          <div className="sm:w-2/3 p-4 sm:p-6 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-bold text-car-darkblue">{car.name}</h3>
                              <div className="flex items-center">
                                <StarIcon className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="ml-1 text-sm font-medium">{car.rating}</span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                              <div className="car-card-feature inline-flex">
                                <Users className="h-4 w-4 mr-1" />
                                <span>{car.features.seats} seats</span>
                              </div>
                              <div className="car-card-feature inline-flex">
                                <Fuel className="h-4 w-4 mr-1" />
                                <span>{car.features.fuel}</span>
                              </div>
                              <div className="car-card-feature inline-flex">
                                <Cog className="h-4 w-4 mr-1" />
                                <span>{car.features.transmission}</span>
                              </div>
                              <div className="car-card-feature inline-flex">
                                <GaugeCircle className="h-4 w-4 mr-1" />
                                <span>{car.features.mileage}</span>
                              </div>
                            </div>
                            
                            <div className="mt-auto flex justify-between items-center">
                              <div>
                                <span className="text-2xl font-bold text-car-blue">${car.price}</span>
                                <span className="text-sm text-car-gray">/day</span>
                              </div>
                              <Button className="bg-car-orange hover:bg-car-orange/90">
                                Rent Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-1">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button size="sm" className="bg-car-blue hover:bg-car-blue/90">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
