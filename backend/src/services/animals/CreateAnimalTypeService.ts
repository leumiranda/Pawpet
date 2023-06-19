import prismaClient from '../../prisma'


interface CategoryRequest {
  name: string;
}

class CreateAnimalTypeService {
  async execute({ name }: CategoryRequest) {
    if(name === ''){
      throw new Error('Invalid name')
    }
    const category = await prismaClient.animal.create({
      data:{
        name: name,
      },
      select:{
        id: true,
        name: true,
      }
    })

    return category;
  }
}
export { CreateAnimalTypeService }