import { z } from 'zod';

export const productAddValidation = z.object({
    body: z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().min(1, "Description is required"),
        category: z.string().min(1, "Category is required"),
        price: z.number().positive("Price must be greater than 0"),
        image: z.array(z.string()).nonempty("At least one image is required"),
        seller_email: z.string().email("Invalid email address")
    })
})

export const productGetValidation = z.object({
    body: z.object({
        seller_email: z.string().email("Invalid seller email")
    })
})