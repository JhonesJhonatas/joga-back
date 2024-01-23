import { inject, injectable } from 'tsyringe'
import { IUserTypeRepository } from '../../repositories/IUserTypeRepository'

@injectable()
class DeleteUserTypeUseCase {
  constructor(
    @inject('UserTypeRepository')
    private userTypeRepository: IUserTypeRepository,
  ) {}

  async execute(userId: string) {
    const deletedUserType = await this.userTypeRepository.delete(userId)

    return deletedUserType
  }
}

export { DeleteUserTypeUseCase }
