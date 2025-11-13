import { Schema, model, Document } from 'mongoose';


export interface IOrder extends Document {
    buyer_name: string;
    buyer_email: string;
    total_quantity: number;
    items: {
        product_id: string;
        product_title: string;
        product_category: string;
        price: number;
        quantity: number;
    }[];
    total_price: number;
    payment_method: "Cash on Delivery" | "Bkash";
    payment_status: "Pending" | "Paid";
    status:
    | "Pending"
    | "Approved"
    | "Rejected"
    | "Processing"
    | "Out for Delivery"
    | "Completed";
    address: string;
    phone: string;
}

const itemSchema = new Schema(
    {
        product_id: { type: String, required: true },
        product_title: { type: String, required: true },
        product_category: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        seller_email: { type: String, required: true },
    },
    { _id: false }
);

const orderSchema = new Schema<IOrder>(
    {
        buyer_name: { type: String, required: true },
        buyer_email: { type: String, required: true },
        total_quantity: { type: Number, required: true },
        items: [itemSchema],
        total_price: { type: Number, required: true },
        payment_method: { type: String, enum: ["Cash on Delivery", "Bkash"], required: true },
        payment_status: { type: String, enum: ["Pending", "Paid"], default: "Pending" },
        status: {
            type: String,
            enum: [
                "Pending",
                "Approved",
                "Rejected",
                "Processing",
                "Out for Delivery",
                "Completed",
            ],
            default: "Pending",
        },
        address: { type: String, required: true },
        phone: { type: String, required: true },
    },
    { timestamps: true }
);
export const Order = model<IOrder>("Orders", orderSchema);