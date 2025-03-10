import { IsArray, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Incomes } from "./incomes";
import { Expenses } from "./expenses";
export class Account {
  @IsString()
  id: string;

  @IsNumber()
  amount: number;

  @IsArray()
  @Type((): typeof Expenses => Expenses)
  expenses: Expenses[];

  @IsArray()
  @Type((): typeof Incomes => Incomes)
  incomes: Incomes[];

  @Type(() => User)
  user: User;
}

class User {
  email: string;
  password: string;
  name: string;
  id: string;
}
