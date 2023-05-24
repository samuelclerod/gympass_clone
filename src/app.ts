import fastify from 'fastify'
import { appRoutes } from './http/routes'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()

app.register(appRoutes)

app.setErrorHandler((error, request, reply) => {
  console.error(error)
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error. ', issues: error.issues
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    //TOODO: send error to Datadog/New Relic
  }

  return reply.status(500).send({
    message: 'Internal server error'
  })
})