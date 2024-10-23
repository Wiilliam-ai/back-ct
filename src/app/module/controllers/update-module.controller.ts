import { Request, Response } from 'express'

export const updateModule = async (req: Request, res: Response) => {
  res.json({ message: 'updateModule' })
}
