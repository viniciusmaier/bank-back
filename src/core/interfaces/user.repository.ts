import { User } from '../entities/user'

export abstract class IUserRepository {
  abstract create (user: User): Promise<User>
  abstract getByEmail (email: string): Promise<User | null>
}
