// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import {
//   Calendar,
//   Clock,
//   User,
//   Mail,
//   Phone,
//   MessageCircle,
//   Stethoscope,
//   CheckCircle,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useAppDispatch, useAppSelector } from "@/lib/hooks";
// import { bookAppointment } from "@/lib/features/appointmentSlice";
// import { addNotification } from "@/lib/features/uiSlice";

// const appointmentSchema = z.object({
//   name: z.string().min(2, "الاسم يجب أن يكون أكثر من حرفين"),
//   email: z.string().email("البريد الإلكتروني غير صحيح"),
//   phone: z.string().min(10, "رقم الهاتف يجب أن يكون 10 أرقام على الأقل"),
//   service: z.string().min(1, "يرجى اختيار نوع الخدمة"),
//   date: z.string().min(1, "يرجى اختيار التاريخ"),
//   time: z.string().min(1, "يرجى اختيار الوقت"),
//   message: z.string().optional(),
// });

// type AppointmentFormData = z.infer<typeof appointmentSchema>;

// const AppointmentForm = () => {
//   const dispatch = useAppDispatch();
//   const { loading } = useAppSelector((state) => state.appointments);
//   const [step, setStep] = useState(1);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     watch,
//     reset,
//   } = useForm<AppointmentFormData>({
//     resolver: zodResolver(appointmentSchema),
//   });

//   const watchedValues = watch();

//   const services = [
//     "استشارة طبية عامة",
//     "فحص شامل",
//     "استشارة قلب",
//     "استشارة عظام",
//     "استشارة جلدية",
//     "استشارة نفسية",
//     "علاج طبيعي",
//     "طب أسنان",
//   ];

//   const timeSlots = [
//     "09:00 صباحاً",
//     "10:00 صباحاً",
//     "11:00 صباحاً",
//     "12:00 ظهراً",
//     "02:00 مساءً",
//     "03:00 مساءً",
//     "04:00 مساءً",
//     "05:00 مساءً",
//   ];

//   const onSubmit = async (data: AppointmentFormData) => {
//     try {
//       await dispatch(bookAppointment(data)).unwrap();
//       setIsSuccess(true);
//       dispatch(
//         addNotification({
//           message: "تم حجز موعدك بنجاح! سنتواصل معك قريباً",
//           type: "success",
//         })
//       );

//       // Reset form after success
//       setTimeout(() => {
//         setIsSuccess(false);
//         setStep(1);
//         reset();
//       }, 3000);
//     } catch (error) {
//       dispatch(
//         addNotification({
//           message: "حدث خطأ في حجز الموعد. يرجى المحاولة مرة أخرى",
//           type: "error",
//         })
//       );
//     }
//   };

//   const nextStep = () => {
//     if (step < 3) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.5 },
//   };

//   if (isSuccess) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="text-center py-12">
//         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//           <CheckCircle className="w-10 h-10 text-green-600" />
//         </div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//           تم حجز موعدك بنجاح!
//         </h3>
//         <p className="text-gray-600 mb-6">
//           شكراً لك على ثقتك بنا. سنتواصل معك خلال 24 ساعة لتأكيد موعدك
//         </p>
//         <div className="bg-green-50 rounded-lg p-4 text-right">
//           <h4 className="font-semibold text-green-800 mb-2">تفاصيل الموعد:</h4>
//           <p className="text-green-700">الاسم: {watchedValues.name}</p>
//           <p className="text-green-700">الخدمة: {watchedValues.service}</p>
//           <p className="text-green-700">التاريخ: {watchedValues.date}</p>
//           <p className="text-green-700">الوقت: {watchedValues.time}</p>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white">
//       <CardHeader className="text-center pb-6">
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//           className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Calendar className="w-8 h-8 text-white" />
//         </motion.div>
//         <CardTitle className="text-2xl font-bold text-gray-900">
//           احجز موعدك الطبي
//         </CardTitle>
//         <p className="text-gray-600">
//           املأ البيانات التالية وسنتواصل معك لتأكيد الموعد
//         </p>

