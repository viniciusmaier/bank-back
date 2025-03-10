import { v4 as uuidv4 } from "uuid";
import { CreateAccountInput } from "../../../../application/account/create-account/input";

export class CreateAccountRequest {
  email: string;
  password: string;
  name: string;

  toInput(): CreateAccountInput {
    return {
      amount: 0,
      expenses: [],
      incomes: [],
      id: uuidv4(),
      user: {
        email: this.email,
        password: this.name,
        name: this.password,
        id: uuidv4(),
      },
    };
  }
}
