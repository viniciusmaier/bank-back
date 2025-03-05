import { IsDate, IsNumber, IsString } from "class-validator";

export class Incomes {
  @IsString()
  id: string;

  @IsString()
  description: string;

  @IsNumber()
  value: number;

  @IsDate()
  inputDate: Date;

  isValidValue(): boolean {
    return !!(this.value && this.value > 0);
  }
}
