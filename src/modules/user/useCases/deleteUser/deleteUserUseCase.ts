import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../repositories/IUserRepository'

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(userId: string) {
    const deletedUser = await this.userRepository.delete(userId)

    return deletedUser
  }
}

export { DeleteUserUseCase }
