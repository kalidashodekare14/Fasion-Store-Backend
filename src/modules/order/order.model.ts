import { Schema, model } from 'mongoose';


export interface IOrder {
    buyer_email: string;
    seller_email: string;
    product_id: string;
    quantity: number;
    total_price: number;
    payment_method: string;
    payment_status: "Pending" | "Paid";
    status: "Pending" |
    "Approved" |
    "Rejected" |
    "Processing" |
    "Out for Delivery" |
    "Completed";
    address: string;
    phone: number;
}


const orderSchema = new Schema<IOrder>(
    {
        buyer_email: {
            type: String,
            required: true
        },
        seller_email: {
            type: String,
            required: true
        },
        product_id: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        },
        total_price: {
            type: Number,
            required: true
        },
        payment_method: {
            type: String,
            required: true
        },
        payment_status: {
            type: String,
            default: "Pending"
        },
        status: {
            type: String,
            default: "Pending"
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
)


export const Order = model<IOrder>("Orders", orderSchema);