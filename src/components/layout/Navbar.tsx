
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User, Car } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Car className="h-8 w-8 text-car-blue" />
              <span className="ml-2 text-xl font-bold text-car-darkblue">RoamReadyRides</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-car-darkblue hover:text-car-blue">
              Home
            </Link>
            <Link to="/search" className="px-3 py-2 text-sm font-medium text-car-darkblue hover:text-car-blue">
              Cars
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-car-darkblue hover:text-car-blue">
              About
            </Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium text-car-darkblue hover:text-car-blue">
              Contact
            </Link>
            <Button variant="outline" className="ml-4 flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>Sign In</span>
            </Button>
            <Button className="bg-car-blue hover:bg-car-blue/90">Register</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-car-darkblue hover:text-car-blue focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-car-darkblue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/search" 
              className="block px-3 py-2 rounded-md text-base font-medium text-car-darkblue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Cars
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-car-darkblue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-car-darkblue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button variant="outline" className="w-full justify-center">
                <User className="mr-2 h-4 w-4" />
                <span>Sign In</span>
              </Button>
            </div>
            <div className="mt-3 px-5">
              <Button className="w-full bg-car-blue hover:bg-car-blue/90">Register</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
