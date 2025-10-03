import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Code, Zap, Target, TrendingUp } from 'lucide-react';
import { profile } from '../data/profile';

const About: React.FC = () => {
  const achievements = [
    { number: '13+', label: 'Years Experience', icon: Award },
    { number: '30+', label: 'Projects Delivered', icon: Target },
    { number: '12+', label: 'Team Members Led', icon: Users },
    { number: '85%', label: 'Deployment Efficiency', icon: TrendingUp },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'AI/ML Expertise',
      description:
        'Deep expertise in Large Language Models (LLM), Artificial General Intelligence (AGI), and Retrieval-Augmented Generation (RAG) systems.',
    },
    {
      icon: Zap,
      title: 'Cloud Architecture',
      description:
        'Proven track record with microservices, MLOps, and cloud-native delivery on GCP and AWS platforms.',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description:
        'Successfully led cross-functional teams, mentored engineers, and delivered complex projects with improved performance and scalability.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description:
        'Consistently delivered quantifiable results: 85% faster deployments, 65% improved throughput, and 40% better system efficiency.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate engineering leader driving innovation in AI/ML and cloud technologies
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-16 px-4"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="card text-center p-4 sm:p-6 md:p-8"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 280 }}
                >
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-600 mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm">{achievement.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="mb-16 px-4">
            <div className="card">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient">Professional Summary</h3>
              <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
                <p>{profile.summary}</p>
                <p>
                  Deep expertise in{' '}
                  <strong className="text-blue-600">Large Language Models (LLM)</strong>,{' '}
                  Artificial General Intelligence (AGI), and Retrieval-Augmented Generation (RAG)
                  systems. Proven track record in microservices architecture, MLOps, and
                  cloud‑native delivery on <strong className="text-indigo-600">GCP</strong> and{' '}
                  <strong className="text-purple-600">AWS</strong>.
                </p>
                <p>
                  Strong background in leading cross‑functional teams, implementing CI/CD pipelines,
                  and delivering measurable improvements in performance, scalability, and cost
                  optimization. Passionate about mentoring engineers and driving technical
                  excellence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div variants={itemVariants} className="px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gradient">Key Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    className="card p-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 280 }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-primary-50 rounded-xl border border-primary-100 flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
                          {highlight.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
