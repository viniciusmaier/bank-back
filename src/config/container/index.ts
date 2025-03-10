import { container } from 'tsyringe'
import { CreateAccountUsecase } from '../../application/account/create-account/usecase'
import { AccountRepository } from '../../infrastructure/database/repositories/account.repository'
import { IAccountRepository } from '../../core/interfaces/account.repository'
import { IUserRepository } from '../../core/interfaces/user.repository'
import { UserRepository } from '../../infrastructure/database/repositories/user.repository'
import { CreateUserUsecase } from '../../application/user/create/usecase'

// usecase
container.register<CreateAccountUsecase>('createAccountUsecase', {
  useClass: CreateAccountUsecase
})

container.register<CreateUserUsecase>('createUserUsecase', {
  useClass: CreateUserUsecase
})

// repositories
container.register<IAccountRepository>('iAccountRepository', {
  useClass: AccountRepository
})

container.register<IUserRepository>('iUserRepository', {
  useClass: UserRepository
})
