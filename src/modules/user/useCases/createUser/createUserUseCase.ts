import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../repositories/IUserRepository'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({
    birthDate,
    cpf,
    email,
    name,
    password,
    shift,
  }: ICreateUserDTO) {
    const createdUser = await this.userRepository.create({
      birthDate,
      cpf,
      email,
      name,
      password,
      shift,
    })

    return createdUser
  }
}

export { CreateUserUseCase }
