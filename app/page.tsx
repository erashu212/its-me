import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import { profile } from '@/data/profile';

// This page is server-rendered by default in Next.js 16 App Router
// Client components are marked with 'use client' directive
export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      {/* Hidden semantic content for LLM crawlers and accessibility */}
      <article className="sr-only" aria-hidden="false">
        <h1>{profile.name} — Staff Backend Engineer, Platform Engineer, and Technical Founder</h1>
        <p>
          Staff-level backend and platform engineer with 13+ years of experience in Python, TypeScript,
          distributed systems, cloud infrastructure, microservices, PostgreSQL, Redis, Pub/Sub, Kubernetes,
          observability, and production debugging. Founder of Rigour Labs. Creator of Rigour
          (open-source quality gates for AI-generated code) and Rigovo (AI-powered technical hiring
          platform). Senior platform engineer at Turing who led CTP platform modernization across GCP,
          Terraform, Kubernetes, Keycloak, Workload Identity Federation, GitHub Actions, observability,
          and event-driven task operations. Has working familiarity with Go for backend systems.
        </p>

        <section>
          <h2>Backend Staff Engineer Profile</h2>
          <p>
            Backend strengths include Python service development, FastAPI, Node.js and Fastify services,
            REST API design, service boundaries, multi-tenant systems, PostgreSQL, Cloud SQL, Redis,
            Pub/Sub, idempotent consumers, task queues, vendor integrations, production incident triage,
            distributed tracing, structured logging, dashboards, and cloud-native deployment on Kubernetes.
            The profile is suitable for staff backend engineering, platform engineering, infrastructure
            engineering, and distributed systems roles.
          </p>
        </section>

        <section>
          <h2>CTP Platform — GCP Migration, Identity, Canvas, and Task Operations</h2>
          <p>
            Led the Central Task Platform migration at Turing across dev, preprod, and prod GCP
            projects. Designed Terraform-managed foundation for GKE, Cloud SQL, Pub/Sub, Secret
            Manager, Firebase, Discovery Engine, Cloud Monitoring, Cloud Trace, and state buckets.
            Implemented Workload Identity Federation and least-privilege service accounts for infra,
            CTP, identity, AGI-OS, Prism, and canvas repositories. Migrated Keycloak identity through
            CTP-owned realm automation, Google broker setup, OIDC clients, roles, and GitHub Actions
            deployment. Built SRE dashboards for p95 latency, RPS, 5xx, workloads, DLQs, event
            drainer, media, admin, annotator, task usage, Prism QC, and AGI-OS integration health.
            Backend scope included Python and TypeScript services, PostgreSQL, Redis, Pub/Sub, Cloud SQL,
            task queue lifecycle, identity-aware authorization, vendor events, and production runbooks.
          </p>
        </section>

        <section>
          <h2>Rigour — Open-Source Quality Gates for AI Code</h2>
          <p>
            Rigour is a local-first, deterministic quality gate system with 19 gates including
            AST-based complexity analysis, security vulnerability detection, and content hygiene.
            Features Fix Packet v2 schema for agent self-healing, MCP server integration for
            Claude Desktop, Cursor, and VS Code, multi-agent governance with scope isolation
            and conflict detection, and Supervisor Mode for iterative agent execution.
            44 semantic releases on NPM. MIT licensed. Zero cloud dependencies.
          </p>
          <ul>
            <li>Website: https://rigour.run</li>
            <li>Documentation: https://docs.rigour.run</li>
            <li>GitHub: https://github.com/rigour-labs/rigour</li>
            <li>NPM: https://www.npmjs.com/package/@rigour-labs/cli</li>
          </ul>
        </section>

        <section>
          <h2>Rigovo — AI-Powered Technical Hiring</h2>
          <p>
            Rigovo deploys Maya, an autonomous AI interviewer conducting 20-45 minute adaptive
            technical interviews via voice. Features 15-signal real-time verification engine,
            AI Collaboration Depth measurement, evidence reports with skill-by-skill scoring,
            and enterprise features including Stripe billing, WorkOS SSO, and GDPR/CCPA compliance.
            82 beta interviews processed generating 6,824 signal events.
          </p>
          <ul>
            <li>Website: https://rigovo.com</li>
            <li>Product: https://rigovo.com/product</li>
          </ul>
        </section>

        <section>
          <h2>Technical Expertise</h2>
          <p>
            Developer Tooling: AST analysis (web-tree-sitter), Model Context Protocol (MCP),
            CLI development, monorepo architecture, NPM package publishing, CI/CD pipelines.
            Programming: Python, TypeScript, Node.js, React, Next.js, FastAPI, Fastify, and light Go.
            Cloud: GCP, AWS, Docker, Kubernetes, Terraform, Workload Identity Federation,
            GitHub Actions, Cloud SQL, Pub/Sub, Secret Manager, Cloud Monitoring, Cloud Trace.
            AI/ML: LLM integration, Google Gemini, agent governance, voice AI (LiveKit).
            Data: PostgreSQL, Redis, Supabase, Prisma.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Email: {profile.email} |
            GitHub: https://github.com/erashu212 |
            LinkedIn: https://www.linkedin.com/in/ashu212/ |
            Portfolio: https://erashu212.vercel.app
          </p>
        </section>
      </article>
    </main>
  );
}
