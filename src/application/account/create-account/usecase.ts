import { inject, injectable } from "tsyringe";
import { CreateAccountInput } from "./input";
import { IAccountRepository } from "../../../core/interfaces/account.repository";
import { Account } from "../../../core/entities/account";
import { IUserRepository } from "../../../core/interfaces/user.repository";
import { logger } from "../../../utils/logger";
import { CreateAccountException } from "../../../utils/exceptions/create-account.exceptions";
import { plainToInstance } from "class-transformer";
import { User } from "../../../core/entities/user";

@injectable()
export class CreateAccountUsecase {
  constructor(
    @inject("iAccountRepository") private repository: IAccountRepository,
    @inject("iUserRepository") private repositoryUser: IUserRepository
  ) {}

  async execute(input: CreateAccountInput) {
    const exists = await this.repositoryUser.getByEmail(input.user.email);

    if (exists) {
      throw new CreateAccountException("User account already created");
    }

    logger.info("adicionando usuario");
    await this.repositoryUser.create(plainToInstance(User, input.user));

    logger.info("adicionando conta");
    await this.repository.create(plainToInstance(Account, input));

    logger.info("processo finalizado");
  }
}
