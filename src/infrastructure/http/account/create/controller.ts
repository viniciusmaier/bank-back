import { inject, singleton } from 'tsyringe'
import { CreateAccountUsecase } from '../../../../application/account/create-account/usecase'
import { plainToInstance } from 'class-transformer'
import { CreateAccountRequest } from './request'
import { Response } from 'express'

@singleton()
export class CreateAccountController {
  constructor (
    @inject('createAccountUsecase')
    private readonly usecase: CreateAccountUsecase
  ) {}

  // @HasPermission([AccountPermission.CREATE])
  async create (body: CreateAccountRequest, res: Response): Promise<Response> {
    try {
      const result = await this.usecase.execute(plainToInstance(CreateAccountRequest, body).toInput())
      return res.status(201).json({
        result
      })
    } catch (err) {
      return res.status(400).send({
        Error: err
      })
    }
  }
}
