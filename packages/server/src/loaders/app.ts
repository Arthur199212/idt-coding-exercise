import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import api from '@src/routes'
import { notFound, serverError } from '@src/middlewares'

export const createApp = () => {
  const app = express()

  app.use(
    cors({
      credentials: true,
      origin: (origin, cb) => cb(null, true)
    })
  )

  app.use(helmet())

  app.use(express.json())

  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true
    })
  )

  // for test purposes only
  app.get('/', (req, res) => {
    res.json({ message: 'OK' })
  })

  app.use(api)

  app.use(notFound)

  app.use(serverError)

  return app
}
