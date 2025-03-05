import { Account } from "../../../core/entities/account";
import { IAccountRepository } from "../../../core/interfaces/account.repository";

export class AccountRepository implements IAccountRepository {
  static ListAccount: Account[] = [];

  constructor() {}

  async create(account: Account) {
    await AccountRepository.ListAccount.push(account);
    return;
  }

  async remove(id: string): Promise<void> {
    const index = await AccountRepository.ListAccount.findIndex(
      (value) => (value.id = id)
    );
    await AccountRepository.ListAccount.splice(index, 1);
  }
}
