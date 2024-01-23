import { inject, injectable } from 'tsyringe'
import { IUserTypeRepository } from '../../repositories/IUserTypeRepository'

@injectable()
class GetUserTypesUseCase {
  constructor(
    @inject('UserTypeRepository')
    private userTypeRepository: IUserTypeRepository,
  ) {}

  async execute() {
    const userTypeList = await this.userTypeRepository.list()

    return userTypeList
  }
}

export { GetUserTypesUseCase }
