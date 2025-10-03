import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, TrendingUp, Zap, Database, Cloud, Brain, Code } from 'lucide-react';
import { projects as projectsData, profile } from '../data/profile';

const Projects: React.FC = () => {
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
      case 'Production': return 'bg-success-100 text-success-700 border-success-200 font-bold';
      case 'In Development': return 'bg-primary-100 text-primary-700 border-primary-200 font-bold';
      case 'Completed': return 'bg-gray-100 text-gray-700 border-gray-200 font-bold';
      default: return 'bg-gray-100 text-gray-600 border-gray-200 font-bold';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Enterprise Platform': return Database;
      case 'AI/ML Platform': return Brain;
      case 'AI/AGI Platform': return Zap;
      case 'Data Platform': return Cloud;
      case 'Enterprise Software': return Code;
      default: return Code;
    }
  };

  // Summary metrics sourced from real data (no placeholders)
  // Compute strictly from existing data to avoid any guesswork
  const companies = Array.from(new Set(projects.map((p) => p.company)));
  const productionCount = projects.filter((p) => p.status === 'Production').length;

  const summaryTiles = [
    { label: 'Major Projects', value: String(projects.length) },
    { label: 'Organizations', value: String(companies.length) },
    { label: 'Production Projects', value: String(productionCount) },
    ...(profile.metrics?.yearsExperience != null
      ? [{ label: 'Years Experience', value: String(profile.metrics.yearsExperience) }]
      : [])
  ] as { label: string; value: string }[];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Key Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed showcase of major projects and achievements across my career journey
            </p>
          </motion.div>

          {/* Project Navigation */}
          <motion.div variants={itemVariants} className="mb-12 px-4">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    activeProject === index
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-soft border border-gray-200'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold line-clamp-1">{project.title.split(' - ')[0]}</div>
                    <div className="text-xs opacity-75 line-clamp-1">{project.company}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Active Project Display */}
          <motion.div
            key={activeProject}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="card mx-4"
          >
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Project Info */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                      {React.createElement(getCategoryIcon(projects[activeProject].category), {
                        className: "w-5 h-5 sm:w-6 sm:h-6 text-primary-500"
                      })}
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs border ${getStatusColor(projects[activeProject].status)}`}>
                        {projects[activeProject].status}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                      {projects[activeProject].title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{projects[activeProject].period}</span>
                      </div>
                      <span className="text-primary-600 font-medium">{projects[activeProject].role}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {projects[activeProject].longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-base sm:text-lg font-semibold mb-3 text-gray-900">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full border border-primary-200 hover:bg-primary-100 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
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
                <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-900">Key Achievements</h4>
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {projects[activeProject].achievements.map((achievement, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <TrendingUp className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Impact Metrics */}
                <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-900">Impact Metrics</h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(projects[activeProject].impact).map(([key, value], index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-3 sm:p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border border-primary-200 hover:shadow-soft transition-all duration-200"
                    >
                      <div className="text-xl sm:text-2xl font-bold text-primary-700 mb-1">{value}</div>
                      <div className="text-xs text-gray-600 capitalize leading-tight">{key.replace(/([A-Z])/g, ' $1')}</div>
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
