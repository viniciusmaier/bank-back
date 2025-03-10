import { IsDate, IsPositive, IsString } from 'class-validator'

export class Incomes {
  @IsString()
    id: string

  @IsString()
    description: string

  @IsPositive()
    value: number

  @IsDate()
    inputDate: Date
}
