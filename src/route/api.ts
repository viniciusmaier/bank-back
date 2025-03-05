import { Router, Request } from "express";
import { container, inject } from "tsyringe";
import { CreateAccountController } from "./../infrastructure/http/account/create/controller";
import { CreateUserController } from "../infrastructure/http/user/create/controller";
const api: Router = Router();

// acounts
api
  .route("/accounts")
  .post((req: Request, res: Response) =>
    container.resolve(CreateAccountController).create(req.body, res)
  );

// users
api
  .route("/users")
  .post((req: Request, res: Response) =>
    container.resolve(CreateUserController).create(req.body, res)
  );

export default api;
