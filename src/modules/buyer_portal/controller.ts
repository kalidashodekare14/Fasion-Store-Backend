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

export const productOrder = async (req: Request, res: Response) => {
    const order = await BuyerService.productOrder(req.body);
    sendResponse(res, {
        success: true,
        message: "Product Order successfully",
        data: order
    })
}

export const getOrderTrack = async (req: Request, res: Response) => {
    const order = await BuyerService.orderTrack(req.params.email);
    sendResponse(res, {
        success: true,
        message: "Order tracking successfully",
        data: order
    })
}