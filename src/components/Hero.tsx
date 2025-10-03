import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';

const Hero: React.FC = () => {
  const { name, titles, location, phone, email, resumeUrl, socials, summary } = profile;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Subtle background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-purple-100/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl glow-blue relative animate-float">
              <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-gradient">
                  {name
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="mb-8 px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-gray-900 tracking-tight">
              {name}
            </h1>
            {titles[0] && (
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gradient">
                {titles[0]}
              </h2>
            )}
            {titles[1] && (
              <p className="text-base md:text-lg text-gray-600">{titles[1]}</p>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mb-8 px-4">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-700 text-sm sm:text-base">
              <div className="flex items-center gap-2 glass-card px-3 sm:px-4 py-2 sm:py-3 rounded-xl">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium">{location}</span>
              </div>
              <a
                href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-2 glass-card px-3 sm:px-4 py-2 sm:py-3 rounded-xl hover:shadow-xl transition-shadow"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 flex-shrink-0" />
                <span className="font-medium">{phone}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 glass-card px-3 sm:px-4 py-2 sm:py-3 rounded-xl hover:shadow-xl transition-shadow break-all"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                <span className="font-medium">{email}</span>
              </a>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="mb-10 px-4">
            <div className="card max-w-4xl mx-auto glow-blue">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {summary}
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="mb-12 px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {resumeUrl && (
                <motion.a
                  href={resumeUrl}
                  download="Ashutosh_Singh_Resume.pdf"
                  className="btn-primary inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </motion.a>
              )}
              <motion.a
                href={`mailto:${email}`}
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <div className="flex justify-center gap-5">
              {socials.github && (
                <motion.a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 glow-blue border border-gray-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
              )}
              {socials.linkedin && (
                <motion.a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-all duration-300 glow-indigo border border-gray-100"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              )}
              {socials.stackoverflow && (
                <motion.a
                  href={socials.stackoverflow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 transition-all duration-300 border border-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Stack Overflow"
                >
                  <ExternalLink className="w-6 h-6" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
