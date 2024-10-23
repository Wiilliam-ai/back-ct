import { Router } from 'express'
import { AuthRoutes } from './auth/auth.routes'
import { AuthMiddleware } from '@/helpers/middlewares/auth-midleware'
import { ModuleRoutes } from './module/module.routes'

export class AppRoutes {
  static get routes(): Router {
    const router = Router()
    router.use('/auth', AuthRoutes.routes)
    router.use('/modules', AuthMiddleware.verifyToken, ModuleRoutes.routes)
    return router
  }
}
