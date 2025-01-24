import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: 'docs/**',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.string(),
        updated: z.string()
      })
    })
  }
})
