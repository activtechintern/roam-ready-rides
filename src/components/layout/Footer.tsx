
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-car-darkblue text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Car className="h-8 w-8 text-car-blue" />
              <span className="ml-2 text-xl font-bold">RoamReadyRides</span>
            </div>
            <p className="text-gray-300 mb-6">
              Making car rentals easy, affordable, and hassle-free for tourists and locals alike.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-300 hover:text-white transition-colors">Cars</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Car Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/search?type=suv" className="text-gray-300 hover:text-white transition-colors">SUVs</Link>
              </li>
              <li>
                <Link to="/search?type=sedan" className="text-gray-300 hover:text-white transition-colors">Sedans</Link>
              </li>
              <li>
                <Link to="/search?type=luxury" className="text-gray-300 hover:text-white transition-colors">Luxury Cars</Link>
              </li>
              <li>
                <Link to="/search?type=electric" className="text-gray-300 hover:text-white transition-colors">Electric Vehicles</Link>
              </li>
              <li>
                <Link to="/search?type=economy" className="text-gray-300 hover:text-white transition-colors">Economy Cars</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-car-blue flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Rental Street, Car City, CC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-car-blue flex-shrink-0" />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-car-blue flex-shrink-0" />
                <span className="text-gray-300">info@roamreadyrides.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 RoamReadyRides. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
