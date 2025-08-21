// 'use client';

// import { motion } from 'framer-motion';
// import {
//   Heart,
//   Stethoscope,
//   Users,
//   Award,
//   Calendar,
//   Phone,
//   Mail,
//   MapPin,
//   CheckCircle,
//   Star,
//   Clock,
//   Shield,
//   UserCheck,
//   Activity,
//   Zap,
//   Target
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import AppointmentForm from '@/components/forms/AppointmentForm';

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: "easeOut" }
// };

// const staggerChildren = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const scaleIn = {
//   initial: { opacity: 0, scale: 0.8 },
//   animate: { opacity: 1, scale: 1 },
//   transition: { duration: 0.5, ease: "easeOut" }
// };

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-8 pb-24 overflow-hidden">
//         {/* Background decoration */}
//         <div className="absolute inset-0 bg-grid-gray-100/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
//         <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left column - Hero content */}
//             <motion.div
//               className="text-center lg:text-right space-y-8"
//               initial="initial"
//               animate="animate"
//               variants={staggerChildren}
//             >
//               <div className="space-y-6">
//                 <motion.div variants={fadeInUp} className="flex items-center justify-center lg:justify-start">
//                   <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
//                     <Star className="w-4 h-4 ml-2 fill-current" />
//                     موثوق من قبل 5000+ مريض
//                   </Badge>
//                 </motion.div>

//                 <motion.h1
//                   variants={fadeInUp}
//                   className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
//                 >
//                   رعاية طبية{" "}
//                   <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
//                     متميزة
//                   </span>
//                   {" "}لصحة أفضل
//                 </motion.h1>

//                 <motion.p
//                   variants={fadeInUp}
//                   className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
//                 >
//                   نقدم لك أفضل الخدمات الطبية مع فريق من الأطباء المتخصصين والمعدات الحديثة.
//                   صحتك هي أولويتنا، ونحن هنا لنوفر لك الرعاية التي تستحقها.
//                 </motion.p>
//               </div>

//               <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
//                   onClick={() => document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })}
//                 >
//                   <Calendar className="w-5 h-5 ml-2" />
//                   احجز موعد مجاني
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="font-semibold px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
//                   onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
//                 >
//                   تعرف على خدماتنا
//                 </Button>
//               </motion.div>

//               <motion.div
//                 variants={fadeInUp}
//                 className="flex items-center justify-center lg:justify-start space-x-8 space-x-reverse pt-4"
//               >
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-gray-900">5000+</div>
//                   <div className="text-sm text-gray-600">مريض راضي</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-gray-900">50+</div>
//                   <div className="text-sm text-gray-600">طبيب متخصص</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-gray-900">24/7</div>
//                   <div className="text-sm text-gray-600">خدمة متاحة</div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Right column - Appointment form */}
//             <motion.div
//               id="appointment-form"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <AppointmentForm />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//           >
//             <motion.h2
//               variants={fadeInUp}
//               className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
//             >
//               خدماتنا الطبية المتميزة
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="text-xl text-gray-600 max-w-3xl mx-auto"
//             >
//               نوفر مجموعة شاملة من الخدمات الطبية بأحدث التقنيات وأمهر الأطباء
//             </motion.p>
//           </motion.div>

