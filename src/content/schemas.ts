import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "org": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "byline": z.string(),
        "cta1": z.string(),
        "cta2": z.string()
      }),
      "education": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "col1": z.string(),
        "col2": z.string()
      }),
      "programs": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "audiences": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "items": z.array(z.object({
            "id": z.string(),
            "text": z.string()
          }))
        }))
      }),
      "featured": z.object({
        "label": z.string(),
        "title": z.string(),
        "subtitle": z.string(),
        "body": z.string(),
        "bullets": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        })),
        "cta": z.string()
      }),
      "organizations": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "types": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "desc": z.string()
        })),
        "collab": z.string(),
        "cta": z.string()
      }),
      "profeducation": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "note": z.string()
      }),
      "about": z.object({
        "eyebrow": z.string(),
        "name": z.string(),
        "title": z.string(),
        "bio": z.string(),
        "cta": z.string()
      }),
      "contact": z.object({
        "headline": z.string(),
        "body": z.string(),
        "name": z.string(),
        "email": z.string(),
        "disclaimer": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;