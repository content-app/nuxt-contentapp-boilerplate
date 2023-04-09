import { fetchPages } from "@content-app/core/dist/index.js";
import * as contentful from 'contentful';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    target: 'static',
    hooks: {
        async 'nitro:config'(nitroConfig) {
            if (!nitroConfig) {
                return;
            }

            if (!process.env.SPACE_ID || !process.env.DELIVERY_ACCESS_TOKEN) {
                return;
            }

            const client = contentful.createClient({
                space: process.env.SPACE_ID || '',
                accessToken: process.env.DELIVERY_ACCESS_TOKEN || '',
            });

            const pages = await fetchPages({ client });


            nitroConfig.prerender?.routes?.push(...pages);
        }
    }
})
