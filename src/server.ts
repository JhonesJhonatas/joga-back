import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { AppError } from './errors/AppError'
import { routes } from './routes'

const app = express()
const port = process.env.PORT || 80

app.use(express.json())

app.use(cors())

app.use(routes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    })
  },
)

app.listen(port, () => {
  console.log(`Server running on port: ${port}. 🚀🚀`)
})