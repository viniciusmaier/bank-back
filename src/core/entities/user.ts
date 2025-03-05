import { IsEmail, IsString } from "class-validator";
import { CreateUserInput } from "../../application/user/create/input";
import { v4 as uuidv4 } from "uuid";

export class User {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  toInput(): CreateUserInput {
    return {
      email: this.email,
      id: uuidv4(),
      name: this.name,
      password: this.password,
    };
  }
}
