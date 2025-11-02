import { model, Schema } from "mongoose"


export interface IProduct {
    title: string,
    description: string,
    category: string,
    price: number,
    image: string[]
}


const productSchema = new Schema<IProduct>(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: [String],
            required: true,
            default: [],
        }
    },
    {
        timestamps: true
    }
)

export const Product = model<IProduct>("Products", productSchema)