import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

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
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.user_metadata?.avatar_url} />
                    <AvatarFallback>{user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Link>
                <Button variant="outline" onClick={handleAuthAction}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" onClick={() => navigate('/auth')}>
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
                <Button 
                  className="bg-car-blue hover:bg-car-blue/90"
                  onClick={() => navigate('/auth')}
                >
                  Register
                </Button>
              </>
            )}
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
              {user ? (
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  onClick={() => {
                    handleAuthAction();
                    setIsMenuOpen(false);
                  }}
                >
                  <User className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    className="w-full justify-center"
                    onClick={() => {
                      navigate('/auth');
                      setIsMenuOpen(false);
                    }}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                  <div className="mt-3 px-5">
                    <Button 
                      className="w-full bg-car-blue hover:bg-car-blue/90"
                      onClick={() => {
                        navigate('/auth');
                        setIsMenuOpen(false);
                      }}
                    >
                      Register
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
