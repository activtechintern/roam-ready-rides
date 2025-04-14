
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { 
  StarIcon, 
  Users, 
  Fuel, 
  GaugeCircle, 
  Cog, 
  Shield, 
  CalendarIcon, 
  Clock, 
  MapPin,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  Info,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample car data
const carData = {
  id: 1,
  name: 'Toyota Camry',
  category: 'Sedan',
  price: 45,
  images: [
    'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1425&q=80'
  ],
  description: 'The Toyota Camry is a comfortable and reliable midsize sedan, perfect for city driving and road trips. With excellent fuel efficiency and modern technology features, the Camry provides a smooth and enjoyable driving experience.',
  rating: 4.8,
  reviewCount: 127,
  features: {
    seats: 5,
    fuel: 'Hybrid',
    transmission: 'Automatic',
    mileage: '25 km/l',
    doors: 4,
    airConditioning: true,
    navigation: true,
    bluetooth: true,
    parkingSensors: true,
    rearviewCamera: true,
    cruiseControl: true,
    airBags: true
  },
  location: {
    address: '123 Rental Street, Car City',
    coordinates: {
      lat: 40.7128,
      lng: -74.006
    }
  },
  reviews: [
    {
      id: 1,
      user: 'Michael Brown',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      date: '2024-10-12',
      comment: 'The car was in excellent condition and performed perfectly throughout my trip. The pickup and drop-off process was seamless. Highly recommend!'
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4,
      date: '2024-09-30',
      comment: 'Very good experience overall. The car was clean and ran well. Only minor issue was that the GPS needed an update, but not a big deal.'
    },
    {
      id: 3,
      user: 'David Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
      rating: 5,
      date: '2024-09-15',
      comment: 'Smooth ride, great fuel efficiency, and the car was spotless when I picked it up. The process was quick and easy. Would definitely rent again!'
    }
  ],
  similarCars: [
    {
      id: 2,
      name: 'Honda Accord',
      category: 'Sedan',
      price: 48,
      image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Mazda 6',
      category: 'Sedan',
      price: 50,
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Nissan Altima',
      category: 'Sedan',
      price: 42,
      image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      rating: 4.5
    }
  ]
};

const CarDetails = () => {
  const { carId } = useParams<{ carId: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  
  // Calculate total price
  const days = pickupDate && returnDate 
    ? Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)) 
    : 0;
  const basePrice = carData.price * days;
  const insuranceFee = 10 * days;
  const serviceFee = 15;
  const totalPrice = basePrice + insuranceFee + serviceFee;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-sm text-car-gray hover:text-car-blue">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-car-gray">/</span>
                    <Link to="/search" className="text-sm text-car-gray hover:text-car-blue">
                      Cars
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-car-gray">/</span>
                    <span className="text-sm text-car-darkblue font-medium">
                      {carData.name}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          
          {/* Car Title */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="car-header mb-2">{carData.name}</h1>
                <div className="flex items-center">
                  <Badge className="bg-car-blue mr-2">{carData.category}</Badge>
                  <div className="flex items-center text-car-gray">
                    <StarIcon className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    <span className="mr-1">{carData.rating}</span>
                    <span>({carData.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-car-blue">${carData.price}</span>
                  <span className="text-car-gray ml-1">/day</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Car Images and Details */}
            <div className="col-span-1 lg:col-span-2">
              {/* Image Gallery */}
              <Card className="mb-8 overflow-hidden">
                <div className="relative">
                  <img 
                    src={carData.images[activeImageIndex]} 
                    alt={carData.name} 
                    className="w-full h-96 object-cover"
                  />
                  
                  {/* Navigation Buttons */}
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 border-none"
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? carData.images.length - 1 : prev - 1))}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 border-none"
                    onClick={() => setActiveImageIndex((prev) => (prev === carData.images.length - 1 ? 0 : prev + 1))}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
                
                {/* Thumbnails */}
                <div className="p-4 flex space-x-2 overflow-x-auto">
                  {carData.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`w-24 h-16 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${index === activeImageIndex ? 'border-car-blue' : 'border-transparent'}`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${carData.name} - view ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* Tabs for Details */}
              <Tabs defaultValue="description" className="mb-8">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-car-gray">{carData.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <Users className="h-6 w-6 mx-auto mb-2 text-car-blue" />
                          <div className="text-sm font-medium">{carData.features.seats} Seats</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <Fuel className="h-6 w-6 mx-auto mb-2 text-car-blue" />
                          <div className="text-sm font-medium">{carData.features.fuel}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <Cog className="h-6 w-6 mx-auto mb-2 text-car-blue" />
                          <div className="text-sm font-medium">{carData.features.transmission}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <GaugeCircle className="h-6 w-6 mx-auto mb-2 text-car-blue" />
                          <div className="text-sm font-medium">{carData.features.mileage}</div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3 text-car-darkblue">Location</h3>
                        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                          <MapPin className="h-5 w-5 mr-3 text-car-blue flex-shrink-0" />
                          <span className="text-car-gray">{carData.location.address}</span>
                        </div>
                        <div className="mt-4 bg-gray-200 h-48 rounded-lg">
                          {/* Map would go here in a real implementation */}
                          <div className="w-full h-full flex items-center justify-center text-car-gray">
                            Map View (Google Maps would be integrated here)
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="features">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <Users className="h-4 w-4 text-car-blue" />
                          </div>
                          <span className="text-car-gray">{carData.features.seats} Seats</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <Fuel className="h-4 w-4 text-car-blue" />
                          </div>
                          <span className="text-car-gray">{carData.features.fuel}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <Cog className="h-4 w-4 text-car-blue" />
                          </div>
                          <span className="text-car-gray">{carData.features.transmission}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <GaugeCircle className="h-4 w-4 text-car-blue" />
                          </div>
                          <span className="text-car-gray">{carData.features.mileage}</span>
                        </div>
                        {/* Additional features */}
                        {carData.features.airConditioning && (
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-car-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                <path d="M16 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                <path d="m2 12 20 0"></path>
                                <path d="M4 15v.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 1 5 0v.5"></path>
                              </svg>
                            </div>
                            <span className="text-car-gray">Air Conditioning</span>
                          </div>
                        )}
                        {carData.features.bluetooth && (
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-car-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 7 8 8-4 4V3l4 4-8 8"></path>
                              </svg>
                            </div>
                            <span className="text-car-gray">Bluetooth</span>
                          </div>
                        )}
                        {carData.features.navigation && (
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-car-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8z"></path>
                                <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                              </svg>
                            </div>
                            <span className="text-car-gray">Navigation</span>
                          </div>
                        )}
                        {carData.features.parkingSensors && (
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-car-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c0 .8.4 1.7 1 2.2.8.6 2 1 3.4 1-4 0-7 1.6-7 3.6v.4"></path>
                                <path d="m12.7 16.8-.4.5a1 1 0 0 1-.8.3h-1.6a1 1 0 0 1-.9-1.3l4-9a1 1 0 0 1 1.9 0l.8 1.8"></path>
                                <path d="M7 13.8a7.7 7.7 0 0 0 3 1.2"></path>
                                <path d="M15 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"></path>
                                <path d="M18 15v2"></path>
                                <path d="M18 11v-1"></path>
                              </svg>
                            </div>
                            <span className="text-car-gray">Parking Sensors</span>
                          </div>
                        )}
                        {carData.features.rearviewCamera && (
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-car-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 8v8"></path>
                                <path d="M6 4h12l4 4-4 4H6z"></path>
                                <path d="M18 16v4"></path>
                                <path d="M22 12v4"></path>
                                <path d="M6 12h.01"></path>
                                <path d="M2 12h.01"></path>
                                <path d="M10 12h.01"></path>
                              </svg>
                            </div>
                            <span className="text-car-gray">Rearview Camera</span>
                          </div>
                        )}
                        {carData.features.cruiseControl && (
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-car-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path>
                                <path d="M12 7v5l2 2"></path>
                              </svg>
                            </div>
                            <span className="text-car-gray">Cruise Control</span>
                          </div>
                        )}
                        {carData.features.airBags && (
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <Shield className="h-4 w-4 text-car-blue" />
                            </div>
                            <span className="text-car-gray">Air Bags</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <div className="mr-4">
                          <div className="text-3xl font-bold text-car-darkblue">{carData.rating}</div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(carData.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <div className="text-sm text-car-gray mt-1">{carData.reviewCount} reviews</div>
                        </div>
                        <div className="flex-grow">
                          {/* Rating bars would go here */}
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {carData.reviews.map((review) => (
                          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                            <div className="flex items-start">
                              <img 
                                src={review.avatar} 
                                alt={review.user} 
                                className="w-10 h-10 rounded-full mr-4"
                              />
                              <div className="flex-grow">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="font-medium text-car-darkblue">{review.user}</h4>
                                    <div className="flex items-center mt-1">
                                      {[...Array(5)].map((_, i) => (
                                        <StarIcon 
                                          key={i} 
                                          className={`h-3 w-3 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                                        />
                                      ))}
                                      <span className="text-xs text-car-gray ml-2">{review.date}</span>
                                    </div>
                                  </div>
                                  <button className="text-car-gray hover:text-car-blue">
                                    <ThumbsUp className="h-4 w-4" />
                                  </button>
                                </div>
                                <p className="mt-2 text-car-gray">{review.comment}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              {/* Similar Cars */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-car-darkblue">Similar Cars</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {carData.similarCars.map((car) => (
                    <Link to={`/car/${car.id}`} key={car.id} className="block">
                      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="h-32 relative">
                          <img 
                            src={car.image} 
                            alt={car.name} 
                            className="w-full h-full object-cover"
                          />
                          <Badge className="absolute top-2 right-2 bg-car-blue">
                            {car.category}
                          </Badge>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-car-darkblue">{car.name}</h3>
                            <div className="flex items-center">
                              <StarIcon className="h-3 w-3 text-yellow-500 fill-current" />
                              <span className="ml-1 text-xs">{car.rating}</span>
                            </div>
                          </div>
                          <div className="mt-2 flex justify-between items-center">
                            <div>
                              <span className="font-bold text-car-blue">${car.price}</span>
                              <span className="text-xs text-car-gray">/day</span>
                            </div>
                            <Button size="sm" variant="ghost" className="text-car-blue hover:text-car-blue/80">
                              View
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Booking Form */}
            <div className="col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 text-car-darkblue">Book this car</h2>
                  
                  <div className="space-y-4">
                    {/* Pick-up Date */}
                    <div>
                      <label className="block text-sm font-medium text-car-darkblue mb-1">Pick-up Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !pickupDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {pickupDate ? format(pickupDate, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                          <Calendar
                            mode="single"
                            selected={pickupDate}
                            onSelect={setPickupDate}
                            initialFocus
                            className="p-3"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    {/* Return Date */}
                    <div>
                      <label className="block text-sm font-medium text-car-darkblue mb-1">Return Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !returnDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                          <Calendar
                            mode="single"
                            selected={returnDate}
                            onSelect={setReturnDate}
                            initialFocus
                            className="p-3"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    {/* Pickup Location */}
                    <div>
                      <label className="block text-sm font-medium text-car-darkblue mb-1">Pick-up Location</label>
                      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md p-2">
                        <MapPin className="h-4 w-4 text-car-gray mr-2" />
                        <span className="text-car-gray text-sm">{carData.location.address}</span>
                      </div>
                    </div>
                    
                    {/* Price Breakdown */}
                    {pickupDate && returnDate && (
                      <div className="mt-6 space-y-2">
                        <h3 className="font-medium text-car-darkblue">Price Details</h3>
                        <div className="bg-gray-50 p-4 rounded-md space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-car-gray">${carData.price} x {days} days</span>
                            <span className="font-medium">${basePrice}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <div className="flex items-center">
                              <span className="text-car-gray">Insurance Fee</span>
                              <div className="ml-1 relative group">
                                <Info className="h-3 w-3 text-car-gray cursor-help" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white shadow-lg rounded-md p-2 text-xs text-car-gray opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                                  Basic insurance coverage included in your rental.
                                </div>
                              </div>
                            </div>
                            <span className="font-medium">${insuranceFee}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <div className="flex items-center">
                              <span className="text-car-gray">Service Fee</span>
                              <div className="ml-1 relative group">
                                <Info className="h-3 w-3 text-car-gray cursor-help" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white shadow-lg rounded-md p-2 text-xs text-car-gray opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                                  One-time fee that covers processing and support.
                                </div>
                              </div>
                            </div>
                            <span className="font-medium">${serviceFee}</span>
                          </div>
                          <div className="border-t border-gray-200 pt-2 mt-2">
                            <div className="flex justify-between font-medium">
                              <span>Total</span>
                              <span className="text-car-blue">${totalPrice}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      className="w-full bg-car-orange hover:bg-car-orange/90 mt-4"
                      disabled={!pickupDate || !returnDate}
                    >
                      Continue to Book
                    </Button>
                    
                    {/* Cancellation Policy */}
                    <div className="mt-4 text-xs text-car-gray">
                      <Shield className="h-3 w-3 inline mr-1" />
                      Free cancellation up to 48 hours before pickup
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CarDetails;
