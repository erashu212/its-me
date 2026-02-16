'use client';

import { motion } from 'framer-motion';
import { Award, Users, Code, Zap, Target } from 'lucide-react';
import { profile } from '@/data/profile';

const About = () => {
  const achievements = [
    { number: '2', label: 'Products Shipped', icon: Zap },
    { number: '44', label: 'NPM Releases', icon: Code },
    { number: '19', label: 'Quality Gates Built', icon: Target },
    { number: '13+', label: 'Years Engineering', icon: Award },
  ];

  const highlights = [
    {
      icon: Zap,
      title: 'Founder & Builder',
      description:
        'Built two products from zero to production: Rigour (open-source quality gates for AI code, 44 releases on NPM) and Rigovo (AI-powered technical hiring with voice interviews and 15-signal verification).',
    },
    {
      icon: Code,
      title: 'Developer Tooling & AI Agents',
      description:
        'Deep expertise in AST analysis, MCP protocol integration, Fix Packet schemas, multi-agent governance, and building tools that enforce engineering standards deterministically.',
    },
    {
      icon: Users,
      title: 'Engineering Leadership',
      description:
        'Led cross-functional teams at Turing and ICE Mortgage Technology. Mentored 12+ engineers, delivered 30+ projects, and drove cloud migrations improving scalability by 48%.',
    },
    {
      icon: Target,
      title: 'Full-Stack Production Systems',
      description:
        'TypeScript, Python, Node.js, React, GCP, AWS. Comfortable across the entire stack from AST parsers to CI/CD pipelines to voice AI systems.',
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
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technical founder who builds production systems from scratch &mdash; then ships them
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
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{achievement.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="mb-16 px-4">
            <div className="card">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient">Professional Summary</h3>
              <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-3 sm:space-y-4">
                <p>{profile.summary}</p>
                <p>
                  Most recently built{' '}
                  <strong className="text-blue-600 dark:text-blue-400">Rigour</strong> &mdash; an open-source quality gate system
                  with 19 deterministic gates, AST-based complexity analysis, security vulnerability detection,
                  and an MCP server for{' '}
                  <strong className="text-indigo-600 dark:text-indigo-400">Claude Desktop, Cursor, and VS Code</strong>.
                  Also created <strong className="text-purple-600 dark:text-purple-400">Rigovo</strong>, an AI interviewer
                  with voice interaction and real-time 15-signal verification.
                </p>
                <p>
                  Before founding, led engineering at Turing (AI/AGI platforms, distributed agent systems)
                  and ICE Mortgage Technology (cloud migration, CI/CD, analytics). 13+ years across
                  TypeScript, Python, GCP, AWS, and distributed systems.
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
                      <div className="p-2 sm:p-3 bg-primary-50 dark:bg-primary-900/30 rounded-xl border border-primary-100 dark:border-primary-700 flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                          {highlight.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{highlight.description}</p>
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
