import { Account } from '../entities/account'

export abstract class IAccountRepository {
  abstract create (account: Account): Promise<Account>
  abstract remove (id: string): Promise<void>
}
