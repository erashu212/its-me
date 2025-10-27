export type ProjectStatus = 'Production' | 'In Development' | 'Completed';

export type ProjectCategory =
  | 'AI/AGI Platform'
  | 'AI/ML Platform'
  | 'Enterprise Platform'
  | 'Data Platform'
  | 'Enterprise Software';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectImpact {
  [key: string]: string;
}

export interface Project {
  id: number;
  title: string;
  company: string;
  period: string;
  role: string;
  description: string;
  longDescription: string;
  technologies: string[];
  achievements: string[];
  impact: ProjectImpact;
  links: ProjectLink[];
  category: ProjectCategory;
  status: ProjectStatus;
}

export interface Profile {
  name: string;
  titles: string[];
  location: string;
  phone: string;
  email: string;
  image: string | null;
  resumeUrl: string | null;
  socials: {
    github: string | null;
    linkedin: string | null;
    stackoverflow: string | null;
  };
  summary: string;
  metrics?: {
    yearsExperience?: number;
    usersImpacted?: string;
    avgPerformanceGain?: string;
  };
}

export const profile: Profile = {
  name: 'Ashutosh Singh',
  titles: ['Senior Engineering Manager', 'Delivery'],
  location: 'Pune, India',
  phone: '+91-9503999217',
  email: 'ashu.singh212@gmail.com',
  image: 'https://media.licdn.com/dms/image/v2/D4D03AQHmXaLh_gO1Zg/profile-displayphoto-scale_200_200/B4DZoACqz.IgAY-/0/1760937292687?e=1762992000&v=beta&t=IJZwQweSPvdxtHxFcuTV5BVH3dfJA7ym0lOTqJxCTEg',
  // Replace this with your actual hosted resume PDF URL (e.g., Google Drive, Dropbox, or GitHub)
  resumeUrl: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
  socials: {
    github: 'https://github.com/erashu212',
    linkedin: 'https://www.linkedin.com/in/ashu212/',
    stackoverflow: 'https://stackoverflow.com/users/1033171/ashutosh-singh',
  },
  summary:
    'Engineering leader with 13+ years delivering AI/ML platforms and large-scale software. Deep expertise in microservices, MLOps, and cloud-native delivery on GCP and AWS.',
  metrics: {
    yearsExperience: 13,
    usersImpacted: '100K+',
    avgPerformanceGain: '75%'
  },
};

