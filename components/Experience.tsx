'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react';

type ExperienceItem = {
  company: string;
  position: string;
  location: string;
  period: string;
  type: 'current' | 'recent' | 'previous' | 'early';
  achievements: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: 'Turing',
    position: 'Senior Staff Engineer (Platform Engineering)',
    location: 'Remote, India',
    period: 'Jul 2025 - Present',
    type: 'current',
    achievements: [
      'Lead platform architecture for CTP, identity, AGI-OS, Prism, and canvas infrastructure across dev, preprod, and prod GCP projects',
      'Built Terraform foundation with GKE, Cloud SQL, Pub/Sub, Secret Manager, Firebase, Discovery Engine, labels, state buckets, and least-privilege WIF',
      'Migrated identity and CTP through branch-based deployments, Keycloak realm automation, GitHub Actions promotion, and zero-downtime cutover planning',
      'Designed SRE-grade Google Cloud Monitoring dashboards for p95 latency, RPS, 5xx, workloads, DLQs, event drainer, media/admin/annotator, and task usage',
      'Build and debug backend services across Python, TypeScript/Fastify, PostgreSQL, Redis, Pub/Sub, task queues, idempotent consumers, and external vendor integrations',
      'Own technical execution across AGI/LLM systems including task operations, context indexing, Prism QC integration, and AGI-OS event workflows',
    ],
    technologies: [
      'GCP',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'Keycloak',
      'PostgreSQL',
      'Pub/Sub',
      'Cloud Monitoring',
      'TypeScript',
      'Python',
      'Go',
      'Redis',
      'AI/ML',
    ],
  },
  {
    company: 'ICE Mortgage Technology',
    position: 'Senior Software Engineer / Lead',
    location: 'Atlanta, USA and Pune, India',
    period: 'Aug 2024 - Jun 2025',
    type: 'recent',
    achievements: [
      'Reduced deployment cycles 85% via CI/CD automation',
      'Increased messaging throughput 65%',
      'Built user-behavior analytics improving data accuracy 35%',
      'Led cloud migration improving scalability 48%',
      'Mentored a 12-engineer team',
    ],
    technologies: ['AWS', 'CI/CD', 'Analytics', 'Cloud Migration', 'Team Leadership'],
  },
  {
    company: 'ICE Mortgage Technology',
    position: 'Lead Software Engineer',
    location: 'Pune, India',
    period: 'Feb 2024 - Aug 2024',
    type: 'recent',
    achievements: [
      'Delivered AI analytics and LLM tools',
      'Improved prediction accuracy and issue resolution 40%+',
      'Improved system efficiency 37% by removing bottlenecks and optimizing workflows',
    ],
    technologies: ['AI Analytics', 'LLM', 'System Optimization', 'Performance Tuning'],
  },
  {
    company: 'ICE Mortgage Technology',
    position: 'Staff Software Engineer',
    location: 'Pune, India',
    period: 'Sep 2020 - Feb 2024',
    type: 'previous',
    achievements: [
      'Delivered 30+ projects, improving team output 28%',
      'Built Micro UI Simulator cutting testing time 40%',
      'Maintained compliance documentation for 30+ projects',
    ],
    technologies: ['Microservices', 'UI Testing', 'Project Management', 'Compliance'],
  },
  {
    company: 'Xoriant Solutions Pvt. Ltd',
    position: 'Technical Lead',
    location: 'Pune, India',
    period: 'Oct 2017 - Sep 2020',
    type: 'previous',
    achievements: [
      'Built scalable AWS data pipelines improving processing efficiency 30%',
      'Coordinated multi-project delivery across 5+ teams to improve alignment and throughput',
    ],
    technologies: ['AWS', 'Data Pipelines', 'Multi-team Coordination', 'Technical Leadership'],
  },
  {
    company: 'Various Companies',
    position: 'Senior Software Engineer',
    location: 'Multiple Locations',
    period: '2012 - 2017',
    type: 'early',
    achievements: [
      'Senior Software Engineer at Globant, Tavisca Solutions, Aloha Technology',
      'Freelancer developing various software solutions',
      'Built foundation in software engineering and development practices',
    ],
    technologies: ['Software Development', 'Multiple Technologies', 'Freelancing'],
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

const typeStyles = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'current':
      return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'recent':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'previous':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'early':
      return 'bg-gray-100 text-gray-700 border-gray-200';
    default:
      return 'bg-blue-100 text-blue-700 border-blue-200';
  }
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-800">
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
              <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A journey of 13+ years in software engineering and team leadership
            </p>
          </motion.div>

          {/* Two-Column Experience Grid on Desktop, Single Column on Mobile */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                variants={itemVariants}
                className="relative"
              >
                {/* card */}
                  <div className="card h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Building className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                      <span
                        className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${typeStyles(
                          exp.type
                        )}`}
                      >
                        {exp.type === 'current'
                          ? 'Current'
                          : exp.type === 'recent'
                          ? 'Recent'
                          : exp.type === 'previous'
                          ? 'Previous'
                          : 'Early Career'}
                      </span>
                    </div>

                    <h4 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {exp.position}
                    </h4>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <ChevronRight className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>

                    {/* tech chips */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full border border-primary-200 dark:border-primary-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
