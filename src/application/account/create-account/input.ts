import { Expenses } from "../../../core/entities/expenses";
import { Incomes } from "../../../core/entities/incomes";

export class CreateAccountInput {
  id: string;
  amount: number = 0;
  expenses: Expenses[] = [];
  incomes: Incomes[] = [];
  user: UserInput;
}

export class UserInput {
  name: string;
  email: string;
  password: string;
  id: string;
}
