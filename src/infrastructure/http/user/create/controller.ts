import { inject, singleton } from "tsyringe";
import { CreateUserUsecase } from "../../../../application/user/create/usecase";
import { CreateUserRequest } from "./request";
import { plainToInstance } from "class-transformer";
import { Response } from "express";

@singleton()
export class CreateUserController {
  constructor(
    @inject("createUserUsecase")
    private readonly createUserUsecase: CreateUserUsecase,
  ) {}

  async create(body: CreateUserRequest, res: Response): Promise<Response> {
    try {
      const result = await this.createUserUsecase.execute(
        plainToInstance(CreateUserRequest, body).toInput(),
      );
      return res.status(200).json({
        data: result,
      });
    } catch (err: unknown) {
      return res.status(400).json({
        error: err,
      });
    }
  }
}