export const projects: Project[] = [
  {
    id: 0,
    title: 'OSWorld++ – Distributed AI Workspace with Multi-VM Automation',
    company: 'Turing',
    period: '2025',
    role: 'Engineering Manager & Platform Architect',
    description:
      'Engineered and extended OSWorld into a multi-VM, cloud-automated orchestration platform for autonomous agents across isolated virtual machines, enabling parallel AI task execution, context sharing, and self-healing automation pipelines.',
    longDescription:
      'OSWorld++ transforms the open-source AI workspace framework into a distributed, multi-agent operating fabric. The system deploys and manages autonomous agents across isolated compute nodes with automated provisioning, gRPC + Pub/Sub communication, and Redis-based coordination. Supports large-scale experiments, multi-agent workflows, and code-driven environment provisioning with comprehensive telemetry and observability through Prometheus/Grafana.',
    technologies: [
      'Python',
      'FastAPI',
      'TypeScript',
      'React',
      'Node.js',
      'Redis Streams',
      'Pub/Sub',
      'Cloud Run',
      'Compute Engine',
      'Firestore',
      'PostgreSQL',
      'Prometheus',
      'Grafana',
      'Docker',
      'gRPC',
    ],
    achievements: [
      'Built multi-VM orchestration layer with automated provisioning via declarative manifests and cloud APIs',
      'Designed distributed agent mesh with gRPC + Pub/Sub communication synchronized by Redis coordination service',
      'Implemented Pioneer/Follower caching architecture reducing LLM costs by 67% ($25K → $8.4K per evaluation)',
      'Achieved 87x cost variation between VMs through intelligent cache sharing (pioneers $2.60, followers $0.03)',
      'Built Redis-based single-flight locking preventing duplicate LLM calls across 200+ concurrent VMs',
      'Implemented context-aware task routing using metadata and semantic embeddings for specialized agent VMs',
      'Created parallel execution framework for concurrent multi-agent workflows with fault isolation',
      'Integrated Prometheus/Grafana telemetry capturing real-time health metrics and agent performance dashboards',
      'Scaled to 200+ concurrent VM-based agent sessions with <250ms inter-agent latency',
      'Reduced deployment time per environment from 3min → 45s via cached base images and parallel provisioning',
      'Implemented auto-recovery routines with 3-tier retry strategy achieving 99.9% uptime and 100% task success',
      'Optimized token consumption with trajectory limiting (max 3 steps context) reducing cost per call by 40%',
      'Deployed secure automation sandbox with VM isolation, firewalled subnets, and SSH-free deployment',
      'Extended modular plugin system to support remote execution endpoints and dynamic scaling adapters',
      'Enforced RBAC, API-key isolation, TLS 1.3 + mutual auth, with secrets in Vault/Cloud Secret Manager',
    ],
    impact: {
      concurrency: '200+ VM Sessions',
      latency: '<250ms',
      deployment: '3min → 45s',
      uptime: '99.9%',
      costSavings: '67% Cost Reduction',
    },
    links: [],
    category: 'AI/AGI Platform',
    status: 'Production',
  },
  {
    id: 1,
    title: 'CARE Platform – Cloud-Native RL Environment for Code Agents',
    company: 'Turing',
    period: '2025',
    role: 'Engineering Manager & Platform Architect',
    description:
      'Architected and led CARE, a Google Cloud–native, microservices platform for training and evaluating autonomous Code Agents through reinforcement learning, scaling to 1000+ concurrent RL episodes with deterministic reward feedback.',
    longDescription:
      'CARE (Cloud-native Agent Reinforcement Environment) is a production-grade platform that executes and verifies code edits in real repositories under realistic sandboxed conditions. The system features multi-tenant architecture with 3-level configuration hierarchy, Cloud-Run microservices communicating via REST + Pub/Sub, and sandboxed execution using Cloud Build and Cloud Run Jobs for secure, reproducible task runs.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TanStack Router',
      'Cloud Run',
      'Cloud Build',
      'Workflows',
      'Pub/Sub',
      'Firestore',
      'Cloud SQL (PostgreSQL)',
      'Redis (Memorystore)',
      'BigQuery',
      'GCS',
      'Firebase Auth',
      'Cloud IAM',
      'Cloud Armor',
    ],
    achievements: [
      'Designed multi-tenant architecture with 3-level config hierarchy (Team → Project → Task)',
      'Built Cloud-Run microservices with REST + Pub/Sub communication, each owning its own datastore',
      'Implemented sandboxed execution using Cloud Build and Cloud Run Jobs for secure task runs',
      'Created Factory & Strategy patterns for plug-and-play integration of agents (LLM, RL, heuristic)',
      'Reduced average episode runtime from 60s → <15s through dependency caching and parallel builds',
      'Achieved >80% cache hit rate and sustained 1000+ concurrent executions with horizontal scaling',
      'Built dual logging pipelines: realtime (<200ms) → Firestore and analytical (batch) → BigQuery',
      'Implemented automated verifiers and custom reward functions for deterministic feedback',
      'Designed scalable orchestration with Cloud Workflows and Redis-based semaphores for quota control',
      'Established full observability with Cloud Logging, Trace, and Monitoring',
      'Implemented RBAC via Firebase Auth + Cloud IAM with network protection using Cloud Armor and TLS 1.3',
    ],
    impact: {
      runtime: '60s → 15s',
      cacheHit: '>80%',
      concurrency: '1000+ Episodes',
      latency: '<200ms',
    },
    links: [],
    category: 'AI/AGI Platform',
    status: 'Production',
  },
  {
    id: 2,
    title: 'Atlas Auto-Rater - AI Evaluation Platform',
    company: 'Turing',
    period: '2025 - Present',
    role: 'Engineering Manager & Lead DevOps',
    description:
      'Built Atlas Auto-Rater, a platform that automatically evaluates structured reasoning tasks and code solutions generated by LLMs, making assessments more transparent, scalable, and reliable.',
    longDescription:
      'The rapid growth of Large Language Models (LLMs) has created a pressing need for systematic, large-scale evaluation. Traditional benchmarks focus on accuracy but fail to capture reasoning depth, language quality, and completeness. Atlas Auto-Rater was designed to fill this gap: a platform that automatically evaluates structured reasoning tasks and code solutions generated by LLMs.',
    technologies: [
      'React',
      'Material UI',
      'FastAPI',
      'Python',
      'Google Cloud',
      'Pub/Sub',
      'Firestore',
      'Vector Database',
      'WebSockets',
    ],
    achievements: [
      'Built multi-service architecture with React + Material UI dashboard and Google login',
      'Designed FastAPI services for ingestion, translation, reasoning analysis, and LLM interaction',
      'Implemented Google Pub/Sub orchestration with Firestore storage and vector database for taxonomy search',
      'Created structured benchmarking with four scoring pillars: Language Quality, Code Quality, Accuracy, Completeness',
      'Enabled real-time results via websockets with downloadable reports (PDF/Excel)',
      'Structured contractor team into three focused groups enabling rapid prototyping',
      'Delivered working demo in under two months with modular design for future scalability',
    ],
    impact: {
      scalability: 'Thousands of Evaluations',
      objectivity: 'Consistent Scoring',
      domains: 'Cross-Domain Use',
      delivery: 'Under 2 Months',
    },
    links: [],
    category: 'AI/AGI Platform',
    status: 'Production',
  },
  {
    id: 3,
    title: 'Atlas Platform - Reasoning & Benchmarking System',
    company: 'Turing',
    period: '2025 - Present',
    role: 'Engineering Manager & Lead DevOps',
    description:
      'Led development of Atlas Platform, an AI-driven framework for generating, analyzing, and benchmarking complex algorithmic reasoning tasks.',
    longDescription:
      'Atlas Platform is an AI-driven framework designed to generate, analyze, and benchmark complex algorithmic reasoning tasks. It blends research-oriented reasoning chains with production-grade infrastructure to push the boundaries of explainable AI and competitive programming automation. The platform integrates structured chain-of-thought generation, auto-evaluation, and multi-model support (GPT-5, Claude, LLaMA).',
    technologies: [
      'React',
      'Material UI',
      'FastAPI',
      'Python',
      'C++',
      'TypeScript',
      'Google Cloud',
      'Pub/Sub',
      'Firestore',
      'Docker',
      'Aasna Observability',
    ],
    achievements: [
      'Built Reasoning Generator with multi-chain, structured solutions and C++ implementations',
      'Designed Benchmarking & Auto Rater for automated evaluation of AI outputs',
      'Created Interactive Dashboard with React + FastAPI for real-time LLM streaming',
      'Implemented Multi-Model Integration supporting GPT-5, Claude, LLaMA with custom routing',
      'Developed Taxonomy Engine with vector-based similarity search for unique problem generation',
      'Established full observability via Aasna for pipelines and microservices',
      'Managed distributed contractor team across UI, backend, and Python engineering',
    ],
    impact: {
      delivery: 'Ahead of Schedule',
      models: '5+ LLM Providers',
      scalability: '100% Cloud Native',
      accuracy: '95% Evaluation',
    },
    links: [],
    category: 'AI/AGI Platform',
    status: 'In Development',
  },
  {
    id: 4,
    title: 'Rag Seed Project - Algorithmic Reasoning Platform',
    company: 'Turing',
    period: '2025',
    role: 'Engineering Manager & Lead DevOps',
    description:
      'Large-scale platform for algorithmic reasoning, benchmarking, and taxonomy generation designed to evaluate and refine LLM outputs across structured reasoning tasks.',
    longDescription:
      'Rag Seed is a comprehensive platform that integrates advanced orchestration, auto-rating, and chain-of-thought analysis pipelines with real-time UI dashboards. The system enables scalable evaluation of LLM reasoning capabilities through structured benchmarking and taxonomy-based task generation.',
    technologies: [
      'React',
      'Material UI',
      'FastAPI',
      'Python',
      'Firestore',
      'Google Pub/Sub',
      'Cloud Run',
      'WebSockets',
      'C++',
    ],
    achievements: [
      'Led design of distributed system with micro-UIs and microservices architecture',
      'Implemented APIs and pipelines with FastAPI, Python, Firestore, and Google Pub/Sub',
      'Built interactive dashboards with real-time LLM streaming and user analysis workflows',
      'Designed auto-rater module evaluating outputs across multiple quality dimensions',
      'Built taxonomy generator pipeline with vector search for duplicate task identification',
      'Owned deployment pipelines and Aasna-based observability for all teams',
      'Delivered working LLM benchmarking demo ahead of schedule for stakeholders',
    ],
    impact: {
      delivery: 'Ahead of Schedule',
      ingestion: 'Google Drive Integration',
      framework: 'Modular & Scalable',
      providers: 'Multi-LLM Support',
    },
    links: [],
    category: 'AI/AGI Platform',
    status: 'Production',
  },
  {
    id: 5,
    title: 'Atlas-Workflow - LLM Pipeline Orchestration',
    company: 'Turing',
    period: '2025 - Ongoing',
    role: 'Engineering Manager & Platform Lead',
    description:
      'Modular platform for designing, executing, and evaluating LLM-powered reasoning pipelines with custom orchestration and automated evaluation.',
    longDescription:
      'Atlas-Workflow is a comprehensive platform that makes reasoning pipelines with LLMs structured, measurable, and reliable. Each pipeline is a graph of microservices from taxonomy generation to validation to chain-of-thought expansion, enabling researchers to define workflows visually and analyze results in real time.',
    technologies: [
      'React',
      'FastAPI',
      'Python',
      'BigQuery',
      'Cloud Logging',
      'Pub/Sub',
      'Aasna',
      'Google Drive API',
      'Codeforces API',
    ],
    achievements: [
      'Built custom orchestrator managing multi-service pipelines without Google Workflows dependency',
      'Designed Auto Rater engine benchmarking LLM outputs across accuracy, reasoning, and completeness',
      'Developed Chain of Thought Service with iterative refinement and C++ implementations',
      'Integrated Aasna observability with Cloud Logging, BigQuery, and Pub/Sub analytics',
      'Created React dashboards for workflow design, task analysis, and human-in-the-loop review',
      'Implemented Google Drive/Sheets integration and Codeforces problem context',
      'Simplified management of complex reasoning pipelines at scale',
    ],
    impact: {
      transparency: '100% Observable',
      evaluation: 'Automated Scoring',
      integration: 'Multi-Platform',
      scalability: 'Enterprise Ready',
    },
    links: [],
    category: 'AI/AGI Platform',
    status: 'In Development',
  },
  {
    id: 6,
    title: 'ICE Mortgage Technology - Encompass Platform',
    company: 'ICE Mortgage Technology',
    period: '2020 - 2025',
    role: 'Senior Software Engineer / Lead / Staff Engineer',
    description:
      'Led development and optimization of the Encompass mortgage origination platform, serving thousands of lenders nationwide.',
    longDescription:
      "Encompass is ICE Mortgage Technology's flagship digital mortgage platform that streamlines the entire loan origination process. As a key technical leader, I drove significant improvements in performance, scalability, and user experience.",
    technologies: [
      'React',
      'Node.js',
      'AWS',
      'Microservices',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kubernetes',
    ],
    achievements: [
      'Reduced deployment cycles by 85% through CI/CD automation implementation',
      'Increased messaging throughput by 65% with optimized event-driven architecture',
      'Built comprehensive user-behavior analytics improving data accuracy by 35%',
      'Led cloud migration initiative improving system scalability by 48%',
      'Mentored a 12-engineer team across multiple product areas',
      'Delivered 30+ projects improving overall team output by 28%',
      'Built Micro UI Simulator reducing testing time by 40%',
    ],
    impact: {
      users: '10,000+',
      performance: '85%',
      scalability: '48%',
      efficiency: '40%',
    },
    links: [
      {
        label: 'Encompass Platform',
        url: 'https://mortgagetech.ice.com/products/encompass',
      },
    ],
    category: 'Enterprise Platform',
    status: 'Production',
  },
  {
    id: 7,
    title: 'AI/ML Analytics & LLM Tools',
    company: 'ICE Mortgage Technology',
    period: '2024 - 2025',
    role: 'Lead Software Engineer',
    description:
      'Developed cutting-edge AI analytics and Large Language Model tools for mortgage processing automation.',
    longDescription:
      'Built sophisticated AI-powered analytics platform leveraging Large Language Models to automate document processing, risk assessment, and decision-making in mortgage origination workflows.',
    technologies: [
      'Python',
      'TensorFlow',
      'LLM',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Docker',
    ],
    achievements: [
      'Improved prediction accuracy and issue resolution by 40%+',
      'Automated document processing reducing manual review time by 60%',
      'Implemented ML models for risk assessment with 92% accuracy',
      'Built real-time analytics dashboard for mortgage pipeline insights',
      'Developed LLM-powered chatbot for customer support automation',
    ],
    impact: {
      accuracy: '92%',
      automation: '60%',
      resolution: '40%',
      efficiency: '37%',
    },
    links: [],
    category: 'AI/ML Platform',
    status: 'Production',
  },
  {
    id: 8,
    title: 'AWS Data Pipeline Architecture',
    company: 'Xoriant Solutions',
    period: '2017 - 2020',
    role: 'Technical Lead',
    description:
      'Built scalable AWS data pipelines and coordinated multi-project delivery across teams.',
    longDescription:
      'Designed and implemented enterprise-grade data processing pipelines on AWS, handling massive volumes of data for analytics and business intelligence across multiple client projects.',
    technologies: [
      'AWS',
      'Python',
      'Apache Spark',
      'Redshift',
      'S3',
      'Lambda',
      'Kinesis',
      'Terraform',
    ],
    achievements: [
      'Built scalable AWS data pipelines improving processing efficiency by 30%',
      'Coordinated multi-project delivery across 5+ teams',
      'Implemented real-time data streaming with Kinesis',
      'Optimized data warehouse performance on Redshift',
      'Automated infrastructure deployment with Terraform',
      'Established data governance and quality frameworks',
    ],
    impact: {
      efficiency: '30%',
      teams: '5+',
      throughput: '200%',
      reliability: '99.9%',
    },
    links: [],
    category: 'Data Platform',
    status: 'Completed',
  },
  {
    id: 9,
    title: 'Enterprise Software Solutions',
    company: 'Multiple Companies',
    period: '2012 - 2017',
    role: 'Senior Software Engineer',
    description:
      'Developed various enterprise software solutions and freelance projects across multiple domains.',
    longDescription:
      'Built diverse software solutions ranging from e-commerce platforms to travel booking systems, gaining expertise across multiple technologies and business domains at Globant, Tavisca Solutions, and Aloha Technology.',
    technologies: [
      'Java',
      'C#',
      '.NET',
      'JavaScript',
      'SQL Server',
      'Oracle',
      'Spring',
      'Angular',
    ],
    achievements: [
      'Developed e-commerce platforms handling 100K+ transactions',
      'Built travel booking systems with real-time inventory',
      'Created enterprise CRM solutions for multiple clients',
      'Implemented payment gateway integrations',
      'Delivered mobile-responsive web applications',
      'Established coding standards and best practices',
    ],
    impact: {
      transactions: '100K+',
      clients: '20+',
      uptime: '99.5%',
      performance: '50%',
    },
    links: [],
    category: 'Enterprise Software',
    status: 'Completed',
  },
];
