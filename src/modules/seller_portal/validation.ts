import { z } from 'zod';

export const productAddValidation = z.object({
    body: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        price: z.number(),
    })
})