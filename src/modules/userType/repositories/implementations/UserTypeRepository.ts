import { UserType } from '@prisma/client'
import { ICreateUserTypeDTO } from '../../dtos/ICreateUserTypeDTO'
import { IEditUserTypeDTO } from '../../dtos/IEditUserTypeDTO'
import { prismaClient } from '../../../../prisma'
import { IUserTypeRepository } from '../IUserTypeRepository'

class UserTypeRepository implements IUserTypeRepository {
  async create({ description, status }: ICreateUserTypeDTO): Promise<UserType> {
    const createdUserType = await prismaClient.userType.create({
      data: {
        description,
        status,
      },
    })

    return createdUserType
  }

  async list(): Promise<UserType[]> {
    const userTypeList = await prismaClient.userType.findMany()

    return userTypeList
  }

  async edit({ id, description, status }: IEditUserTypeDTO): Promise<UserType> {
    const editedUserType = await prismaClient.userType.update({
      where: { id },
      data: { description, status },
    })

    return editedUserType
  }

  async delete(id: string): Promise<UserType> {
    const deletedUserType = await prismaClient.userType.delete({
      where: { id },
    })

    return deletedUserType
  }
}

export { UserTypeRepository }
