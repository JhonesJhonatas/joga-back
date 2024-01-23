import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteUserTypeUseCase } from './deleteUserTypeUseCase'

class DeleteUserTypeController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params

    const deleteUserTypeUseCase = container.resolve(DeleteUserTypeUseCase)

    const deletedUserType = await deleteUserTypeUseCase.execute(userId)

    return response.status(200).json(deletedUserType)
  }
}

export { DeleteUserTypeController }