//           <motion.div
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//           >
//             {/* Service Cards */}
//             {[
//               {
//                 icon: Stethoscope,
//                 title: 'استشارات طبية شاملة',
//                 description: 'فحوصات دقيقة وتشخيص متقدم مع أطباء متخصصين في جميع المجالات الطبية',
//                 features: ['فحص شامل', 'تشخيص دقيق', 'خطة علاج مخصصة', 'متابعة مستمرة'],
//                 color: 'blue'
//               },
//               {
//                 icon: Heart,
//                 title: 'رعاية القلب والأوعية',
//                 description: 'خدمات متخصصة في أمراض القلب والأوعية الدموية مع أحدث التقنيات التشخيصية',
//                 features: ['تخطيط القلب', 'قسطرة تشخيصية', 'جراحات القلب', 'برامج التأهيل'],
//                 color: 'red'
//               },
//               {
//                 icon: Activity,
//                 title: 'العلاج الطبيعي والتأهيل',
//                 description: 'برامج علاج طبيعي متقدمة لاستعادة الحركة والوظائف الطبيعية للجسم',
//                 features: ['علاج طبيعي', 'تأهيل حركي', 'علاج الألم', 'تمارين علاجية'],
//                 color: 'green'
//               },
//               {
//                 icon: Shield,
//                 title: 'الطب الوقائي والفحوصات',
//                 description: 'برامج وقائية شاملة للكشف المبكر عن الأمراض والحفاظ على الصحة العامة',
//                 features: ['فحوصات دورية', 'تحاليل شاملة', 'برامج وقائية', 'نصائح صحية'],
//                 color: 'purple'
//               },
//               {
//                 icon: UserCheck,
//                 title: 'طب الأسرة والرعاية المنزلية',
//                 description: 'خدمات طبية متكاملة للأسرة مع إمكانية الرعاية المنزلية للحالات الخاصة',
//                 features: ['طب الأسرة', 'رعاية منزلية', 'زيارات طبية', 'رعاية كبار السن'],
//                 color: 'orange'
//               },
//               {
//                 icon: Zap,
//                 title: 'الطوارئ والرعاية العاجلة',
//                 description: 'خدمة طوارئ متاحة 24/7 مع فريق طبي مدرب للتعامل مع جميع الحالات العاجلة',
//                 features: ['طوارئ 24/7', 'إسعاف متقدم', 'رعاية فورية', 'وحدة عناية مركزة'],
//                 color: 'yellow'
//               }
//             ].map((service, index) => (
//               <motion.div key={index} variants={scaleIn}>
//                 <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
//                   <CardContent className="p-8">
//                     <div className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                       <service.icon className={`w-8 h-8 text-${service.color}-600`} />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                     <p className="text-gray-600 leading-relaxed mb-6">
//                       {service.description}
//                     </p>
//                     <ul className="space-y-2">
//                       {service.features.map((feature, idx) => (
//                         <motion.li
//                           key={idx}
//                           className="flex items-center text-sm text-gray-600"
//                           initial={{ opacity: 0, x: -20 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: idx * 0.1 }}
//                         >
//                           <CheckCircle className="w-4 h-4 text-green-500 ml-3 flex-shrink-0" />
//                           {feature}
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* CTA within services */}
//           <motion.div
//             className="text-center mt-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 هل تحتاج استشارة طبية متخصصة؟
//               </h3>
//               <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//                 احجز موعدك الآن واحصل على استشارة مجانية مع أحد أطبائنا المتخصصين
//               </p>
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
//                 onClick={() => document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })}
//               >
//                 <Calendar className="w-5 h-5 ml-2" />
//                 احجز استشارتك المجانية
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="relative">
//                 <img
//                   src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="فريق طبي متخصص في مستشفى حديث"
//                   className="w-full rounded-2xl shadow-2xl"
//                   loading="lazy"
//                 />
//                 <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border">
//                   <div className="text-2xl font-bold text-blue-600">15+</div>
//                   <div className="text-sm text-gray-600">سنة خبرة</div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               className="space-y-6"
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               variants={staggerChildren}
//             >
//               <motion.div variants={fadeInUp}>
//                 <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium mb-4">
//                   لماذا نحن الأفضل
//                 </Badge>
//                 <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//                   رعاية طبية تستحق الثقة
//                 </h2>
//               </motion.div>

//               <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
//                 نحن نؤمن بأن كل مريض يستحق أفضل رعاية طبية ممكنة. لذلك نجمع بين الخبرة الطبية العالية
//                 والتقنيات الحديثة والاهتمام الشخصي لنقدم لك تجربة علاجية متميزة.
//               </motion.p>

