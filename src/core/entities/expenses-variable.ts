import {Expenses} from "./expenses"
import { IsNumber} from "class-validator";
import {Account} from "./account";

export class ExpensesVariable extends Expenses {
   @IsNumber()
    installmentValue: number;

   @IsNumber()
    numberInstallment: number;

   constructor(installmentValue:number, numberInstallment: number,id:string, value:number, account:Account, description:string, expensesDate: Date, duedate: Date) {
       super(id, value, account,description,expensesDate,  duedate);
       this.installmentValue =installmentValue;
       this.numberInstallment =numberInstallment;
   }
}