//         {/* Progress Bar */}
//         <div className="flex justify-center mt-6">
//           <div className="flex items-center space-x-4 space-x-reverse">
//             {[1, 2, 3].map((stepNumber) => (
//               <div key={stepNumber} className="flex items-center">
//                 <motion.div
//                   className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
//                     step >= stepNumber
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-200 text-gray-600"
//                   }`}
//                   animate={{
//                     scale: step === stepNumber ? 1.1 : 1,
//                     backgroundColor: step >= stepNumber ? "#2563eb" : "#e5e7eb",
//                   }}
//                   transition={{ duration: 0.3 }}>
//                   {stepNumber}
//                 </motion.div>
//                 {stepNumber < 3 && (
//                   <div
//                     className={`w-12 h-1 mx-2 ${
//                       step > stepNumber ? "bg-blue-600" : "bg-gray-200"
//                     }`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </CardHeader>

//       <CardContent className="p-8">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <AnimatePresence mode="wait">
//             {step === 1 && (
//               <motion.div
//                 key="step1"
//                 variants={fadeInUp}
//                 initial="initial"
//                 animate="animate"
//                 exit={{ opacity: 0, x: -50 }}
//                 className="space-y-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   المعلومات الشخصية
//                 </h3>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700 flex items-center">
//                     <User className="w-4 h-4 ml-2" />
//                     الاسم الكامل *
//                   </label>
//                   <Input
//                     {...register("name")}
//                     placeholder="أدخل اسمك الكامل"
//                     className="border-gray-200 focus:border-blue-500"
//                   />
//                   {errors.name && (
//                     <p className="text-red-500 text-sm">
//                       {errors.name.message}
//                     </p>
//                   )}
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700 flex items-center">
//                       <Mail className="w-4 h-4 ml-2" />
//                       البريد الإلكتروني *
//                     </label>
//                     <Input
//                       {...register("email")}
//                       type="email"
//                       placeholder="your@email.com"
//                       className="border-gray-200 focus:border-blue-500"
//                     />
//                     {errors.email && (
//                       <p className="text-red-500 text-sm">
//                         {errors.email.message}
//                       </p>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700 flex items-center">
//                       <Phone className="w-4 h-4 ml-2" />
//                       رقم الهاتف *
//                     </label>
//                     <Input
//                       {...register("phone")}
//                       type="tel"
//                       placeholder="+20 123 456 7890"
//                       className="border-gray-200 focus:border-blue-500"
//                     />
//                     {errors.phone && (
//                       <p className="text-red-500 text-sm">
//                         {errors.phone.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex justify-end">
//                   <Button
//                     type="button"
//                     onClick={nextStep}
//                     className="bg-blue-600 hover:bg-blue-700 px-8"
//                     disabled={
//                       !watchedValues.name ||
//                       !watchedValues.email ||
//                       !watchedValues.phone
//                     }>
//                     التالي
//                   </Button>
//                 </div>
//               </motion.div>
//             )}

//             {step === 2 && (
//               <motion.div
//                 key="step2"
//                 variants={fadeInUp}
//                 initial="initial"
//                 animate="animate"
//                 exit={{ opacity: 0, x: -50 }}
//                 className="space-y-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   تفاصيل الموعد
//                 </h3>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700 flex items-center">
//                     <Stethoscope className="w-4 h-4 ml-2" />
//                     نوع الخدمة المطلوبة *
//                   </label>
//                   <Select onValueChange={(value) => setValue("service", value)}>
//                     <SelectTrigger className="border-gray-200 focus:border-blue-500">
//                       <SelectValue placeholder="اختر نوع الخدمة" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {services.map((service) => (
//                         <SelectItem key={service} value={service}>
//                           {service}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   {errors.service && (
//                     <p className="text-red-500 text-sm">
//                       {errors.service.message}
//                     </p>
//                   )}
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700 flex items-center">
//                       <Calendar className="w-4 h-4 ml-2" />
//                       التاريخ المفضل *
//                     </label>
//                     <Input
//                       {...register("date")}
//                       type="date"
//                       min={new Date().toISOString().split("T")[0]}
//                       className="border-gray-200 focus:border-blue-500"
//                     />
//                     {errors.date && (
//                       <p className="text-red-500 text-sm">
//                         {errors.date.message}
//                       </p>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700 flex items-center">
//                       <Clock className="w-4 h-4 ml-2" />
//                       الوقت المفضل *
//                     </label>
//                     <Select onValueChange={(value) => setValue("time", value)}>
//                       <SelectTrigger className="border-gray-200 focus:border-blue-500">
//                         <SelectValue placeholder="اختر الوقت" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {timeSlots.map((time) => (
//                           <SelectItem key={time} value={time}>
//                             {time}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                     {errors.time && (
//                       <p className="text-red-500 text-sm">
//                         {errors.time.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex justify-between">
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={prevStep}
//                     className="px-8">
//                     السابق
//                   </Button>
//                   <Button
//                     type="button"
//                     onClick={nextStep}
//                     className="bg-blue-600 hover:bg-blue-700 px-8"
//                     disabled={
//                       !watchedValues.service ||
//                       !watchedValues.date ||
//                       !watchedValues.time
//                     }>
//                     التالي
//                   </Button>
//                 </div>
//               </motion.div>
//             )}

