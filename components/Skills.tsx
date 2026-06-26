'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Settings, Users, Brain, Award } from 'lucide-react';

type Skill = { name: string; level: number; color: string };
type CategoryKey = 'devtools' | 'programming' | 'cloud' | 'backend' | 'data' | 'ai' | 'leadership';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('backend');

  const skillCategories: Record<CategoryKey, { title: string; icon: typeof Code; skills: Skill[] }> = {
    devtools: {
      title: 'Developer Tooling',
      icon: Settings,
      skills: [
        { name: 'AST Analysis (web-tree-sitter)', level: 92, color: 'from-amber-400 to-orange-600' },
        { name: 'MCP Protocol (Model Context Protocol)', level: 90, color: 'from-purple-400 to-purple-600' },
        { name: 'CLI Development (Commander, Zod)', level: 88, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Monorepo Architecture (pnpm)', level: 85, color: 'from-emerald-400 to-emerald-600' },
        { name: 'Code Quality & Static Analysis', level: 92, color: 'from-blue-400 to-blue-600' },
        { name: 'NPM Package Publishing & CI/CD', level: 90, color: 'from-rose-400 to-rose-600' },
      ],
    },
    programming: {
      title: 'Programming',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, color: 'from-yellow-400 to-yellow-600' },
        { name: 'JavaScript / TypeScript', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'SQL', level: 85, color: 'from-emerald-400 to-emerald-600' },
        { name: 'Go (working familiarity)', level: 45, color: 'from-cyan-400 to-cyan-600' },
      ],
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'GCP', level: 90, color: 'from-sky-400 to-sky-600' },
        { name: 'AWS', level: 85, color: 'from-amber-400 to-amber-600' },
        { name: 'Kubernetes', level: 88, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Terraform', level: 88, color: 'from-purple-400 to-purple-600' },
        { name: 'Workload Identity Federation', level: 86, color: 'from-rose-400 to-rose-600' },
        { name: 'Cloud Monitoring & Trace', level: 85, color: 'from-emerald-400 to-emerald-600' },
        { name: 'Docker', level: 85, color: 'from-cyan-400 to-cyan-600' },
        { name: 'CI/CD', level: 90, color: 'from-emerald-400 to-emerald-600' },
      ],
    },
    backend: {
      title: 'Backend Engineering',
      icon: Settings,
      skills: [
        { name: 'Python Backend Services', level: 94, color: 'from-yellow-400 to-yellow-600' },
        { name: 'FastAPI', level: 92, color: 'from-teal-400 to-teal-600' },
        { name: 'Node.js / Fastify', level: 88, color: 'from-emerald-400 to-emerald-600' },
        { name: 'REST API Design', level: 91, color: 'from-blue-400 to-blue-600' },
        { name: 'Microservices & Service Boundaries', level: 90, color: 'from-purple-400 to-purple-600' },
        { name: 'Event-Driven Architecture', level: 88, color: 'from-pink-400 to-pink-600' },
        { name: 'Production Debugging & Observability', level: 88, color: 'from-sky-400 to-sky-600' },
        { name: 'Keycloak / OIDC', level: 86, color: 'from-amber-400 to-amber-600' },
      ],
    },
    data: {
      title: 'Data & Storage',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'Redis', level: 85, color: 'from-rose-400 to-rose-600' },
        { name: 'Cloud SQL', level: 86, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Prisma', level: 84, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Pub/Sub', level: 88, color: 'from-amber-400 to-amber-600' },
        { name: 'Firestore', level: 80, color: 'from-amber-400 to-amber-600' },
      ],
    },
    ai: {
      title: 'AI/ML',
      icon: Brain,
      skills: [
        { name: 'Large Language Models (LLM)', level: 90, color: 'from-purple-400 to-purple-600' },
        { name: 'Artificial General Intelligence (AGI)', level: 85, color: 'from-pink-400 to-pink-600' },
        { name: 'Retrieval-Augmented Generation (RAG)', level: 88, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Model Validation & Benchmarking', level: 85, color: 'from-emerald-400 to-emerald-600' },
        { name: 'MLOps', level: 82, color: 'from-blue-400 to-blue-600' },
      ],
    },
    leadership: {
      title: 'Leadership & Management',
      icon: Users,
      skills: [
        { name: 'Team Leadership', level: 95, color: 'from-amber-400 to-amber-600' },
        { name: 'Project Management', level: 90, color: 'from-emerald-400 to-emerald-600' },
        { name: 'Mentoring', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'Agile / Scrum', level: 85, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Cross‑functional Collaboration', level: 92, color: 'from-pink-400 to-pink-600' },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive technical skills across the full software development lifecycle
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(skillCategories).map(([key, category]) => {
                const IconComponent = category.icon;
                const k = key as CategoryKey;
                const active = activeCategory === k;
                return (
                  <button
                    key={k}
                    onClick={() => setActiveCategory(k)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-700 shadow-soft'
                    }`}
                    aria-pressed={active}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{category.title}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="card"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory].skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gradient">Certifications</h3>
            <div className="flex justify-center">
              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-xl border border-amber-100 dark:border-amber-700">
                    <Award className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                      AWS Certified Solutions Architect — Associate
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">Amazon Web Services</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Technologies */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gradient">Key Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'TypeScript',
                'Python',
                'Go',
                'Backend Engineering',
                'Distributed Systems',
                'AST Analysis',
                'MCP Protocol',
                'web-tree-sitter',
                'Zod',
                'Node.js',
                'Fastify',
                'React',
                'GCP',
                'Terraform',
                'Workload Identity Federation',
                'Keycloak',
                'Cloud Monitoring',
                'AWS',
                'pnpm Monorepo',
                'GitHub Actions',
                'Vitest',
                'FastAPI',
                'PostgreSQL',
                'Redis',
                'Pub/Sub',
                'Cloud SQL',
                'Voice AI',
                'LLM',
                'Docker',
                'Kubernetes',
                'CI/CD',
                'Open Source',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-soft hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 cursor-default"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.04 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
