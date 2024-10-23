import { CustomError } from '@/helpers/errors/custom-error'
import { VerifyUserDto } from '../auth/dtos/verifyUser.dto'
import { RegisterModuleDto } from './dtos/register-module.dto'
import { PrismaClient } from '@prisma/client'

export class ModuleService {
  static async registerModule(
    registerDto: RegisterModuleDto,
    verifyUserDto: VerifyUserDto
  ) {
    try {
      const prisma = new PrismaClient()

      const existModule = await prisma.module.findFirst({
        where: {
          name: registerDto.name,
          AND: {
            userId: verifyUserDto.id,
          },
        },
      })

      if (existModule) {
        throw CustomError.badRequest('Module already exists')
      }

      const module = await prisma.module.create({
        data: {
          name: registerDto.name,
          userId: verifyUserDto.id,
          typeModuleId: registerDto.typeModuleId,
        },
      })

      return module
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalServer()
    }
  }

  static async listModules(verifyUserDto: VerifyUserDto) {
    try {
      const prisma = new PrismaClient()

      const modules = await prisma.module.findMany({
        where: {
          userId: verifyUserDto.id,
        },
      })

      return modules
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalServer()
    }
  }

  static async updateModule(
    id: number,
    registerDto: RegisterModuleDto,
    verifyUserDto: VerifyUserDto
  ) {
    try {
      const prisma = new PrismaClient()

      const module = await prisma.module.update({
        where: { id, userId: verifyUserDto.id },
        data: {
          name: registerDto.name,
          typeModuleId: registerDto.typeModuleId,
        },
      })

      return module
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalServer()
    }
  }
}