//             {step === 3 && (
//               <motion.div
//                 key="step3"
//                 variants={fadeInUp}
//                 initial="initial"
//                 animate="animate"
//                 exit={{ opacity: 0, x: -50 }}
//                 className="space-y-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   معلومات إضافية
//                 </h3>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700 flex items-center">
//                     <MessageCircle className="w-4 h-4 ml-2" />
//                     رسالة أو ملاحظات (اختياري)
//                   </label>
//                   <Textarea
//                     {...register("message")}
//                     placeholder="أخبرنا عن أي تفاصيل إضافية أو أعراض تود مناقشتها..."
//                     rows={4}
//                     className="border-gray-200 focus:border-blue-500 resize-none"
//                   />
//                 </div>

//                 {/* Summary */}
//                 <div className="bg-blue-50 rounded-lg p-6">
//                   <h4 className="font-semibold text-blue-900 mb-4">
//                     ملخص الموعد:
//                   </h4>
//                   <div className="space-y-2 text-blue-800">
//                     <p>
//                       <strong>الاسم:</strong> {watchedValues.name}
//                     </p>
//                     <p>
//                       <strong>البريد الإلكتروني:</strong> {watchedValues.email}
//                     </p>
//                     <p>
//                       <strong>الهاتف:</strong> {watchedValues.phone}
//                     </p>
//                     <p>
//                       <strong>الخدمة:</strong> {watchedValues.service}
//                     </p>
//                     <p>
//                       <strong>التاريخ:</strong> {watchedValues.date}
//                     </p>
//                     <p>
//                       <strong>الوقت:</strong> {watchedValues.time}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex justify-between">
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={prevStep}
//                     className="px-8">
//                     السابق
//                   </Button>
//                   <Button
//                     type="submit"
//                     disabled={loading}
//                     className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8">
//                     {loading ? (
//                       <div className="flex items-center">
//                         <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
//                         جاري الحجز...
//                       </div>
//                     ) : (
//                       "تأكيد الحجز"
//                     )}
//                   </Button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default AppointmentForm;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageCircle,
  Stethoscope,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { bookAppointment } from "@/lib/features/appointmentSlice";
