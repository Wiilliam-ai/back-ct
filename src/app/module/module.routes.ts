import { Router } from 'express'
import {
  deleteModule,
  listModules,
  registerModule,
  updateModule,
} from './controllers'

export class ModuleRoutes {
  static get routes(): Router {
    const router = Router()
    // get all Modules
    router.get('/', listModules)
    // create Module
    router.post('/', registerModule)
    // update Module
    router.put('/:id', updateModule)
    // delete Module
    router.delete('/:id', deleteModule)
    return router
  }
}
