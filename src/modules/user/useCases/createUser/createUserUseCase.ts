import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../repositories/IUserRepository'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { hash } from 'bcrypt'
import { AppError } from '../../../../errors/AppError'

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
    const [userWithSameCPF, userWithSameEmail] = await Promise.all([
      this.userRepository.findByCPF(cpf),
      this.userRepository.findByEmail(email),
    ])

    if (userWithSameCPF) {
      throw new AppError('CPF Already Registered!', 400)
    }

    if (userWithSameEmail) {
      throw new AppError('Email Already Registered!', 400)
    }

    const passwordHash = await hash(password, 8)

    const createdUser = await this.userRepository.create({
      birthDate,
      cpf,
      email,
      name,
      password: passwordHash,
      shift,
    })

    return createdUser
  }
}

export { CreateUserUseCase }
