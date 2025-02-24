import {Router, Request, Response, response} from "express";
import {verifyToken}  from "../infrastructure/http/middleware/verify-token";
import expenses from "../infrastructure/http/expenses/expenses-route";

const api: Router = Router();

api.use(verifyToken);
api.use('/expenses', expenses)

export default api;