import { addNotification } from "@/lib/features/uiSlice";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be more than 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service type"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const AppointmentForm = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.appointments);
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const watchedValues = watch();

  const services = [
    "General Medical Consultation",
    "Comprehensive Checkup",
    "Cardiology Consultation",
    "Orthopedic Consultation",
    "Dermatology Consultation",
    "Psychological Consultation",
    "Physical Therapy",
    "Dental Care",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      await dispatch(bookAppointment(data)).unwrap();
      setIsSuccess(true);
      dispatch(
        addNotification({
          message:
            "Your appointment has been booked successfully! We will contact you soon",
          type: "success",
        })
      );

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setStep(1);
        reset();
      }, 3000);
    } catch (error) {
      dispatch(
        addNotification({
          message:
            "An error occurred while booking the appointment. Please try again",
          type: "error",
        })
      );
    }
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Your Appointment Has Been Booked Successfully!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your trust. We will contact you within 24 hours to
          confirm your appointment
        </p>
        <div className="bg-green-50 rounded-lg p-4 text-left">
          {" "}
          {/* Changed text-right to text-left for English */}
          <h4 className="font-semibold text-green-800 mb-2">
            Appointment Details:
          </h4>
          <p className="text-green-700">Name: {watchedValues.name}</p>
          <p className="text-green-700">Service: {watchedValues.service}</p>
          <p className="text-green-700">Date: {watchedValues.date}</p>
          <p className="text-green-700">Time: {watchedValues.time}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white">
      <CardHeader className="text-center pb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-white" />
        </motion.div>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Book Your Medical Appointment
        </CardTitle>
        <p className="text-gray-600">
          Fill in the details below, and we will contact you to confirm the
          appointment
        </p>

        {/* Progress Bar */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center space-x-4">
            {" "}
            {/* Removed space-x-reverse for English */}
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <motion.div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= stepNumber
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                  animate={{
                    scale: step === stepNumber ? 1.1 : 1,
                    backgroundColor: step >= stepNumber ? "#2563eb" : "#e5e7eb",
                  }}
                  transition={{ duration: 0.3 }}>
                  {stepNumber}
                </motion.div>
                {stepNumber < 3 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      step > stepNumber ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Personal Information
                </h3>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <User className="w-4 h-4 mr-2" />{" "}
                    {/* Changed ml-2 to mr-2 for English */}
                    Full Name *
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="Enter your full name"
                    className="border-gray-200 focus:border-blue-500"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />{" "}
                      {/* Changed ml-2 to mr-2 for English */}
                      Email Address *
                    </label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="border-gray-200 focus:border-blue-500"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Phone className="w-4 h-4 mr-2" />{" "}
                      {/* Changed ml-2 to mr-2 for English */}
                      Phone Number *
                    </label>
                    <Input
                      {...register("phone")}
                      type="tel"
                      placeholder="+20 123 456 7890"
                      className="border-gray-200 focus:border-blue-500"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700 px-8"
                    disabled={
                      !watchedValues.name ||
                      !watchedValues.email ||
                      !watchedValues.phone
                    }>
                    Next
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Appointment Details
                </h3>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Stethoscope className="w-4 h-4 mr-2" />{" "}
                    {/* Changed ml-2 to mr-2 for English */}
                    Requested Service Type *
                  </label>
                  <Select onValueChange={(value) => setValue("service", value)}>
                    <SelectTrigger className="border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-red-500 text-sm">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />{" "}
                      {/* Changed ml-2 to mr-2 for English */}
                      Preferred Date *
                    </label>
                    <Input
                      {...register("date")}
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="border-gray-200 focus:border-blue-500"
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm">
                        {errors.date.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />{" "}
                      {/* Changed ml-2 to mr-2 for English */}
                      Preferred Time *
                    </label>
                    <Select onValueChange={(value) => setValue("time", value)}>
                      <SelectTrigger className="border-gray-200 focus:border-blue-500">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.time && (
                      <p className="text-red-500 text-sm">
                        {errors.time.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="px-8">
                    Previous
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700 px-8"
                    disabled={
                      !watchedValues.service ||
                      !watchedValues.date ||
                      !watchedValues.time
                    }>
                    Next
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Additional Information
                </h3>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />{" "}
                    {/* Changed ml-2 to mr-2 for English */}
                    Message or Notes (Optional)
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder="Tell us about any additional details or symptoms you wish to discuss..."
                    rows={4}
                    className="border-gray-200 focus:border-blue-500 resize-none"
                  />
                </div>

                {/* Summary */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-4">
                    Appointment Summary:
                  </h4>
                  <div className="space-y-2 text-blue-800">
                    <p>
                      <strong>Name:</strong> {watchedValues.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {watchedValues.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {watchedValues.phone}
                    </p>
                    <p>
                      <strong>Service:</strong> {watchedValues.service}
                    </p>
                    <p>
                      <strong>Date:</strong> {watchedValues.date}
                    </p>
                    <p>
                      <strong>Time:</strong> {watchedValues.time}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="px-8">
                    Previous
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8">
                    {loading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>{" "}
                        {/* Changed ml-2 to mr-2 for English */}
                        Booking...
                      </div>
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </CardContent>
    </Card>
  );
};

export default AppointmentForm;
