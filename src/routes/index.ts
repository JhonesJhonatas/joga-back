import { Router } from 'express'
import { userRoutes } from './user.routes'
import { userTypeRoutes } from './userType.routes'

const routes = Router()

routes.use('/user', userRoutes)
routes.use('/userType', userTypeRoutes)

export { routes }
