import { inject, injectable } from 'tsyringe'
import { IUserTypeRepository } from '../../repositories/IUserTypeRepository'
import { ICreateUserTypeDTO } from '../../dtos/ICreateUserTypeDTO'

@injectable()
class CreateUserTypeUsecase {
  constructor(
    @inject('UserTypeRepository')
    private userTypeRepository: IUserTypeRepository,
  ) {}

  async execute({ description, status }: ICreateUserTypeDTO) {
    const createdUserType = await this.userTypeRepository.create({
      description,
      status,
    })

    return createdUserType
  }
}

export { CreateUserTypeUsecase }
