import { Response, Request } from "express";
import { BuyerService } from "./service";
import sendResponse from "../../utils/sendResponse";

export const getAllProdcut = async (req: Request, res: Response) => {
    const products = await BuyerService.totalProdut(req.query);
    sendResponse(res, {
        success: true,
        message: "Products fetched successfully",
        data: products
    })
}

export const getProductDetails = async (req: Request, res: Response) => {
    const products = await BuyerService.productDetails(req.params.id);
    sendResponse(res, {
        success: true,
        message: "Products fetched successfully",
        data: products
    })
}