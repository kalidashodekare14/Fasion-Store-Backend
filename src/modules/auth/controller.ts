import { Request, Response } from "express";
import { AuthServices } from "./service";
import sendResponse from "../../utils/sendResponse";

export const registerUser = async (req: Request, res: Response) => {
    const result = await AuthServices.registerUser(req.body);
    sendResponse(res, {
        success: true,
        message: "User registered successfully!",
        data: result
    });
}

export const loginUser = async (req: Request, res: Response) => {
    const result = await AuthServices.loginUser(req.body);
    sendResponse(res, {
        success: true,
        message: "Login successfully!",
        data: result
    });
}