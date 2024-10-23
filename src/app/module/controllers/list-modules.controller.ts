import { VerifyUserDto } from '@/app/auth/dtos/verifyUser.dto'
import { CustomError } from '@/helpers/errors/custom-error'
import { HandleError } from '@/helpers/errors/handle-error'
import { Request, Response } from 'express'
import { ModuleService } from '../module.services'
import { CustomResponse } from '@/helpers/custom/custom-response'

export const listModules = async (req: Request, res: Response) => {
  try {
    const [error, verifyUser] = VerifyUserDto.check(req.body)

    if (error) throw CustomError.badRequest(error)

    const modules = await ModuleService.listModules(verifyUser!)

    CustomResponse.execute({
      message: 'Modules listed successfully',
      res,
      data: modules,
    })
  } catch (error) {
    HandleError.execute(error, 'listModules', res)
  }
}
