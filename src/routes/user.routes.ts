import { Router } from 'express'
import { CreateUserController } from '../modules/user/useCases/createUser/createUserController'
import { EditUserController } from '../modules/user/useCases/editUser/editUserController'
import { DeleteUserController } from '../modules/user/useCases/deleteUser/deleteUserController'

const userRoutes = Router()

const createUserController = new CreateUserController()
const editUserController = new EditUserController()
const deleteUserController = new DeleteUserController()

userRoutes.post('/create-user', createUserController.handle)
userRoutes.put('/edit-user', editUserController.handle)
userRoutes.delete('/delete-user/:userId', deleteUserController.handle)

export { userRoutes }
