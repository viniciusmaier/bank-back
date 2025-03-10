import { Account } from "../../../core/entities/account";
import { IAccountRepository } from "../../../core/interfaces/account.repository";

export class AccountRepository implements IAccountRepository {
  static ListAccount: Account[] = [];

  async create(account: Account): Promise<Account> {
    await AccountRepository.ListAccount.push(account);

    return {
      amount: account.amount,
      expenses: account.expenses,
      incomes: account.incomes,
      id: account.id,
      user: account.user,
    };
  }

  async remove(id: string): Promise<void> {
    const index = await AccountRepository.ListAccount.findIndex(
      (value) => (value.id = id),
    );
    await AccountRepository.ListAccount.splice(index, 1);
  }
}
