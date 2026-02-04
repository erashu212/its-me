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
    default: `${profile.name} - ${profile.titles[0]} | AI/ML & Cloud Architecture Expert`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    'AI Engineering Manager',
    'ML Platform Architect',
    'Cloud Native Development',
    'Large Language Models',
    'LLM',
    'AGI',
    'MLOps',
    'GCP',
    'AWS',
    'Microservices',
    'Engineering Leadership',
    'Ashutosh Singh',
    'Senior Engineering Manager',
    'AI/ML Platforms',
    'Reinforcement Learning',
    'Python',
    'FastAPI',
    'React',
    'TypeScript',
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
    siteName: `${profile.name} - Portfolio`,
    title: `${profile.name} - ${profile.titles[0]}`,
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
      jobTitle: profile.titles[0],
      description: profile.summary,
      url: 'https://erashu212.vercel.app',
      image: profile.image,
      email: profile.email,
      telephone: profile.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: profile.location.split(',')[0].trim(),
        addressCountry: profile.location.split(',')[1]?.trim() || 'India',
      },
      sameAs: [
        profile.socials.github,
        profile.socials.linkedin,
        profile.socials.stackoverflow,
      ].filter(Boolean),
      worksFor: {
        '@type': 'Organization',
        name: 'Turing',
      },
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Large Language Models',
        'Cloud Computing',
        'Microservices Architecture',
        'MLOps',
        'Engineering Management',
        'Python',
        'React',
        'TypeScript',
        'GCP',
        'AWS',
      ],
    },
    // ItemList Schema for Projects
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${profile.name}'s Projects`,
      description: 'Portfolio of AI/ML and cloud platform projects',
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
      name: `${profile.name} - Portfolio`,
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
