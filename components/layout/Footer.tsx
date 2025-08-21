// 'use client';

// import { motion } from 'framer-motion';
// import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { useState } from 'react';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);

// /*************  ✨ Windsurf Command ⭐  *************/
//   /**
//    * Simulates subscribing to a newsletter by setting a success state
//    * for 3 seconds and then resetting the input field.
//    * @param {React.FormEvent} e - The form event.
//    */
// /*******  a63563fe-9e7c-411e-8d40-9276a2edf8de  *******/
//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulate subscription
//     setSubscribed(true);
//     setTimeout(() => {
//       setSubscribed(false);
//       setEmail('');
//     }, 3000);
//   };

//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: "easeOut" }
//   };

//   const staggerChildren = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.3))]" />
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

//       <div className="relative">
//         {/* Newsletter Section */}
//         <motion.div
//           className="border-b border-gray-700 py-12"
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           variants={staggerChildren}
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center">
//               <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-4">
//                 اشترك في نشرتنا الطبية
//               </motion.h3>
//               <motion.p variants={fadeInUp} className="text-gray-300 mb-6 max-w-2xl mx-auto">
//                 احصل على أحدث النصائح الطبية والمعلومات الصحية المفيدة مباشرة في بريدك الإلكتروني
//               </motion.p>
//               <motion.form
//                 variants={fadeInUp}
//                 onSubmit={handleSubscribe}
//                 className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
//               >
//                 <Input
//                   type="email"
//                   placeholder="أدخل بريدك الإلكتروني"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
//                   required
//                 />
//                 <Button
//                   type="submit"
//                   className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8"
//                   disabled={subscribed}
//                 >
//                   {subscribed ? 'تم الاشتراك!' : 'اشترك'}
//                 </Button>
//               </motion.form>
//             </div>
//           </div>
//         </motion.div>

//         {/* Main Footer Content */}
//         <div className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               variants={staggerChildren}
//             >
//               {/* Company Info */}
//               <motion.div variants={fadeInUp} className="space-y-6">
//                 <div className="flex items-center space-x-3 space-x-reverse">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
//                     <Heart className="w-7 h-7 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold">رعاية طبية</h3>
//                     <p className="text-sm text-gray-300">خدمات طبية متميزة</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed">
//                   نحن نقدم أفضل الخدمات الطبية بأحدث التقنيات وأمهر الأطباء.
//                   هدفنا هو توفير رعاية صحية شاملة ومتميزة لجميع المرضى.
//                 </p>
//                 <div className="flex space-x-4 space-x-reverse">
//                   {[
//                     { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
//                     { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
//                     { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
//                     { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
//                   ].map((social, index) => (
//                     <motion.a
//                       key={index}
//                       href={social.href}
//                       className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors ${social.color}`}
//                       whileHover={{ scale: 1.1, y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <social.icon className="w-5 h-5" />
//                     </motion.a>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Quick Links */}
//               <motion.div variants={fadeInUp} className="space-y-6">
//                 <h4 className="text-lg font-semibold">روابط سريعة</h4>
//                 <ul className="space-y-3">
//                   {[
//                     'الرئيسية',
//                     'من نحن',
//                     'خدماتنا',
//                     'مشاريعنا',
//                     'اتصل بنا',
//                     'سياسة الخصوصية'
//                   ].map((link, index) => (
//                     <motion.li
//                       key={index}
//                       whileHover={{ x: 5 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                         {link}
//                       </a>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>

//               {/* Services */}
//               <motion.div variants={fadeInUp} className="space-y-6">
//                 <h4 className="text-lg font-semibold">خدماتنا</h4>
//                 <ul className="space-y-3">
//                   {[
//                     'استشارات طبية',
//                     'فحوصات شاملة',
//                     'علاج طبيعي',
//                     'جراحات تجميلية',
//                     'طب الأسنان',
//                     'رعاية منزلية'
//                   ].map((service, index) => (
//                     <motion.li
//                       key={index}
//                       whileHover={{ x: 5 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                         {service}
//                       </a>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>

