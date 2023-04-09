import contentful from 'contentful';
import { fetchPageBySlug } from '@content-app/core/dist/index.js';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      fetchPageBySlug: async (slug: string, config: any) => {

        if (!process.env.SPACE_ID || !process.env.DELIVERY_ACCESS_TOKEN) {
          return null;
        }

        const client = contentful.createClient({
          space: process.env.SPACE_ID || '',
          accessToken: process.env.DELIVERY_ACCESS_TOKEN || '',
        });

        try {
          return await fetchPageBySlug({ client, slug, ...config });
        } catch (error) {
          console.error(error)
        }

      }
    }
  }
})