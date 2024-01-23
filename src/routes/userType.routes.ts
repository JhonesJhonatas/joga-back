import { Router } from 'express'
import { CreateUserTypeController } from '../modules/userType/useCases/createUserType/createUserTypeController'
import { DeleteUserTypeController } from '../modules/userType/useCases/deleteUserType/deleteUserTypeController'
import { GetUserTypesController } from '../modules/userType/useCases/getUserTypes/getUserTypesController'
import { EditUserTypeController } from '../modules/userType/useCases/editUserType/editUserTypeController'

const userTypeRoutes = Router()

const createUserTypeController = new CreateUserTypeController()
const getUserTyesController = new GetUserTypesController()
const editUserTypeController = new EditUserTypeController()
const deleteUserTypeController = new DeleteUserTypeController()

userTypeRoutes.post('/create-userType', createUserTypeController.handle)
userTypeRoutes.get('/get-userTypes', getUserTyesController.handle)
userTypeRoutes.put('/edit-userType', editUserTypeController.handle)
userTypeRoutes.delete(
  '/delete-userType/:userId',
  deleteUserTypeController.handle,
)

export { userTypeRoutes }
