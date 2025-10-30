import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Mail, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

const FeaturedAchievement: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  return (
    <section className="py-4 sm:py-6 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950/30 dark:via-blue-950/30 dark:to-indigo-950/30">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card bg-gradient-to-br from-white/80 to-purple-50/80 dark:from-gray-800/80 dark:to-purple-900/20 border border-purple-200/50 dark:border-purple-700/30 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Trophy Icon */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  Featured Achievement
                </h2>

                {/* Achievement Description */}
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Reduced OSWorld++ evaluation costs by{' '}
                  <span className="font-bold text-green-600 dark:text-green-400">67%</span>{' '}
                  through intelligent Pioneer/Follower caching architecture — saving{' '}
                  <span className="font-bold text-blue-600 dark:text-blue-400">$16,757</span>{' '}
                  per full run while maintaining{' '}
                  <span className="font-bold text-purple-600 dark:text-purple-400">100% success rate</span>.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={`mailto:${profile.email}?subject=Hello from Portfolio Visitor&body=Hi Ashutosh,%0A%0AI came across your portfolio and would like to connect.%0A%0ABest regards`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      // Fallback for systems without default mail client
                      const mailtoUrl = `mailto:${profile.email}?subject=Hello from Portfolio Visitor&body=Hi Ashutosh,%0A%0AI came across your portfolio and would like to connect.%0A%0ABest regards`;
                      window.location.href = mailtoUrl;
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </motion.a>
                  
                  {profile.socials.linkedin && (
                    <motion.a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg border border-gray-200 dark:border-gray-600 transition-all duration-200 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedAchievement;
