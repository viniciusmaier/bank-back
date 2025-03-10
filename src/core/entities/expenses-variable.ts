import { Expenses } from "./expenses";
import { IsNumber } from "class-validator";

export class ExpensesVariable extends Expenses {
  @IsNumber()
  installmentValue: number;

  @IsNumber()
  numberInstallment: number;
}
