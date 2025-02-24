import { IsArray, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";
import {Incomes} from "./incomes";
import {Expenses} from "./expenses";

export class Account {
  @IsString()
  id: string;

  @IsNumber()
  amount: number;

    @IsArray()
  @Type(() :typeof Expenses=> Expenses)
  expenses: Array<Expenses>;

  @IsArray()
  @Type(() : typeof Incomes => Incomes)
  incomes: Array<Incomes>;

    constructor(id: string, amount:number,expenses:Array<Expenses>,incomes: Array<Incomes>) {
        this.id = id;
        this.amount = amount;
        this.expenses = expenses;
        this.incomes =incomes;
    }
}
