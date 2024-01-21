import { User } from '@prisma/client'
import { IUserRepository } from '../IUserRepository'
import { prismaClient } from '../../../../prisma'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IEditUserDTO } from '../../dtos/IEditUserDTO'

class UserRepository implements IUserRepository {
  async create({
    birthDate,
    cpf,
    email,
    name,
    password,
    shift,
  }: ICreateUserDTO): Promise<User> {
    const createdUser = await prismaClient.user.create({
      data: { birthDate, cpf, email, name, password, shift },
    })

    return createdUser
  }

  async listUsers(): Promise<User[]> {
    const usersList = await prismaClient.user.findMany()

    return usersList
  }

  async findByCPF(cpf: string): Promise<User> {
    const user = await prismaClient.user.findFirst({ where: { cpf } })

    return user as User
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prismaClient.user.findFirst({ where: { email } })

    return user as User
  }

  async edit({
    id,
    birthDate,
    cpf,
    email,
    name,
    password,
    shift,
  }: IEditUserDTO): Promise<User> {
    const editedUser = await prismaClient.user.update({
      where: { id },
      data: { birthDate, cpf, email, name, password, shift },
    })

    return editedUser
  }

  async delete(userId: string): Promise<User> {
    const deletedUser = await prismaClient.user.delete({
      where: {
        id: userId,
      },
    })

    return deletedUser
  }
}

export { UserRepository }
