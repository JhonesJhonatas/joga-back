import { Router } from 'express'
import { CreateUserController } from '../modules/user/useCases/createUser/createUserController'

const userRoutes = Router()

const createUserController = new CreateUserController()

userRoutes.post('/create-user', createUserController.handle)

export { userRoutes }