//               <motion.div variants={fadeInUp} className="space-y-4">
//                 {[
//                   {
//                     icon: Award,
//                     title: 'أطباء معتمدون ومتخصصون',
//                     description: 'فريق من أمهر الأطباء المعتمدين دولياً'
//                   },
//                   {
//                     icon: Target,
//                     title: 'تقنيات طبية متقدمة',
//                     description: 'أحدث المعدات والتقنيات الطبية العالمية'
//                   },
//                   {
//                     icon: Clock,
//                     title: 'خدمة متاحة على مدار الساعة',
//                     description: 'رعاية طبية متاحة 24/7 لراحتك وأمانك'
//                   },
//                   {
//                     icon: Users,
//                     title: 'رعاية شخصية ومخصصة',
//                     description: 'خطط علاج مصممة خصيصاً لكل مريض'
//                   }
//                 ].map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     className="flex items-start space-x-4 space-x-reverse"
//                     variants={fadeInUp}
//                   >
//                     <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <feature.icon className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
//                       <p className="text-gray-600 text-sm">{feature.description}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               <motion.div variants={fadeInUp} className="pt-4">
//                 <Button
//                   size="lg"
//                   className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
//                   onClick={() => document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })}
//                 >
//                   <Phone className="w-5 h-5 ml-2" />
//                   تواصل معنا الآن
//                 </Button>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
//         <div className="absolute top-0 right-1/3 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//           >
//             <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
//               تواصل معنا واحجز موعدك
//             </motion.h2>
//             <motion.p variants={fadeInUp} className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
//               نحن هنا لخدمتك على مدار الساعة. تواصل معنا بأي طريقة تناسبك
//             </motion.p>
//           </motion.div>

