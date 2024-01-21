import { User } from '@prisma/client'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { IEditUserDTO } from '../dtos/IEditUserDTO'

interface IUserRepository {
  create({
    birthDate,
    cpf,
    email,
    name,
    password,
    shift,
  }: ICreateUserDTO): Promise<User>

  listUsers(): Promise<User[]>

  findByCPF(cpf: string): Promise<User>

  findByEmail(email: string): Promise<User>

  edit({
    id,
    birthDate,
    cpf,
    email,
    name,
    password,
    shift,
  }: IEditUserDTO): Promise<User>

  delete(id: string): Promise<User>
}

export { IUserRepository }
