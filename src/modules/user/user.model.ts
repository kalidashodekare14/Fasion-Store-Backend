import { Schema, model } from "mongoose";


export interface IUser {
    name: string,
    email: string,
    password: string,
    role?: "buyer" | "seller" | "admin";
    createdAt?: Date;
}


const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            minLength: 6
        },
        role: {
            type: String,
            enum: ["buyer", "seller", "admin"],
            default: "buyer"
        },
    },
    {
        timestamps: true,
    }
);


userSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj
}


export const User = model<IUser>("User", userSchema);

