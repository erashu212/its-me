import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';

const Hero: React.FC = () => {
  const { name, titles, location, phone, email, resumeUrl, socials, summary, image } = profile;

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-950 dark:to-slate-900">
      {/* Enhanced background elements with more vibrant colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-300/40 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-300/40 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '4s' }}></div>
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
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl glow-blue relative animate-float p-1">
              <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                {image ? (
                  <img 
                    src={image} 
                    alt={name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-3xl sm:text-4xl font-bold text-gradient">
                    {name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="mb-8 px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-gray-900 dark:text-white tracking-tight">
              {name}
            </h1>
            {titles[0] && (
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gradient">
                {titles[0]}
              </h2>
            )}
            {titles[1] && (
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">{titles[1]}</p>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mb-8 px-4">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
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

          {/* Professional Summary & Quick Stats - Two Column on Large Screens */}
          <motion.div variants={itemVariants} className="mb-10 px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
              {/* Summary */}
              <div className="card glow-blue">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {summary}
                </p>
              </div>
              
              {/* Quick Stats Card */}
              {profile.metrics && (
                <div className="card bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 border-purple-200 dark:border-purple-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    {profile.metrics.yearsExperience && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Experience</span>
                        <span className="text-2xl font-bold text-purple-700 dark:text-purple-400" style={{ fontFeatureSettings: '"tnum"' }}>
                          {profile.metrics.yearsExperience}+ years
                        </span>
                      </div>
                    )}
                    {profile.metrics.usersImpacted && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Users Impacted</span>
                        <span className="text-2xl font-bold text-indigo-700 dark:text-indigo-400" style={{ fontFeatureSettings: '"tnum"' }}>
                          {profile.metrics.usersImpacted}
                        </span>
                      </div>
                    )}
                    {profile.metrics.avgPerformanceGain && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Avg Performance Gain</span>
                        <span className="text-2xl font-bold text-blue-700 dark:text-blue-400" style={{ fontFeatureSettings: '"tnum"' }}>
                          {profile.metrics.avgPerformanceGain}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="mb-12 px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`mailto:${email}`}
                className="btn-primary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </motion.a>
              {resumeUrl && resumeUrl !== 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID' && (
                <motion.a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  View Resume
                </motion.a>
              )}
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
                  className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 glow-blue border border-gray-100 dark:border-gray-700"
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
                  className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 glow-indigo border border-gray-100 dark:border-gray-700"
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
                  className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 border border-gray-100 dark:border-gray-700"
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
