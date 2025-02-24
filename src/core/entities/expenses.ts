import {IsDate, IsString, IsNumber} from "class-validator";
import {Account} from "./account";
import {Type} from "class-transformer";

export abstract class Expenses {
    @IsString()
    protected id: string;

    @IsNumber()
    protected value : number

    @Type((): typeof Account => Account)
    protected account: Account;

    @IsString()
    protected description: string

    @IsDate()
    protected expensesDate: Date

    @IsDate()
    protected dueDate: Date

    constructor(id:string, value:number, account:Account, description:string, expensesData: Date, duedate: Date) {
        this.id = id;
        this.value = value;
        this.account = account;
        this.description= description;
        this.expensesDate = expensesData;
        this.dueDate =duedate;
    }
}