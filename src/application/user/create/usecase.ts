import { plainToInstance } from "class-transformer";
import { IUserRepository } from "../../../core/interfaces/user.repository";
import { CreateUserException } from "../../../utils/exceptions/create-user.exception";
import { CreateUserInput } from "./input";
import { User } from "../../../core/entities/user";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateUserUsecase {
  constructor(
    @inject("iUserRepository") private readonly repository: IUserRepository
  ) {}

  async execute(input: CreateUserInput): Promise<User> {
    const existUser = await this.repository.getByEmail(input.email);
    if (existUser) {
      throw new CreateUserException("User always exists");
    }

    const { password, ...rest } = input;
    return await this.repository.create(plainToInstance(User, rest));
  }
}
