import { PrismaUsersRepository } from '@/repository/prisma-users-repository'
import { UserAlreadyExistsError } from '@/services/errors/user-already-esists-error'
import { RegisterService } from '@/services/register'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'


export const register = async (request: FastifyRequest, reply: FastifyReply) => {
  const registerBodyScheme = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodyScheme.parse(request.body)

  try {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerService = new RegisterService(prismaUsersRepository)

    await registerService.execute({ name, email, password })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send()
    }

    throw error
  }

  reply.status(201).send()
}