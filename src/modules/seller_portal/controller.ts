import { Request, Response } from "express"
import { SellerService } from "./service"
import sendResponse from "../../utils/sendResponse";

// Add product 
export const productAdd = async (req: Request, res: Response) => {
    const result = await SellerService.addProduct(req.body);
    sendResponse(res, {
        success: true,
        message: "Product Create Successfuly🎉",
        data: result
    })
}

// Edit product
export const productEdit = async (req: Request, res: Response) => {
    const result = await SellerService.editProduct(req.body);
    sendResponse(res, {
        success: true,
        message: "Product Edit Successfuly🎉",
        data: result
    })
}

// Delete product
export const productDelete = async (req: Request, res: Response) => {
    const result = await SellerService.deleteProduct(req.body);
    sendResponse(res, {
        success: true,
        message: "Product Delete Successfuly🎉",
    })
}

// Total Orders
export const allProducts = async (req: Request, res: Response) => {
    const result = await SellerService.totalProducts(req.body);
    sendResponse(res, {
        success: true,
        message: "Total Product Successfuly🎉",
        data: result
    })
}