import z from 'zod'

export const allProductValidation = z.object({
    query: z.object({
        name: z.string().optional(),
        category: z.string().optional(),
        minPrice: z.string().optional(),
        maxPrice: z.string().optional(),
    })
})