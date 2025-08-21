// 'use client';

// import { motion } from 'framer-motion';
// import {
//   Heart,
//   Users,
//   Award,
//   Target,
//   Building,
//   Stethoscope,
//   Activity,
//   Shield,
//   Star,
//   CheckCircle,
//   Calendar,
//   ArrowRight,
//   MapPin,
//   Clock,
//   TrendingUp
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';

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

// export default function Projects() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16 pb-24 overflow-hidden">
//         <div className="absolute inset-0 bg-grid-gray-100/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
//         <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center space-y-8"
//             initial="initial"
//             animate="animate"
//             variants={staggerChildren}
//           >
//             <motion.div variants={fadeInUp} className="flex items-center justify-center">
//               <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
//                 <Building className="w-4 h-4 ml-2" />
//                 مشاريعنا
//               </Badge>
//             </motion.div>

//             <motion.h1
//               variants={fadeInUp}
//               className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
//             >
//               مشاريعنا{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
//                 الطبية
//               </span>
//               {" "}المتميزة
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
//             >
//               نفخر بمشاريعنا الطبية المبتكرة التي تهدف إلى تطوير الرعاية الصحية وتحسين جودة الحياة
//               للمرضى في جميع أنحاء المنطقة.
//             </motion.p>

//             <motion.div
//               variants={fadeInUp}
//               className="flex items-center justify-center space-x-8 space-x-reverse pt-4"
//             >
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-blue-600">12+</div>
//                 <div className="text-sm text-gray-600">مشروع مكتمل</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-green-600">8</div>
//                 <div className="text-sm text-gray-600">مشروع جاري</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-orange-600">50M+</div>
//                 <div className="text-sm text-gray-600">جنيه استثمار</div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Projects Section */}
//       <section className="py-24 bg-white">
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
//               مشاريعنا الرائدة
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="text-xl text-gray-600 max-w-3xl mx-auto"
//             >
//               مشاريع طبية متطورة تجمع بين التقنيات الحديثة والخبرة الطبية المتميزة
//             </motion.p>
//           </motion.div>

