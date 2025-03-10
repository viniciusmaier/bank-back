import { Router, Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateAccountController } from './../infrastructure/http/account/create/controller'
import { CreateUserController } from '../infrastructure/http/user/create/controller'
const api: Router = Router()

// acounts
api
  .route('/accounts')
  .post(
    async (req: Request, res: Response): Promise<Response> =>
      await container.resolve(CreateAccountController).create(req.body, res)
  )

// users
api
  .route('/users')
  .post(
    async (req: Request, res: Response): Promise<Response> =>
      await container.resolve(CreateUserController).create(req.body, res)
  )

export default api
