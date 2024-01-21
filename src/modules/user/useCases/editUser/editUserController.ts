import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { EditUserUseCase } from './editUserUseCase'

class EditUserController {
  async handle(request: Request, response: Response) {
    const { birthDate, cpf, email, id, name, password, shift } = request.body

    const editUserUseCase = container.resolve(EditUserUseCase)

    const editedUser = await editUserUseCase.execute({
      birthDate,
      cpf,
      email,
      id,
      name,
      password,
      shift,
    })

    return response.status(200).json(editedUser)
  }
}

export { EditUserController }
