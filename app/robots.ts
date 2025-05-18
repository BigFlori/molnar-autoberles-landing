import { MetadataRoute } from 'next';
import { site } from '../config/site-config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = site.url
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}