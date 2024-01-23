import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { EditUserTypeUseCase } from './editUserTypeUseCase'

class EditUserTypeController {
  async handle(request: Request, response: Response) {
    const { id, description, status } = request.body

    const editUserTypeUseCase = container.resolve(EditUserTypeUseCase)

    const editedUser = await editUserTypeUseCase.execute({
      id,
      description,
      status,
    })

    return response.status(200).json(editedUser)
  }
}

export { EditUserTypeController }
