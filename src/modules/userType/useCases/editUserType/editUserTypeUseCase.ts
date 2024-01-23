import { inject, injectable } from 'tsyringe'
import { IUserTypeRepository } from '../../repositories/IUserTypeRepository'
import { IEditUserTypeDTO } from '../../dtos/IEditUserTypeDTO'

@injectable()
class EditUserTypeUseCase {
  constructor(
    @inject('UserTypeRepository')
    private userTypeRepository: IUserTypeRepository,
  ) {}

  async execute({ id, description, status }: IEditUserTypeDTO) {
    const editedUserType = await this.userTypeRepository.edit({
      id,
      description,
      status,
    })

    return editedUserType
  }
}

export { EditUserTypeUseCase }
