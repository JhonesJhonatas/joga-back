import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetUserTypesUseCase } from './getUserTypesUseCase'

class GetUserTypesController {
  async handle(request: Request, response: Response) {
    const getUserTypesUseCase = container.resolve(GetUserTypesUseCase)

    const userTypeList = await getUserTypesUseCase.execute()

    return response.status(200).json(userTypeList)
  }
}

export { GetUserTypesController }
