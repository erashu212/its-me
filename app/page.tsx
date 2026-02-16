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
        <h1>{profile.name} — Technical Founder &amp; Full-Stack Engineer</h1>
        <p>
          Founder of Rigour Labs. Creator of Rigour (open-source quality gates for AI-generated code)
          and Rigovo (AI-powered technical hiring platform). 13+ years shipping production systems
          across TypeScript, Python, GCP, AWS, and distributed systems.
        </p>

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
            Programming: TypeScript, Python, Node.js, React, Next.js, FastAPI.
            Cloud: GCP, AWS, Docker, Kubernetes, GitHub Actions.
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
