import { inject, singleton } from "tsyringe";
import { CreateAccountUsecase } from "../../../../application/account/create-account/usecase";
import { plainToInstance } from "class-transformer";
import { CreateAccountRequest } from "./request";
import { Response, Request } from "express";
import { HasPermission } from "../../decorators/permissions/has";
import { Account } from "../../../../core/entities/account";

@singleton()
export class CreateAccountController {
  constructor(
    @inject("createAccountUsecase")
    private readonly usecase: CreateAccountUsecase
  ) {}

  // @HasPermission([AccountPermission.CREATE])
  async create(body: CreateAccountRequest, res: Response) {
    try {
      const instance = plainToInstance(Account, {
        user: {
          email: body.email,
          password: body.password,
          name: body.name,
        },
      });
      const result = await this.usecase.execute(instance.toInput());
      res.status(201).json({
        result,
      });
    } catch (err) {
      res.status(400).send({
        Error: err.message,
      });
    }
  }
}
