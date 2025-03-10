import { IsDate, IsString, IsNumber } from 'class-validator'
import { Account } from './account'
import { Type } from 'class-transformer'

export abstract class Expenses {
  @IsString()
  protected id: string

  @IsNumber()
  protected value: number

  @Type((): typeof Account => Account)
  protected account: Account

  @IsString()
  protected description: string

  @IsDate()
  protected expensesDate: Date

  @IsDate()
  protected dueDate: Date
}
