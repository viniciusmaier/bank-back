import { IsArray, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Incomes } from "./incomes";
import { Expenses } from "./expenses";
import { CreateAccountInput } from "../../application/account/create-account/input";
import { v4 as uuidv4 } from "uuid";
export class Account {
  @IsString()
  id: string;

  @IsNumber()
  amount: number;

  @IsArray()
  @Type((): typeof Expenses => Expenses)
  expenses: Array<Expenses>;

  @IsArray()
  @Type((): typeof Incomes => Incomes)
  incomes: Array<Incomes>;

  @Type(() => User)
  user: User;

  toInput(): CreateAccountInput {
    return {
      amount: 0,
      expenses: [],
      incomes: [],
      id: uuidv4(),
      user: {
        email: this.user.email,
        password: this.user.password,
        name: this.user.name,
        id: uuidv4(),
      },
    };
  }
}

class User {
  email: string;
  password: string;
  name: string;
  id: string;
}
