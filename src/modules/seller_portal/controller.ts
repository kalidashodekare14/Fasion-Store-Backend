import { Request, Response } from "express"
import { SellerService } from "./service"
import sendResponse from "../../utils/sendResponse";

// Add a product 
export const productAdd = async (req: Request, res: Response) => {
    const result = await SellerService.addProduct(req.body);
    sendResponse(res, {
        success: true,
        message: "Product Create Successfuly🎉",
        data: result
    })
}

export const productEdit = async (req: Request, res: Response) => {
    const result = await SellerService.editProduct(req.body);
    sendResponse(res, {
        success: true,
        message: "Product Edit Successfuly🎉",
        data: result
    })
}