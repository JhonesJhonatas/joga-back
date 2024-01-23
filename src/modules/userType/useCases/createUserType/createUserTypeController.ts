import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserTypeUsecase } from './createUserTypeUseCase'

class CreateUserTypeController {
  async handle(request: Request, response: Response) {
    const { description, status } = request.body

    const createUserTypeUseCase = container.resolve(CreateUserTypeUsecase)

    const createdUserType = await createUserTypeUseCase.execute({
      description,
      status,
    })

    return response.status(201).json(createdUserType)
  }
}

export { CreateUserTypeController }