//           <motion.div
//             className="grid md:grid-cols-3 gap-8 mb-16"
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//           >
//             {[
//               {
//                 icon: Phone,
//                 title: 'اتصل بنا',
//                 info: '+20 123 456 7890',
//                 description: 'متاح 24/7 للطوارئ'
//               },
//               {
//                 icon: Mail,
//                 title: 'راسلنا',
//                 info: 'info@medicalcare.com',
//                 description: 'رد سريع خلال ساعة'
//               },
//               {
//                 icon: MapPin,
//                 title: 'زورنا',
//                 info: 'القاهرة، مصر',
//                 description: 'شارع التحرير، وسط البلد'
//               }
//             ].map((contact, index) => (
//               <motion.div
//                 key={index}
//                 variants={scaleIn}
//                 className="text-center"
//               >
//                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <contact.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
//                 <p className="text-lg font-medium text-blue-100 mb-1">{contact.info}</p>
//                 <p className="text-sm text-blue-200">{contact.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             className="text-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-2xl mx-auto">
//               <h3 className="text-2xl font-bold mb-4">احجز موعدك الآن</h3>
//               <p className="text-blue-100 mb-6">
//                 لا تتردد في حجز موعدك. فريقنا الطبي جاهز لتقديم أفضل رعاية صحية لك
//               </p>
//               <Button
//                 size="lg"
//                 className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
//                 onClick={() => document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })}
//               >
//                 <Calendar className="w-5 h-5 ml-2" />
//                 احجز موعد مجاني الآن
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Schema Markup for SEO */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "MedicalOrganization",
//             "name": "رعاية طبية",
//             "description": "مركز طبي متخصص يقدم خدمات طبية شاملة ومتميزة مع فريق من الأطباء المتخصصين",
//             "url": "https://medicalcare.com",
//             "telephone": "+20-123-456-7890",
//             "email": "info@medicalcare.com",
//             "address": {
//               "@type": "PostalAddress",
//               "streetAddress": "شارع التحرير، وسط البلد",
//               "addressLocality": "القاهرة",
//               "addressCountry": "مصر"
//             },
//             "openingHours": "Mo-Su 00:00-23:59",
//             "medicalSpecialty": [
//               "Cardiology",
//               "General Medicine",
//               "Physical Therapy",
//               "Preventive Medicine",
//               "Family Medicine",
//               "Emergency Medicine"
//             ],
//             "hasOfferCatalog": {
//               "@type": "OfferCatalog",
//               "name": "الخدمات الطبية",
//               "itemListElement": [
//                 {
//                   "@type": "Offer",
//                   "itemOffered": {
//                     "@type": "MedicalService",
//                     "name": "استشارة طبية مجانية",
//                     "description": "استشارة طبية شاملة مع أطباء متخصصين"
//                   }
//                 }
//               ]
//             }
//           })
//         }}
//       />
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Stethoscope,
  Users,
  Award,
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  Clock,
  Shield,
  UserCheck,
  Activity,
  Zap,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AppointmentForm from "@/components/forms/AppointmentForm";

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-8 pb-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-gray-100/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Hero content */}
            <motion.div
              className="text-center lg:text-left space-y-8" // Changed text-right to text-left for English
              initial="initial"
              animate="animate"
              variants={staggerChildren}>
              <div className="space-y-6">
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center justify-center lg:justify-start">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                    <Star className="w-4 h-4 mr-2 fill-current" />{" "}
                    {/* Changed ml-2 to mr-2 for English */}
                    Trusted by 5000+ Patients
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Distinguished{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Medical Care
                  </span>{" "}
                  for Better Health
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  We provide you with the best medical services with a team of
                  specialized doctors and modern equipment. Your health is our
                  priority, and we are here to provide the care you deserve.
                </motion.p>
              </div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() =>
                    document
                      .getElementById("appointment-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }>
                  <Calendar className="w-5 h-5 mr-2" />{" "}
                  {/* Changed ml-2 to mr-2 for English */}
                  Book a Free Appointment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-semibold px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }>
                  Learn About Our Services
                </Button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center lg:justify-start space-x-8 pt-4" // Removed space-x-reverse for English
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-600">
                    Satisfied Patients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">
                    Specialized Doctors
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Available Service</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column - Appointment form */}
            <motion.div
              id="appointment-form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <AppointmentForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Distinguished Medical Services
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive range of medical services with the
              latest technologies and the most skilled doctors
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}>
            {/* Service Cards */}
            {[
              {
                icon: Stethoscope,
                title: "Comprehensive Medical Consultations",
                description:
                  "Accurate examinations and advanced diagnostics with specialized doctors in all medical fields",
                features: [
                  "Comprehensive Examination",
                  "Accurate Diagnosis",
                  "Customized Treatment Plan",
                  "Continuous Follow-up",
                ],
                color: "blue",
              },
              {
                icon: Heart,
                title: "Heart and Vascular Care",
                description:
                  "Specialized services for heart and vascular diseases with the latest diagnostic technologies",
                features: [
                  "Electrocardiogram",
                  "Diagnostic Catheterization",
                  "Heart Surgeries",
                  "Rehabilitation Programs",
                ],
                color: "red",
              },
              {
                icon: Activity,
                title: "Physical Therapy and Rehabilitation",
                description:
                  "Advanced physical therapy programs to restore movement and natural body functions",
                features: [
                  "Physical Therapy",
                  "Motor Rehabilitation",
                  "Pain Management",
                  "Therapeutic Exercises",
                ],
                color: "green",
              },
              {
                icon: Shield,
                title: "Preventive Medicine and Checkups",
                description:
                  "Comprehensive preventive programs for early disease detection and maintaining overall health",
                features: [
                  "Periodic Checkups",
                  "Comprehensive Tests",
                  "Preventive Programs",
                  "Health Tips",
                ],
                color: "purple",
              },
              {
                icon: UserCheck,
                title: "Family Medicine and Home Care",
                description:
                  "Integrated medical services for the family with home care options for special cases",
                features: [
                  "Family Medicine",
                  "Home Care",
                  "Medical Visits",
                  "Elderly Care",
                ],
                color: "orange",
              },
              {
                icon: Zap,
                title: "Emergency and Urgent Care",
                description:
                  "24/7 emergency services with a trained medical team to handle all urgent cases",
                features: [
                  "24/7 Emergency",
                  "Advanced First Aid",
                  "Immediate Care",
                  "Intensive Care Unit",
                ],
                color: "yellow",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon
                        className={`w-8 h-8 text-${service.color}-600`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}>
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />{" "}
                          {/* Changed ml-3 to mr-3 for English */}
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA within services */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Specialized Medical Consultation?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Book your appointment now and get a free consultation with one
                of our specialized doctors
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("appointment-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                <Calendar className="w-5 h-5 mr-2" />{" "}
                {/* Changed ml-2 to mr-2 for English */}
                Book Your Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Specialized Medical Team in a Modern Hospital"
                  className="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border">
                  {" "}
                  {/* Changed -left-6 to -right-6 for English */}
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">
                    Years of Experience
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}>
              <motion.div variants={fadeInUp}>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium mb-4">
                  Why We Are the Best
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Trustworthy Medical Care
                </h2>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 leading-relaxed">
                We believe every patient deserves the best possible medical
                care. Therefore, we combine high medical expertise, modern
                technologies, and personalized attention to provide you with a
                distinguished treatment experience.
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  {
                    icon: Award,
                    title: "Certified and Specialized Doctors",
                    description: "A team of internationally certified doctors",
                  },
                  {
                    icon: Target,
                    title: "Advanced Medical Technologies",
                    description:
                      "The latest global medical equipment and technologies",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Available Service",
                    description:
                      "Medical care available 24/7 for your comfort and safety",
                  },
                  {
                    icon: Users,
                    title: "Personalized and Tailored Care",
                    description:
                      "Treatment plans designed specifically for each patient",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4" // Removed space-x-reverse for English
                    variants={fadeInUp}>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() =>
                    document
                      .getElementById("appointment-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }>
                  <Phone className="w-5 h-5 mr-2" />{" "}
                  {/* Changed ml-2 to mr-2 for English */}
                  Contact Us Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Contact Us and Book Your Appointment
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              We are here to serve you around the clock. Contact us in any way
              that suits you
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}>
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+20 123 456 7890",
                description: "Available 24/7 for emergencies",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "info@medicalcare.com",
                description: "Quick response within an hour",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "Cairo, Egypt",
                description: "Tahrir Street, Downtown",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p className="text-lg font-medium text-blue-100 mb-1">
                  {contact.info}
                </p>
                <p className="text-sm text-blue-200">{contact.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Book Your Appointment Now
              </h3>
              <p className="text-blue-100 mb-6">
                Don’t hesitate to book your appointment. Our medical team is
                ready to provide you with the best healthcare
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("appointment-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                <Calendar className="w-5 h-5 mr-2" />{" "}
                {/* Changed ml-2 to mr-2 for English */}
                Book a Free Appointment Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            name: "Medical Care",
            description:
              "A specialized medical center providing comprehensive and distinguished medical services with a team of specialized doctors",
            url: "https://medicalcare.com",
            telephone: "+20-123-456-7890",
            email: "info@medicalcare.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Tahrir Street, Downtown",
              addressLocality: "Cairo",
              addressCountry: "Egypt",
            },
            openingHours: "Mo-Su 00:00-23:59",
            medicalSpecialty: [
              "Cardiology",
              "General Medicine",
              "Physical Therapy",
              "Preventive Medicine",
              "Family Medicine",
              "Emergency Medicine",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Medical Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "MedicalService",
                    name: "Free Medical Consultation",
                    description:
                      "Comprehensive medical consultation with specialized doctors",
                  },
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}
