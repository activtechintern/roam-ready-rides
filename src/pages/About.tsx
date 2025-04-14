
import React from 'react';
import { motion } from "framer-motion";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Users, Award, Clock, Shield, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with enhanced animations */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative py-24 bg-gradient-to-r from-orange-100 via-rose-100 to-orange-50 overflow-hidden"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-orange-200 to-orange-100 opacity-50"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-orange-200 to-orange-100 opacity-40"
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-car-darkblue mb-6 font-playfair"
            >
              About RoamReadyRides
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xl text-car-gray max-w-2xl mb-8">
                Your trusted partner in the journey of hassle-free car rentals, bringing mobility solutions with an Indian touch.
              </p>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="inline-block"
              >
                <a href="/contact" className="bg-car-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1">
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Grid with staggered animations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center text-car-darkblue mb-12 font-playfair"
            >
              Why Choose Us
            </motion.h2>
            
            <motion.div 
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div 
                variants={fadeIn}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-orange-50 to-transparent border border-orange-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <motion.div 
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Users className="w-12 h-12 text-car-orange mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold text-car-darkblue mb-2">Customer First</h3>
                <p className="text-car-gray">Dedicated to providing exceptional service to every customer, whether local or tourist.</p>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-orange-50 to-transparent border border-orange-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <motion.div 
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Award className="w-12 h-12 text-car-orange mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold text-car-darkblue mb-2">Quality Assured</h3>
                <p className="text-car-gray">Well-maintained fleet of vehicles for your safety and comfort on Indian roads.</p>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-orange-50 to-transparent border border-orange-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <motion.div 
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Clock className="w-12 h-12 text-car-orange mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold text-car-darkblue mb-2">24/7 Support</h3>
                <p className="text-car-gray">Round-the-clock assistance for your peace of mind anywhere in India.</p>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-orange-50 to-transparent border border-orange-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <motion.div 
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Shield className="w-12 h-12 text-car-orange mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold text-car-darkblue mb-2">Secure Booking</h3>
                <p className="text-car-gray">Safe and secure booking process with instant confirmation and local payment options.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Story Section with animated elements */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gradient-to-r from-car-darkblue to-car-blue text-white relative overflow-hidden"
        >
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-10 left-10 text-[200px] font-bold text-white opacity-10 font-playfair"
          >
            भारत
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair"
            >
              Our Story
            </motion.h2>
            
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                <motion.div 
                  variants={fadeIn}
                  className="space-y-4"
                >
                  <p className="text-lg leading-relaxed">
                    Founded with a vision to revolutionize the car rental experience in India, 
                    RoamReadyRides has grown from a small fleet to become one of the most trusted names 
                    in the industry.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We understand the diverse needs of Indian customers and have tailored our services 
                    to provide the perfect blend of traditional values and modern convenience.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="space-y-4"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-car-orange flex-shrink-0 mt-1" />
                    <p>Started in 2015 with just 10 vehicles in Mumbai</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-car-orange flex-shrink-0 mt-1" />
                    <p>Now present in 25+ major cities across India</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-car-orange flex-shrink-0 mt-1" />
                    <p>Fleet of 500+ vehicles including luxury and electric options</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-car-orange flex-shrink-0 mt-1" />
                    <p>Trusted by over 100,000 satisfied customers nationwide</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* New Section: Our Presence in India */}
        <section className="py-16 bg-gradient-to-b from-white to-orange-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center text-car-darkblue mb-12 font-playfair"
            >
              Our Presence Across India
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center"
            >
              {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 
                'Pune', 'Jaipur', 'Ahmedabad', 'Goa', 'Chandigarh', 'Kochi'].map((city, index) => (
                <motion.div 
                  key={city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <MapPin className="w-6 h-6 text-car-orange mx-auto mb-2" />
                  <p className="font-medium text-car-darkblue">{city}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
