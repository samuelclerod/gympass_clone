import { prisma } from '@/lib/prisma'
import { UsersRepository } from '@/repository/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-esists-error'

interface RegisterServiceRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterService {

  constructor(private usersRepository: UsersRepository) { }

  async execute({ name, email, password }: RegisterServiceRequest): Promise<void> {
    const password_hash = await hash(password, 6)

    const userWithWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    // const prismaUsersRepository = new PrismaUsersRepository()

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }

}