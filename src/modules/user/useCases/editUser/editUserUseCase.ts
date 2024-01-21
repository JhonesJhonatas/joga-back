import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../repositories/IUserRepository'
import { IEditUserDTO } from '../../dtos/IEditUserDTO'

@injectable()
class EditUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({
    birthDate,
    cpf,
    email,
    id,
    name,
    password,
    shift,
  }: IEditUserDTO) {
    const editedUser = await this.userRepository.edit({
      birthDate,
      cpf,
      email,
      id,
      name,
      password,
      shift,
    })

    return editedUser
  }
}

export { EditUserUseCase }
