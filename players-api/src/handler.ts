import { Express } from 'express'

import { bootstrap } from './server'

let handler: Express

export default async (req: any, res: any) => {
  if (!handler) {
    const { app } = await bootstrap()
    handler = app
  }

  handler(req, res)
}
