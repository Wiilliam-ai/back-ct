import { Request, Response } from 'express'
import { RegisterModuleDto } from '../dtos/register-module.dto'
import { HandleError } from '@/helpers/errors/handle-error'
import { CustomError } from '@/helpers/errors/custom-error'
import { ModuleService } from '../module.services'
import { VerifyUserDto } from '@/app/auth/dtos/verifyUser.dto'
import { CustomResponse } from '@/helpers/custom/custom-response'
import { HttpStatus } from '@/config/http-status'

export const registerModule = async (req: Request, res: Response) => {
  try {
    const [erros, registerModuleDto] = RegisterModuleDto.check(req.body)
    const [errorVU, verifyUserDto] = VerifyUserDto.check(req.body)

    if (errorVU) throw CustomError.badRequest(errorVU)

    if (erros) throw CustomError.badRequest(erros)

    const module = await ModuleService.registerModule(
      registerModuleDto!,
      verifyUserDto!
    )

    CustomResponse.execute({
      res,
      message: 'Module registered successfully',
      status: HttpStatus.CREATED,
      data: module,
    })
  } catch (error) {
    HandleError.execute(error, 'Error registering module', res)
  }
}