//               {/* Contact Info */}
//               <motion.div variants={fadeInUp} className="space-y-6">
//                 <h4 className="text-lg font-semibold">تواصل معنا</h4>
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-3 space-x-reverse">
//                     <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
//                       <Phone className="w-5 h-5 text-blue-400" />
//                     </div>
//                     <div>
//                       <p className="text-white font-medium">+20 123 456 7890</p>
//                       <p className="text-gray-400 text-sm">متاح 24/7</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3 space-x-reverse">
//                     <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
//                       <Mail className="w-5 h-5 text-green-400" />
//                     </div>
//                     <div>
//                       <p className="text-white font-medium">info@medicalcare.com</p>
//                       <p className="text-gray-400 text-sm">رد سريع خلال ساعة</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3 space-x-reverse">
//                     <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
//                       <MapPin className="w-5 h-5 text-orange-400" />
//                     </div>
//                     <div>
//                       <p className="text-white font-medium">القاهرة، مصر</p>
//                       <p className="text-gray-400 text-sm">شارع التحرير، وسط البلد</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3 space-x-reverse">
//                     <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
//                       <Clock className="w-5 h-5 text-purple-400" />
//                     </div>
//                     <div>
//                       <p className="text-white font-medium">ساعات العمل</p>
//                       <p className="text-gray-400 text-sm">السبت - الخميس: 8ص - 10م</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <motion.div
//           className="border-t border-gray-700 py-8"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-400 text-sm mb-4 md:mb-0">
//                 © 2024 رعاية طبية. جميع الحقوق محفوظة.
//               </p>
//               <div className="flex space-x-6 space-x-reverse text-sm">
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   سياسة الخصوصية
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   شروط الاستخدام
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   ملفات تعريف الارتباط
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.3))]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative">
        {/* Newsletter Section */}
        <motion.div
          className="border-b border-gray-700 py-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h3
                variants={fadeInUp}
                className="text-2xl font-bold mb-4">
                Subscribe to Our Medical Newsletter
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest medical tips and helpful health information
                directly in your inbox
              </motion.p>
              <motion.form
                variants={fadeInUp}
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8"
                  disabled={subscribed}>
                  {subscribed ? "Subscribed!" : "Subscribe"}
                </Button>
              </motion.form>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}>
              {/* Company Info */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex items-center space-x-3">
                  {" "}
                  {/* Removed space-x-reverse for English */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Medical Care</h3>
                    <p className="text-sm text-gray-300">
                      Distinguished Medical Services
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  We provide the best medical services with cutting-edge
                  technologies and the most skilled doctors. Our goal is to
                  deliver comprehensive and distinguished healthcare to all
                  patients.
                </p>
                <div className="flex space-x-4">
                  {" "}
                  {/* Removed space-x-reverse for English */}
                  {[
                    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
                    {
                      icon: Instagram,
                      href: "#",
                      color: "hover:text-pink-400",
                    },
                    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}>
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <h4 className="text-lg font-semibold">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    "Home",
                    "About Us",
                    "Our Services",
                    "Our Projects",
                    "Contact Us",
                    "Privacy Policy",
                  ].map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors">
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <h4 className="text-lg font-semibold">Our Services</h4>
                <ul className="space-y-3">
                  {[
                    "Medical Consultations",
                    "Comprehensive Checkups",
                    "Physical Therapy",
                    "Cosmetic Surgeries",
                    "Dental Care",
                    "Home Care",
                  ].map((service, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors">
                        {service}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <h4 className="text-lg font-semibold">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    {" "}
                    {/* Removed space-x-reverse for English */}
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">+20 123 456 7890</p>
                      <p className="text-gray-400 text-sm">Available 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {" "}
                    {/* Removed space-x-reverse for English */}
                    <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        info@medicalcare.com
                      </p>
                      <p className="text-gray-400 text-sm">
                        Quick response within an hour
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {" "}
                    {/* Removed space-x-reverse for English */}
                    <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Cairo, Egypt</p>
                      <p className="text-gray-400 text-sm">
                        Tahrir Street, Downtown
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {" "}
                    {/* Removed space-x-reverse for English */}
                    <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Working Hours</p>
                      <p className="text-gray-400 text-sm">
                        Saturday - Thursday: 8 AM - 10 PM
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Medical Care. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                {" "}
                {/* Removed space-x-reverse for English */}
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors">
                  Terms of Use
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
