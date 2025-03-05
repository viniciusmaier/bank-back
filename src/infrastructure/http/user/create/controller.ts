import { inject, singleton } from "tsyringe";
import { CreateUserUsecase } from "../../../../application/user/create/usecase";
import { CreateUserRequest } from "./request";
import { plainToInstance } from "class-transformer";
import { User } from "../../../../core/entities/user";
import { Response } from "express";

@singleton()
export class CreateUserController {
  constructor(
    @inject("createUserUsecase")
    private readonly createUserUsecase: CreateUserUsecase
  ) {}

  async create(body: CreateUserRequest, res: Response) {
    try {
      const result = await this.createUserUsecase.execute(
        plainToInstance(User, body).toInput()
      );
      console.log(result);
      return res.status(200).json({
        data: result,
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }
}
