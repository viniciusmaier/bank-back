import {IsDate, IsNumber, IsString} from "class-validator";

export class Incomes {
    @IsString()
    id: string;

    @IsString()
    description: string;

    @IsNumber()
    value: number;

    @IsDate()
    inputDate : Date;

    constructor(id: string, description : string, value: number, inputDate: Date) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.inputDate = inputDate;
    }

    isValidValue():boolean{
        return !!(this.value && this.value > 0);
    }
}