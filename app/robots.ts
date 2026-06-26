import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://erashu212.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      // LLM crawlers — explicitly allowed
      {
        userAgent: 'GPTBot', // OpenAI
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT browsing
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', // Google AI / Gemini
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai', // Anthropic
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot', // Claude
        allow: '/',
      },
      {
        userAgent: 'Claude-Web', // Claude web browsing
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended', // Apple Intelligence
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot', // Perplexity AI
        allow: '/',
      },
      {
        userAgent: 'Bytespider', // ByteDance
        allow: '/',
      },
      {
        userAgent: 'cohere-ai', // Cohere
        allow: '/',
      },
      {
        userAgent: 'Meta-ExternalAgent', // Meta AI
        allow: '/',
      },
      {
        userAgent: 'YouBot', // You.com
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
