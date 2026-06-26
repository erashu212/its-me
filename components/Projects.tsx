'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, TrendingUp, Zap, Database, Cloud, Brain, Code, CheckCircle, Settings, Check } from 'lucide-react';
import { projects as projectsData } from '@/data/profile';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projects = projectsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-success-100 text-success-700 border-success-300 font-bold shadow-md';
      case 'In Development': return 'bg-primary-100 text-primary-700 border-primary-300 font-bold shadow-md';
      case 'Completed': return 'bg-gray-100 text-gray-700 border-gray-300 font-bold shadow-sm';
      default: return 'bg-gray-100 text-gray-600 border-gray-200 font-bold shadow-sm';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Production': return CheckCircle;
      case 'In Development': return Settings;
      case 'Completed': return Check;
      default: return Check;
    }
  };

  // Function to determine metric color based on key name
  const getMetricColor = (key: string) => {
    const lowerKey = key.toLowerCase();
    // Performance/speed metrics → Emerald
    if (lowerKey.includes('runtime') || lowerKey.includes('performance') || lowerKey.includes('efficiency') || lowerKey.includes('speed') || lowerKey.includes('deployment')) {
      return 'from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-700 metric-card-emerald';
    }
    // Scale/concurrency metrics → Sky
    if (lowerKey.includes('concurrency') || lowerKey.includes('users') || lowerKey.includes('scale') || lowerKey.includes('throughput') || lowerKey.includes('transactions')) {
      return 'from-sky-50 to-sky-100 border-sky-200 text-sky-700 metric-card-sky';
    }
    // Latency/response metrics → Teal
    if (lowerKey.includes('latency') || lowerKey.includes('response')) {
      return 'from-teal-50 to-teal-100 border-teal-200 text-teal-700 metric-card-teal';
    }
    // Technical/cache metrics → Violet
    if (lowerKey.includes('cache') || lowerKey.includes('accuracy') || lowerKey.includes('reliability') || lowerKey.includes('uptime')) {
      return 'from-violet-50 to-violet-100 border-violet-200 text-violet-700 metric-card-violet';
    }
    // Default → Primary blue
    return 'from-primary-50 to-primary-100 border-primary-200 text-primary-700 metric-card-primary';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Founder Project': return Zap;
      case 'Enterprise Platform': return Database;
      case 'AI/ML Platform': return Brain;
      case 'AI/AGI Platform': return Zap;
      case 'Data Platform': return Cloud;
      case 'Enterprise Software': return Code;
      default: return Code;
    }
  };

  const getCategoryAccent = (category: string) => {
    switch (category) {
      case 'Founder Project': return 'from-amber-500 to-orange-500';
      case 'AI/AGI Platform': return 'from-purple-500 to-indigo-500';
      case 'AI/ML Platform': return 'from-pink-500 to-purple-500';
      case 'Enterprise Platform': return 'from-blue-500 to-cyan-500';
      case 'Data Platform': return 'from-teal-500 to-emerald-500';
      case 'Enterprise Software': return 'from-gray-500 to-slate-500';
      default: return 'from-blue-500 to-indigo-500';
    }
  };

  // Summary metrics sourced from real data (no placeholders)
  // const companies = Array.from(new Set(projects.map((p) => p.company)));
  // const productionCount = projects.filter((p) => p.status === 'Production').length;

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white" style={{ letterSpacing: '-0.02em' }}>
              Key Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Detailed showcase of major projects and achievements across my career journey
            </p>
          </motion.div>

          {/* Project Navigation */}
          <motion.div variants={itemVariants} className="mb-12 relative">
            {/* Desktop: Wrapped layout */}
            <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    activeProject === index
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 shadow-soft border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold line-clamp-1">{project.title.split(' - ')[0]}</div>
                    <div className="text-xs opacity-75 line-clamp-1">{project.company}</div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Mobile: Horizontal scroll with snap */}
            <div className="sm:hidden relative">
              {/* Gradient fade indicators */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
              
              <div className="flex gap-2 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {projects.map((project, index) => (
                  <motion.button
                    key={project.id}
                    onClick={() => setActiveProject(index)}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-shrink-0 snap-center px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                      activeProject === index
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-soft'
                    }`}
                  >
                    <div className="text-center min-w-[120px]">
                      <div className="font-semibold line-clamp-1">{project.title.split(' - ')[0]}</div>
                      <div className="text-xs opacity-75 line-clamp-1">{project.company}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Active Project Display */}
          <motion.div
            key={activeProject}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="card mx-4 relative overflow-hidden"
          >
            {/* Category Accent Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getCategoryAccent(projects[activeProject].category)}`} />
            
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Project Info */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                      {React.createElement(getCategoryIcon(projects[activeProject].category), {
                        className: "w-5 h-5 sm:w-6 sm:h-6 text-primary-500"
                      })}
                      <span className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full text-xs border ${getStatusColor(projects[activeProject].status)} ${projects[activeProject].status === 'Production' ? 'animate-pulse-glow' : ''}`}>
                        {React.createElement(getStatusIcon(projects[activeProject].status), {
                          className: "w-3 h-3 sm:w-3.5 sm:h-3.5"
                        })}
                        {projects[activeProject].status}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white" style={{ letterSpacing: '-0.01em', fontWeight: 700 }}>
                      {projects[activeProject].title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{projects[activeProject].period}</span>
                      </div>
                      <span className="text-primary-600 font-medium">{projects[activeProject].role}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  {projects[activeProject].longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-base sm:text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {projects[activeProject].technologies.map((tech, index) => {
                      const techLower = tech.toLowerCase();
                      let techColor = 'bg-primary-50 text-primary-700 border-primary-200';
                      
                      if (techLower.includes('react') || techLower.includes('material ui') || techLower.includes('typescript') || techLower.includes('javascript') || techLower.includes('tanstack')) {
                        techColor = 'bg-blue-50 text-blue-700 border-blue-200';
                      }
                      else if (techLower.includes('fastapi') || techLower.includes('python') || techLower.includes('node') || techLower.includes('api')) {
                        techColor = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                      }
                      else if (techLower.includes('cloud') || techLower.includes('gcp') || techLower.includes('aws') || techLower.includes('run') || techLower.includes('build') || techLower.includes('workflow') || techLower.includes('kubernetes') || techLower.includes('docker') || techLower.includes('terraform')) {
                        techColor = 'bg-sky-50 text-sky-700 border-sky-200';
                      }
                      else if (techLower.includes('sql') || techLower.includes('firestore') || techLower.includes('redis') || techLower.includes('bigquery') || techLower.includes('gcs') || techLower.includes('database') || techLower.includes('s3') || techLower.includes('redshift')) {
                        techColor = 'bg-violet-50 text-violet-700 border-violet-200';
                      }
                      else if (techLower.includes('pub/sub') || techLower.includes('kafka') || techLower.includes('kinesis')) {
                        techColor = 'bg-amber-50 text-amber-700 border-amber-200';
                      }
                      else if (techLower.includes('auth') || techLower.includes('iam') || techLower.includes('armor') || techLower.includes('security')) {
                        techColor = 'bg-rose-50 text-rose-700 border-rose-200';
                      }
                      else if (techLower.includes('llm') || techLower.includes('ai') || techLower.includes('ml') || techLower.includes('agi') || techLower.includes('vector')) {
                        techColor = 'bg-purple-50 text-purple-700 border-purple-200';
                      }
                      
                      return (
                        <span
                          key={index}
                          className={`px-2 sm:px-3 py-1 text-xs rounded-full border hover:shadow-sm transition-all duration-200 ${techColor}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Links */}
                {projects[activeProject].links.length > 0 && (
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {projects[activeProject].links.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-all duration-200 border border-primary-200 text-xs sm:text-sm"
                      >
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        <span className="line-clamp-1">{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>

              {/* Achievements & Impact */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-900 dark:text-white">Key Achievements</h4>
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {projects[activeProject].achievements.map((achievement, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <TrendingUp className="w-4 h-4 text-primary-500 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Impact Metrics */}
                <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-900 dark:text-white">Impact Metrics</h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(projects[activeProject].impact).map(([key, value], index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`text-center p-3 sm:p-4 bg-gradient-to-br rounded-lg border hover:shadow-md transition-all duration-200 ${getMetricColor(key)}`}
                    >
                      <div className="text-xl sm:text-2xl font-bold mb-1 dark:opacity-90" style={{ fontFeatureSettings: '"tnum"' }}>{value}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 capitalize leading-tight font-medium">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
