import { Request, Response } from "express";
import { AdminService } from "./service";
import sendResponse from "../../utils/sendResponse";



export const getAllUser = async (req: Request, res: Response) => {
    const allUsers = await AdminService.allUserView();
    sendResponse(res, {
        success: true,
        message: "Total User Successfully",
        data: allUsers
    })
}
