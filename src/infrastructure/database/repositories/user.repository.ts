import { plainToInstance } from "class-transformer";
import { User } from "../../../core/entities/user";
import { IUserRepository } from "../../../core/interfaces/user.repository";

export class UserRepository implements IUserRepository {
  static ListUser: User[] = [];

  async getByEmail(email: string): Promise<User | null> {
    const result = await UserRepository.ListUser.find(
      (value) => (value.email = email),
    );

    return result != null ? plainToInstance(User, result) : null;
  }

  async create(user: User): Promise<User> {
    await UserRepository.ListUser.push(user);
    return user;
  }
}
