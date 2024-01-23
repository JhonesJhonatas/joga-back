import { UserType } from '@prisma/client'
import { ICreateUserTypeDTO } from '../dtos/ICreateUserTypeDTO'
import { IEditUserTypeDTO } from '../dtos/IEditUserTypeDTO'

interface IUserTypeRepository {
  create({ description, status }: ICreateUserTypeDTO): Promise<UserType>
  list(): Promise<UserType[]>
  edit({ id, description, status }: IEditUserTypeDTO): Promise<UserType>
  delete(id: string): Promise<UserType>
}

export { IUserTypeRepository }