//           <motion.div
//             className="space-y-16"
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//           >
//             {/* Project 1 */}
//             <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="relative">
//                 <img
//                   src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="مركز القلب المتطور"
//                   className="w-full rounded-2xl shadow-2xl"
//                   loading="lazy"
//                 />
//                 <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border">
//                   <div className="flex items-center space-x-2 space-x-reverse">
//                     <Heart className="w-6 h-6 text-red-500" />
//                     <div>
//                       <div className="text-lg font-bold text-gray-900">مركز القلب</div>
//                       <div className="text-sm text-gray-600">2023</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <Badge className="bg-red-100 text-red-800 mb-4">
//                     <Heart className="w-4 h-4 ml-2" />
//                     مشروع مكتمل
//                   </Badge>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                     مركز القلب والأوعية الدموية المتطور
//                   </h3>
//                   <p className="text-lg text-gray-600 leading-relaxed mb-6">
//                     مركز متخصص في علاج أمراض القلب والأوعية الدموية مجهز بأحدث التقنيات العالمية
//                     وفريق من أمهر أطباء القلب. يضم المركز وحدات متخصصة للقسطرة والجراحة والعناية المركزة.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-red-50 rounded-lg p-4">
//                     <div className="text-2xl font-bold text-red-600 mb-1">500+</div>
//                     <div className="text-sm text-gray-600">عملية قلب ناجحة</div>
//                   </div>
//                   <div className="bg-blue-50 rounded-lg p-4">
//                     <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
//                     <div className="text-sm text-gray-600">معدل النجاح</div>
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   {[
//                     'وحدة قسطرة متطورة',
//                     'غرف عمليات مجهزة بالكامل',
//                     'وحدة عناية مركزة للقلب',
//                     'فريق طبي متخصص 24/7'
//                   ].map((feature, idx) => (
//                     <div key={idx} className="flex items-center">
//                       <CheckCircle className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Project 2 */}
//             <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6 lg:order-2">
//                 <div>
//                   <Badge className="bg-green-100 text-green-800 mb-4">
//                     <Activity className="w-4 h-4 ml-2" />
//                     مشروع جاري
//                   </Badge>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                     مركز التأهيل الطبي والعلاج الطبيعي
//                   </h3>
//                   <p className="text-lg text-gray-600 leading-relaxed mb-6">
//                     مركز شامل للتأهيل الطبي والعلاج الطبيعي يهدف إلى مساعدة المرضى على استعادة
//                     قدراتهم الحركية والوظيفية بأحدث التقنيات والبرامج العلاجية المتطورة.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-green-50 rounded-lg p-4">
//                     <div className="text-2xl font-bold text-green-600 mb-1">2024</div>
//                     <div className="text-sm text-gray-600">موعد الافتتاح</div>
//                   </div>
//                   <div className="bg-orange-50 rounded-lg p-4">
//                     <div className="text-2xl font-bold text-orange-600 mb-1">85%</div>
//                     <div className="text-sm text-gray-600">نسبة الإنجاز</div>
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   {[
//                     'صالات علاج طبيعي متطورة',
//                     'أجهزة تأهيل حديثة',
//                     'برامج علاجية مخصصة',
//                     'فريق متخصص في التأهيل'
//                   ].map((feature, idx) => (
//                     <div key={idx} className="flex items-center">
//                       <CheckCircle className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="relative lg:order-1">
//                 <img
//                   src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="مركز التأهيل الطبي"
//                   className="w-full rounded-2xl shadow-2xl"
//                   loading="lazy"
//                 />
//                 <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border">
//                   <div className="flex items-center space-x-2 space-x-reverse">
//                     <Activity className="w-6 h-6 text-green-500" />
//                     <div>
//                       <div className="text-lg font-bold text-gray-900">مركز التأهيل</div>
//                       <div className="text-sm text-gray-600">قريباً 2024</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Project 3 */}
//             <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="relative">
//                 <img
//                   src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="مختبر التحاليل الطبية"
//                   className="w-full rounded-2xl shadow-2xl"
//                   loading="lazy"
//                 />
//                 <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border">
//                   <div className="flex items-center space-x-2 space-x-reverse">
//                     <Shield className="w-6 h-6 text-blue-500" />
//                     <div>
//                       <div className="text-lg font-bold text-gray-900">مختبر التحاليل</div>
//                       <div className="text-sm text-gray-600">2022</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <Badge className="bg-blue-100 text-blue-800 mb-4">
//                     <Shield className="w-4 h-4 ml-2" />
//                     مشروع مكتمل
//                   </Badge>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                     مختبر التحاليل الطبية المتقدم
//                   </h3>
//                   <p className="text-lg text-gray-600 leading-relaxed mb-6">
//                     مختبر حديث مجهز بأحدث الأجهزة والتقنيات لإجراء جميع أنواع التحاليل الطبية
//                     بدقة عالية وسرعة في النتائج، مع فريق من المتخصصين المدربين.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-blue-50 rounded-lg p-4">
//                     <div className="text-2xl font-bold text-blue-600 mb-1">1000+</div>
//                     <div className="text-sm text-gray-600">تحليل يومياً</div>
//                   </div>
//                   <div className="bg-purple-50 rounded-lg p-4">
//                     <div className="text-2xl font-bold text-purple-600 mb-1">99.9%</div>
//                     <div className="text-sm text-gray-600">دقة النتائج</div>
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   {[
//                     'أجهزة تحليل متطورة',
//                     'نتائج سريعة ودقيقة',
//                     'تحاليل شاملة ومتخصصة',
//                     'خدمة 24 ساعة'
//                   ].map((feature, idx) => (
//                     <div key={idx} className="flex items-center">
//                       <CheckCircle className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Other Projects Grid */}
//       <section className="py-24 bg-gray-50">
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
//               مشاريع أخرى متميزة
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="text-xl text-gray-600 max-w-3xl mx-auto"
//             >
//               مجموعة من المشاريع الطبية المتنوعة التي تخدم احتياجات المجتمع الصحية
//             </motion.p>
//           </motion.div>

//           <motion.div
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//           >
//             {[
//               {
//                 title: 'وحدة الطوارئ المتطورة',
//                 description: 'وحدة طوارئ مجهزة بأحدث المعدات للتعامل مع جميع الحالات العاجلة',
//                 image: 'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 status: 'مكتمل',
//                 year: '2023',
//                 icon: Target,
//                 color: 'red'
//               },
//               {
//                 title: 'مركز الأشعة التشخيصية',
//                 description: 'مركز متخصص في جميع أنواع الأشعة التشخيصية بأحدث الأجهزة',
//                 image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 status: 'مكتمل',
//                 year: '2022',
//                 icon: Activity,
//                 color: 'blue'
//               },
//               {
//                 title: 'وحدة العناية المركزة',
//                 description: 'وحدة عناية مركزة مجهزة بأحدث أجهزة المراقبة والإنعاش',
//                 image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 status: 'مكتمل',
//                 year: '2021',
//                 icon: Shield,
//                 color: 'green'
//               },
//               {
//                 title: 'مركز طب الأطفال',
//                 description: 'مركز متخصص في طب الأطفال مع بيئة مريحة ومناسبة للأطفال',
//                 image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 status: 'جاري',
//                 year: '2024',
//                 icon: Heart,
//                 color: 'pink'
//               },
//               {
//                 title: 'مركز الجراحات التجميلية',
//                 description: 'مركز متطور للجراحات التجميلية والترميمية بأحدث التقنيات',
//                 image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 status: 'جاري',
//                 year: '2024',
//                 icon: Star,
//                 color: 'purple'
//               },
//               {
//                 title: 'مركز طب الأسنان',
//                 description: 'مركز شامل لطب الأسنان مع أحدث تقنيات العلاج والتجميل',
//                 image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 status: 'مخطط',
//                 year: '2025',
//                 icon: Users,
//                 color: 'orange'
//               }
//             ].map((project, index) => (
//               <motion.div key={index} variants={scaleIn}>
//                 <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
//                   <div className="relative">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                       loading="lazy"
//                     />
//                     <div className="absolute top-4 right-4">
//                       <Badge className={`${
//                         project.status === 'مكتمل' ? 'bg-green-600' :
//                         project.status === 'جاري' ? 'bg-orange-600' : 'bg-gray-600'
//                       } text-white`}>
//                         {project.status}
//                       </Badge>
//                     </div>
//                     <div className="absolute bottom-4 left-4">
//                       <div className={`w-10 h-10 bg-${project.color}-100 rounded-full flex items-center justify-center`}>
//                         <project.icon className={`w-5 h-5 text-${project.color}-600`} />
//                       </div>
//                     </div>
//                   </div>
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between mb-2">
//                       <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
//                       <span className="text-sm text-gray-500">{project.year}</span>
//                     </div>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {project.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Project Stats */}
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
//               إحصائيات مشاريعنا
//             </motion.h2>
//             <motion.p variants={fadeInUp} className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
//               أرقام تعكس حجم إنجازاتنا وتأثيرنا الإيجابي على المجتمع
//             </motion.p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-2 md:grid-cols-4 gap-8"
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//           >
//             {[
//               {
//                 icon: Building,
//                 number: '12',
//                 label: 'مشروع مكتمل',
//                 description: 'مشاريع طبية متميزة'
//               },
//               {
//                 icon: TrendingUp,
//                 number: '50M+',
//                 label: 'جنيه استثمار',
//                 description: 'استثمارات في الصحة'
//               },
//               {
//                 icon: Users,
//                 number: '10K+',
//                 label: 'مستفيد',
//                 description: 'من مشاريعنا الطبية'
//               },
//               {
//                 icon: MapPin,
//                 number: '5',
//                 label: 'مدن',
//                 description: 'تغطية جغرافية واسعة'
//               }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 variants={scaleIn}
//                 className="text-center"
//               >
//                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <stat.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold mb-2">{stat.number}</div>
//                 <div className="text-lg font-semibold text-blue-100 mb-1">{stat.label}</div>
//                 <div className="text-sm text-blue-200">{stat.description}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                 كن جزءاً من مشاريعنا المستقبلية
//               </h3>
//               <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//                 احجز موعدك الآن واستفد من خدماتنا الطبية المتميزة في مشاريعنا الحديثة
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
//                   onClick={() => document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })}
//                 >
//                   <Calendar className="w-5 h-5 ml-2" />
//                   احجز موعدك الآن
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="font-semibold px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
//                 >
//                   تعرف على المزيد
//                   <ArrowRight className="w-5 h-5 mr-2" />
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Award,
  Target,
  Building,
  Stethoscope,
  Activity,
  Shield,
  Star,
  CheckCircle,
  Calendar,
  ArrowRight,
  MapPin,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerChildren}>
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center">
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                <Building className="w-4 h-4 ml-2" />
                Our Projects
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font

-bold text-gray-900 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Medical
              </span>{" "}
              Distinguished Projects
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are proud of our innovative medical projects aimed at advancing
              healthcare and improving the quality of life for patients across
              the region.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center space-x-8 space-x-reverse pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">12+</div>
                <div className="text-sm text-gray-600">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">8</div>
                <div className="text-sm text-gray-600">Ongoing Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50M+</div>
                <div className="text-sm text-gray-600">Pounds Investment</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
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
              Our Leading Projects
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced medical projects combining modern technologies and
              distinguished medical expertise
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}>
            {/* Project 1 */}
            <motion.div
              variants={fadeInUp}
              className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Advanced Heart Center"
                  className="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Heart className="w-6 h-6 text-red-500" />
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        Heart Center
                      </div>
                      <div className="text-sm text-gray-600">2023</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Badge className="bg-red-100 text-red-800 mb-4">
                    <Heart className="w-4 h-4 ml-2" />
                    Completed Project
                  </Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Advanced Heart and Vascular Center
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    A specialized center for treating heart and vascular
                    diseases, equipped with the latest global technologies and a
                    team of the most skilled cardiologists. The center includes
                    specialized units for catheterization, surgery, and
                    intensive care.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-600 mb-1">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">
                      Successful Heart Surgeries
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      98%
                    </div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Advanced Catheterization Unit",
                    "Fully Equipped Operating Rooms",
                    "Cardiac Intensive Care Unit",
                    "Specialized Medical Team 24/7",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              variants={fadeInUp}
              className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-2">
                <div>
                  <Badge className="bg-green-100 text-green-800 mb-4">
                    <Activity className="w-4 h-4 ml-2" />
                    Ongoing Project
                  </Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Medical Rehabilitation and Physical Therapy Center
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    A comprehensive center for medical rehabilitation and
                    physical therapy aimed at helping patients regain their
                    motor and functional abilities with the latest technologies
                    and advanced treatment programs.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      2024
                    </div>
                    <div className="text-sm text-gray-600">Opening Date</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      85%
                    </div>
                    <div className="text-sm text-gray-600">Completion Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Advanced Physical Therapy Halls",
                    "Modern Rehabilitation Equipment",
                    "Customized Treatment Programs",
                    "Specialized Rehabilitation Team",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative lg:order-1">
                <img
                  src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Medical Rehabilitation Center"
                  className="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Activity className="w-6 h-6 text-green-500" />
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        Rehabilitation Center
                      </div>
                      <div className="text-sm text-gray-600">
                        Coming Soon 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              variants={fadeInUp}
              className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Medical Laboratory"
                  className="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border">
                  <div className="flex items-center space-xx-2 space-x-reverse">
                    <Shield className="w-6 h-6 text-blue-500" />
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        Medical Laboratory
                      </div>
                      <div className="text-sm text-gray-600">2022</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Badge className="bg-blue-100 text-blue-800 mb-4">
                    <Shield className="w-4 h-4 ml-2" />
                    Completed Project
                  </Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Advanced Medical Laboratory
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    A modern laboratory equipped with the latest devices and
                    technologies to perform all types of medical tests with high
                    accuracy and speed in results, with a team of trained
                    specialists.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      1000+
                    </div>
                    <div className="text-sm text-gray-600">Daily Tests</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">Result Accuracy</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Advanced Testing Devices",
                    "Fast and Accurate Results",
                    "Comprehensive and Specialized Tests",
                    "24-Hour Service",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="py-24 bg-gray-50">
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
              Other Distinguished Projects
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto">
              A range of diverse medical projects serving the community's
              healthcare needs
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}>
            {[
              {
                title: "Advanced Emergency Unit",
                description:
                  "An emergency unit equipped with the latest equipment to handle all urgent cases",
                image:
                  "https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=400",
                status: "Completed",
                year: "2023",
                icon: Target,
                color: "red",
              },
              {
                title: "Diagnostic Radiology Center",
                description:
                  "A specialized center for all types of diagnostic radiology with the latest equipment",
                image:
                  "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
                status: "Completed",
                year: "2022",
                icon: Activity,
                color: "blue",
              },
              {
                title: "Intensive Care Unit",
                description:
                  "An intensive care unit equipped with the latest monitoring and resuscitation devices",
                image:
                  "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
                status: "Completed",
                year: "2021",
                icon: Shield,
                color: "green",
              },
              {
                title: "Pediatric Center",
                description:
                  "A specialized pediatric center with a comfortable and child-friendly environment",
                image:
                  "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
                status: "Ongoing",
                year: "2024",
                icon: Heart,
                color: "pink",
              },
              {
                title: "Cosmetic Surgery Center",
                description:
                  "An advanced center for cosmetic and reconstructive surgeries with the latest technologies",
                image:
                  "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
                status: "Ongoing",
                year: "2024",
                icon: Star,
                color: "purple",
              },
              {
                title: "Dental Center",
                description:
                  "A comprehensive dental center with the latest treatment and cosmetic technologies",
                image:
                  "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
                status: "Planned",
                year: "2025",
                icon: Users,
                color: "orange",
              },
            ].map((project, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${
                          project.status === "Completed"
                            ? "bg-green-600"
                            : project.status === "Ongoing"
                            ? "bg-orange-600"
                            : "bg-gray-600"
                        } text-white`}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div
                        className={`w-10 h-10 bg-${project.color}-100 rounded-full flex items-center justify-center`}>
                        <project.icon
                          className={`w-5 h-5 text-${project.color}-600`}
                        />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Stats */}
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
              Our Projects Statistics
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Numbers reflecting the scale of our achievements and positive
              impact on the community
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}>
            {[
              {
                icon: Building,
                number: "12",
                label: "Completed Projects",
                description: "Distinguished Medical Projects",
              },
              {
                icon: TrendingUp,
                number: "50M+",
                label: "Pounds Investment",
                description: "Investments in Healthcare",
              },
              {
                icon: Users,
                number: "10K+",
                label: "Beneficiaries",
                description: "From Our Medical Projects",
              },
              {
                icon: MapPin,
                number: "5",
                label: "Cities",
                description: "Wide Geographical Coverage",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-blue-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Be Part of Our Future Projects
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Book your appointment now and benefit from our distinguished
                medical services in our modern projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() =>
                    document
                      .getElementById("appointment-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }>
                  <Calendar className="w-5 h-5 ml-2" />
                  Book Your Appointment Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-semibold px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                  Learn More
                  <ArrowRight className="w-5 h-5 mr-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
