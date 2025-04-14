
import React from 'react';
import { motion } from "framer-motion";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative py-20 bg-gradient-to-r from-orange-100 to-rose-100"
        >
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-car-darkblue mb-6 font-playfair">
              About RoamReadyRides
            </h1>
            <p className="text-xl text-car-gray max-w-2xl mx-auto">
              Your trusted partner in the journey of hassle-free car rentals, bringing mobility solutions with an Indian touch.
            </p>
          </div>
        </motion.section>

        {/* Features Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-lg bg-gradient-to-b from-orange-50 to-transparent"
            >
              <Users className="w-12 h-12 text-car-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-car-darkblue mb-2">Customer First</h3>
              <p className="text-car-gray">Dedicated to providing exceptional service to every customer.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-lg bg-gradient-to-b from-orange-50 to-transparent"
            >
              <Award className="w-12 h-12 text-car-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-car-darkblue mb-2">Quality Assured</h3>
              <p className="text-car-gray">Maintained fleet of vehicles for your safety and comfort.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 rounded-lg bg-gradient-to-b from-orange-50 to-transparent"
            >
              <Clock className="w-12 h-12 text-car-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-car-darkblue mb-2">24/7 Support</h3>
              <p className="text-car-gray">Round-the-clock assistance for your peace of mind.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 rounded-lg bg-gradient-to-b from-orange-50 to-transparent"
            >
              <Shield className="w-12 h-12 text-car-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-car-darkblue mb-2">Secure Booking</h3>
              <p className="text-car-gray">Safe and secure booking process with instant confirmation.</p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16 bg-gradient-to-r from-car-darkblue to-car-blue text-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair">Our Story</h2>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
              <p>
                Founded with a vision to revolutionize the car rental experience in India, 
                RoamReadyRides has grown from a small fleet to become one of the most trusted names 
                in the industry.
              </p>
              <p>
                We understand the diverse needs of Indian customers and have tailored our services 
                to provide the perfect blend of traditional values and modern convenience.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
