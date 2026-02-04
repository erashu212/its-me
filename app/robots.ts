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
      {
        userAgent: 'GPTBot', // OpenAI's crawler
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT user agent
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', // Google's AI training crawler
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai', // Claude's crawler
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot', // Claude's bot
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
        userAgent: 'Bytespider', // ByteDance (TikTok)
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
