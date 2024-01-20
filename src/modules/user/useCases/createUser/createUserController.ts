import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from './createUserUseCase'

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { birthDate, cpf, email, name, password, shift } = request.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    const createdUser = await createUserUseCase.execute({
      birthDate,
      cpf,
      email,
      name,
      password,
      shift,
    })

    return response.status(201).json(createdUser)
  }
}

export { CreateUserController }
