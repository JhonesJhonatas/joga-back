import { container } from 'tsyringe'
import { IUserRepository } from '../../modules/user/repositories/IUserRepository'
import { UserRepository } from '../../modules/user/repositories/implementations/UserRepository'
import { UserTypeRepository } from '../../modules/userType/repositories/implementations/UserTypeRepository'
import { IUserTypeRepository } from '../../modules/userType/repositories/IUserTypeRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

container.registerSingleton<IUserTypeRepository>(
  'UserTypeRepository',
  UserTypeRepository,
)
