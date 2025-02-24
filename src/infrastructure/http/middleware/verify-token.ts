import { UnauthorizedException } from "../../../exceptions/unauthorized-exception";
import { NextFunction, Request, RequestHandler } from "express";



export const verifyToken : any  = (req: Request, resp:Response, next:NextFunction): void => {
    const token = req.get('x-token');
    if(!token || token != "KJDAOJWOIAJDIOAWIJWOIAJDIOWAJWAD") {
        throw new UnauthorizedException("Token invalid");
    }

    next();
}
