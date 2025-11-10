import { model, Schema } from "mongoose"


export interface IProduct {
    _id: string,
    title: string,
    description: string,
    category: string,
    price: number,
    image: string[],
    seller_email: string,
    status: "Pending" | "Approved" | "Rejected" | "Processing" | "Out for Delivery" | "Completed";
}


const productSchema = new Schema<IProduct>(
    {
        _id: {
            type: String
        },
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
        },
        seller_email: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: [
                "Pending",
                "Approved",
                "Rejected",
                "Processing",
                "Out for Delivary",
                "Completed"
            ],
            default: "Pending"
        }
    },
    {
        timestamps: true
    }
)

export const Product = model<IProduct>("Products", productSchema)