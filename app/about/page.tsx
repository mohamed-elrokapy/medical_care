"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Award,
  Target,
  Clock,
  Shield,
  Stethoscope,
  Activity,
  Star,
  CheckCircle,
  Calendar,
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

export default function About() {
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
                <Heart className="w-4 h-4 ml-2 fill-current" />
                who we are
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              we{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                medical care center
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A leading medical center dedicated to providing the highest
              quality healthcare services with the latest technologies and the
              most skilled doctors. We believe that health is a right for
              everyone, and we strive to make exceptional medical care
              accessible to all.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center space-x-8 space-x-reverse pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">years of experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5000+</div>
                <div className="text-sm text-gray-600">happy patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">Specialist Doctor</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Specialized medical team"
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
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
                  our story
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  A Journey from Passion to Excellence
                </h2>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 leading-relaxed">
                We began our journey in 2009 with a clear vision: to provide
                exceptional medical care that combines scientific expertise,
                modern technology, and human compassion. Since then, we have
                grown to become one of the leading medical centers in the
                region.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 leading-relaxed">
                We take pride in our specialized team of doctors, nurses, and
                technicians who work with dedication to ensure that every
                patient receives the best possible care. We do not only treat
                illnesses, but care for the person as a whole.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    25+
                  </div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
              Our Values
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values are the guiding principles that guide us in everything
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}>
            {[
              {
                icon: Heart,
                title: "Compassion and Humanity",
                description:
                  "We treat every patient with love, compassion, and personal care",
              },
              {
                icon: Shield,
                title: "Quality and Safety",
                description:
                  "We are committed to the highest standards of quality and safety in all our services",
              },
              {
                icon: Target,
                title: "Excellence and Innovation",
                description:
                  "We constantly strive for development and innovation in the field of medicine",
              },
              {
                icon: Users,
                title: "Teamwork",
                description:
                  "We believe in the strength of a unified, integrated, and collaborative team",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
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
              Our outstanding medical team
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take pride in our team of highly skilled doctors and
              specialists across various medical fields.{" "}
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
                name: "Dr. Ahmed Mohamed",
                specialty: "Consultant of Cardiology and Vascular Diseases",
                experience: "15 years of experience",
                image:
                  "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
                qualifications: [
                  "PhD in Cardiology",
                  "American Fellowship",
                  "Member of the European Society",
                ],
              },
              {
                name: "Dr. Fatima Ali",
                specialty: "Consultant of Internal Medicine",
                experience: "12 years of experience",
                image:
                  "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
                qualifications: [
                  "Master’s in Internal Medicine",
                  "Diploma in Endocrinology",
                  "International Experience",
                ],
              },
              {
                name: "Dr. Mohamed Hassan",
                specialty: "Consultant of Orthopedic Surgery",
                experience: "18 years of experience",
                image:
                  "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400",
                qualifications: [
                  "PhD in Orthopedic Surgery",
                  "German Fellowship",
                  "Expert in Arthroscopy",
                ],
              },
            ].map((doctor, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">
                        <Star className="w-3 h-3 ml-1 fill-current" />
                        Excellent{" "}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {doctor.specialty}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {doctor.experience}
                    </p>
                    <div className="space-y-2">
                      {doctor.qualifications.map((qual, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                          {qual}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Achievements Section */}
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
              Our Achievements & Numbers
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Numbers that reflect our excellence and the trust patients place
              in us{" "}
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
                icon: Users,
                number: "5000+",
                label: "Satisfied Patients",
                description: "We have served over 5000 patients",
              },
              {
                icon: Stethoscope,
                number: "50+",
                label: "Specialized Doctors",
                description: "A team of highly skilled doctors",
              },
              {
                icon: Activity,
                number: "15000+",
                label: "Successful Surgeries",
                description: "98% success rate",
              },
              {
                icon: Clock,
                number: "24/7",
                label: "Available Service",
                description: "Round-the-clock care",
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
                ✨ Join our family… where medical care means genuine care.{" "}
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Book your appointment now and experience the difference in
                exceptional medical care.{" "}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("appointment-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                <Calendar className="w-5 h-5 ml-2" />
                Book your free appointment.{" "}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
