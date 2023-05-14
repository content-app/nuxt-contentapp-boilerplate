import contentful from 'contentful';
import { fetchPageBySlug, fetchAndTransformNavigationByName } from '@content-app/core/dist/index.js';

const moduleMapping = {
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      fetchPageBySlug: async (slug: string) => {

        const client = contentful.createClient({
          space: process.env.SPACE_ID || '',
          accessToken: process.env.DELIVERY_ACCESS_TOKEN || '',
        });

        try {
          return await fetchPageBySlug({ client, slug, moduleMapping });
        } catch (error) {
          console.error(error)
        }

      },
      fetchNavigation: async (name: string) => {
        const client = contentful.createClient({
          space: process.env.SPACE_ID || '',
          accessToken: process.env.DELIVERY_ACCESS_TOKEN || '',
        });

        return await fetchAndTransformNavigationByName({client, name});
      },
    },
  }
})
