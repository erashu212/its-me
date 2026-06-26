import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { profile, projects } from '@/data/profile';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

// Generate comprehensive metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://erashu212.vercel.app'),
  title: {
    default: `${profile.name} - Staff Backend & Platform Engineer | Python, GCP, Distributed Systems`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    'Ashutosh Singh',
    'Rigour',
    'Rigovo',
    'Rigour Labs',
    'Staff Backend Engineer',
    'Backend Staff Engineer',
    'Senior Backend Engineer',
    'Platform Engineer',
    'Python Backend Engineer',
    'Distributed Systems Engineer',
    'Go Backend',
    'Microservices Architecture',
    'REST API Design',
    'PostgreSQL',
    'Redis',
    'Event Driven Architecture',
    'CTP platform',
    'Central Task Platform',
    'GCP migration',
    'Terraform GCP',
    'Workload Identity Federation',
    'Keycloak',
    'Kubernetes platform engineering',
    'Cloud Monitoring',
    'Cloud Trace',
    'quality gates AI code',
    'AI code quality',
    'MCP server',
    'Model Context Protocol',
    'AST analysis',
    'Fix Packet',
    'AI interviewer',
    'technical hiring AI',
    'open source developer tools',
    'TypeScript',
    'Python',
    'web-tree-sitter',
    'Claude Desktop integration',
    'Cursor integration',
    'AI agent governance',
    'vibe coding',
    'full-stack engineer',
    'technical founder',
    'backend engineer',
    'staff engineer',
    'NPM package author',
    'LiveKit',
    'GCP',
    'AWS',
  ],
  authors: [{ name: profile.name, url: profile.socials.linkedin || undefined }],
  creator: profile.name,
  publisher: profile.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://erashu212.vercel.app',
    siteName: `${profile.name} - Staff Backend & Platform Engineer`,
    title: `${profile.name} - Staff Backend & Platform Engineer | Python, GCP, Distributed Systems`,
    description: profile.summary,
    images: [
      {
        url: profile.image || '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${profile.name} - ${profile.titles[0]}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} - ${profile.titles[0]}`,
    description: profile.summary,
    images: [profile.image || '/og-image.png'],
    creator: '@ashu212', // Replace with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://erashu212.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
};

// JSON-LD Structured Data for SEO and LLM readability
function generateStructuredData() {
  return [
    // Person Schema
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: 'Staff Backend & Platform Engineer',
      description: profile.summary,
      url: 'https://erashu212.vercel.app',
      image: profile.image,
      email: profile.email,
      telephone: profile.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressCountry: 'India',
      },
      sameAs: [
        profile.socials.github,
        profile.socials.linkedin,
        profile.socials.stackoverflow,
        'https://rigour.run',
        'https://rigovo.com',
        'https://www.npmjs.com/~rigour-labs',
        'https://github.com/rigour-labs',
      ].filter(Boolean),
      worksFor: {
        '@type': 'Organization',
        name: 'Rigour Labs',
        url: 'https://rigour.run',
      },
      founder: [
        {
          '@type': 'Organization',
          name: 'Rigour Labs',
          url: 'https://rigour.run',
          description: 'Open-source quality gates for AI-generated code. 19 deterministic gates, Fix Packet schema, MCP server integration.',
        },
      ],
      knowsAbout: [
        'AI Code Quality',
        'Staff Backend Engineering',
        'Python Backend Services',
        'Go Backend Familiarity',
        'Microservices Architecture',
        'REST API Design',
        'PostgreSQL',
        'Redis',
        'Cloud SQL',
        'Pub/Sub',
        'Production Debugging',
        'GCP Platform Architecture',
        'Terraform Infrastructure',
        'Workload Identity Federation',
        'Keycloak and OIDC',
        'Kubernetes',
        'Cloud Monitoring and Trace',
        'Event-Driven Task Operations',
        'AST Analysis',
        'Model Context Protocol (MCP)',
        'Quality Gates',
        'Fix Packet Schema',
        'Multi-Agent Governance',
        'web-tree-sitter',
        'TypeScript',
        'Python',
        'Node.js',
        'React',
        'Next.js',
        'LiveKit',
        'Voice AI',
        'Developer Tooling',
        'Open Source',
        'CI/CD',
        'GCP',
        'AWS',
        'Distributed Systems',
      ],
    },
    // SoftwareApplication Schema for Rigour
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Rigour',
      description: 'Open-source, local-first quality gate system for AI-generated code. Forces AI agents to write production-grade code with 19 deterministic gates, AST analysis, and structured Fix Packets.',
      url: 'https://rigour.run',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Cross-platform (Node.js)',
      author: {
        '@type': 'Person',
        name: profile.name,
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      softwareVersion: '2.14',
      license: 'https://opensource.org/licenses/MIT',
      codeRepository: 'https://github.com/rigour-labs/rigour',
      downloadUrl: 'https://www.npmjs.com/package/@rigour-labs/cli',
      keywords: 'quality gates, AI code, MCP server, AST analysis, Fix Packet, vibe coding, Claude, Cursor, VS Code',
    },
    // SoftwareApplication Schema for Rigovo
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Rigovo',
      description: 'AI-powered technical hiring platform with autonomous voice interviews, 15-signal real-time verification, and AI Collaboration Depth measurement.',
      url: 'https://rigovo.com',
      applicationCategory: 'BusinessApplication',
      author: {
        '@type': 'Person',
        name: profile.name,
      },
      keywords: 'AI interviewer, technical hiring, voice interviews, identity verification, AI collaboration depth',
    },
    // ItemList Schema for Projects
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${profile.name}'s Projects`,
      description: 'Portfolio of founder projects, AI platforms, and enterprise systems',
      itemListElement: projects.slice(0, 5).map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          author: {
            '@type': 'Person',
            name: profile.name,
          },
          dateCreated: project.period,
          keywords: project.technologies.join(', '),
        },
      })),
    },
    // WebSite Schema
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${profile.name} - Staff Backend & Platform Engineer`,
      url: 'https://erashu212.vercel.app',
      description: profile.summary,
      author: {
        '@type': 'Person',
        name: profile.name,
      },
    },
    // BreadcrumbList Schema
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://erashu212.vercel.app',
        },
      ],
    },
  ];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for SEO and LLM */}
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data),
            }}
          />
        ))}
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
