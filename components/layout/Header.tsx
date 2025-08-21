// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, Phone, Mail, MapPin, Heart, Calendar } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import { toggleMenu, closeMenu, setActiveSection } from '@/lib/features/uiSlice';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const Header = () => {
//   const dispatch = useAppDispatch();
//   const { isMenuOpen } = useAppSelector((state) => state.ui);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'الرئيسية', href: '/', key: 'home' },
//     { name: 'من نحن', href: '/about', key: 'about' },
//     { name: 'مشاريعنا', href: '/projects', key: 'projects' },
//   ];

//   const handleNavClick = (key: string) => {
//     dispatch(setActiveSection(key));
//     dispatch(closeMenu());
//   };

//   return (
//     <>
//       {/* Top Bar */}
//       <motion.div
//         className="bg-blue-600 text-white py-2 text-sm"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
//             <div className="flex items-center space-x-6 space-x-reverse">
//               <div className="flex items-center">
//                 <Phone className="w-4 h-4 ml-2" />
//                 <span>+20 123 456 7890</span>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="w-4 h-4 ml-2" />
//                 <span>info@medicalcare.com</span>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <MapPin className="w-4 h-4 ml-2" />
//               <span>القاهرة، مصر - متاح 24/7</span>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Header */}
//       <motion.header
//         className={`sticky top-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? 'bg-white/95 backdrop-blur-md shadow-lg'
//             : 'bg-white'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             {/* Logo */}
//             <motion.div
//               className="flex items-center space-x-3 space-x-reverse"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
//                 <Heart className="w-7 h-7 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900">رعاية طبية</h1>
//                 <p className="text-sm text-gray-600">خدمات طبية متميزة</p>
//               </div>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
//               {navItems.map((item) => (
//                 <Link key={item.key} href={item.href}>
//                   <motion.span
//                     className={`text-lg font-medium transition-colors cursor-pointer ${
//                       pathname === item.href
//                         ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
//                         : 'text-gray-700 hover:text-blue-600'
//                     }`}
//                     whileHover={{ y: -2 }}
//                     onClick={() => handleNavClick(item.key)}
//                   >
//                     {item.name}
//                   </motion.span>
//                 </Link>
//               ))}
//             </nav>

//             {/* CTA Button & Mobile Menu */}
//             <div className="flex items-center space-x-4 space-x-reverse">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg"
//                   onClick={() => document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })}
//                 >
//                   <Calendar className="w-4 h-4 ml-2" />
//                   احجز موعد
//                 </Button>
//               </motion.div>

//               {/* Mobile Menu Button */}
//               <button
//                 className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//                 onClick={() => dispatch(toggleMenu())}
//               >
//                 <motion.div
//                   animate={{ rotate: isMenuOpen ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                 </motion.div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               className="md:hidden bg-white border-t shadow-lg"
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: 'auto', opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="px-4 py-6 space-y-4">
//                 {navItems.map((item, index) => (
//                   <Link key={item.key} href={item.href}>
//                     <motion.div
//                       className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
//                         pathname === item.href
//                           ? 'bg-blue-50 text-blue-600'
//                           : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                       initial={{ x: -50, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: index * 0.1 }}
//                       onClick={() => handleNavClick(item.key)}
//                     >
//                       {item.name}
//                     </motion.div>
//                   </Link>
//                 ))}
//                 <motion.div
//                   initial={{ x: -50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: navItems.length * 0.1 }}
//                   className="pt-4"
//                 >
//                   <Button
//                     className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-full"
//                     onClick={() => {
//                       document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' });
//                       dispatch(closeMenu());
//                     }}
//                   >
//                     <Calendar className="w-4 h-4 ml-2" />
//                     احجز موعد الآن
//                   </Button>
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.header>
//     </>
//   );
// };

// export default Header;
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  toggleMenu,
  closeMenu,
  setActiveSection,
} from "@/lib/features/uiSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((state) => state.ui);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "About Us", href: "/about", key: "about" },
    { name: "Our Projects", href: "/projects", key: "projects" },
  ];

  const handleNavClick = (key: string) => {
    dispatch(setActiveSection(key));
    dispatch(closeMenu());
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div
        className="bg-blue-600 text-white py-2 text-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-6">
              {" "}
              {/* Removed space-x-reverse for English */}
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />{" "}
                {/* Changed ml-2 to mr-2 for English */}
                <span>+20 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />{" "}
                {/* Changed ml-2 to mr-2 for English */}
                <span>info@medicalcare.com</span>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />{" "}
              {/* Changed ml-2 to mr-2 for English */}
              <span>Cairo, Egypt - Available 24/7</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3" /* Removed space-x-reverse for English */
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Medical Care
                </h1>
                <p className="text-sm text-gray-600">
                  Distinguished Medical Services
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {" "}
              {/* Removed space-x-reverse for English */}
              {navItems.map((item) => (
                <Link key={item.key} href={item.href}>
                  <motion.span
                    className={`text-lg font-medium transition-colors cursor-pointer ${
                      pathname === item.href
                        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    whileHover={{ y: -2 }}
                    onClick={() => handleNavClick(item.key)}>
                    {item.name}
                  </motion.span>
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {" "}
              {/* Removed space-x-reverse for English */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg"
                  onClick={() =>
                    document
                      .getElementById("appointment-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }>
                  <Calendar className="w-4 h-4 mr-2" />{" "}
                  {/* Changed ml-2 to mr-2 for English */}
                  Book Appointment
                </Button>
              </motion.div>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => dispatch(toggleMenu())}>
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t shadow-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <Link key={item.key} href={item.href}>
                    <motion.div
                      className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                        pathname === item.href
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.key)}>
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 rounded-full"
                    onClick={() => {
                      document
                        .getElementById("appointment-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                      dispatch(closeMenu());
                    }}>
                    <Calendar className="w-4 h-4 mr-2" />{" "}
                    {/* Changed ml-2 to mr-2 for English */}
                    Book Appointment Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
