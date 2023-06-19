import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'


interface UserRequest {
  name: string;
  email: string;
  password: string;
  phone: number;
}

class CreateUserService {
  async execute({ name, phone, email, password }: UserRequest) {

    // verificar se ele enviou um email
    if (!email) {
      throw new Error("Email incorrect or missing")
    }

    // verificar se esse email já existe no bd
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8)
    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        phone: phone,
        password: passwordHash,
      },
      select:{
        id: true,
        phone: true,
        name: true,
        email: true,
      }
    })
    return user;
  }
}

export { CreateUserService }