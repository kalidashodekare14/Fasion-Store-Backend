import z from 'zod'

export const allProductValidation = z.object({
    query: z.object({
        name: z.string().optional(),
        category: z.string().optional(),
        minPrice: z.string().optional(),
        maxPrice: z.string().optional(),
    })
})

export const orderValidation = z.object({
    body: z.object({
        buyer_name: z.string(),
        buyer_email: z.string().email(),
        total_quantity: z.number().min(1),
        items: z.array(
            z.object({
                product_id: z.string(),
                product_title: z.string(),
                product_category: z.string(),
                price: z.number().positive(),
                quantity: z.number().min(1),
                seller_email: z.string().email(),
            })
        ),
        total_price: z.number().positive(),
        payment_method: z.enum(["Cash on Delivery", "Bkash"]),
        payment_status: z.enum(["Pending", "Paid"]).default("Pending"),
        status: z.enum([
            "Pending",
            "Approved",
            "Rejected",
            "Processing",
            "Out for Delivery",
            "Completed",
        ]).default("Pending"),
        address: z.string(),
        phone: z.string(),
    }),
});
