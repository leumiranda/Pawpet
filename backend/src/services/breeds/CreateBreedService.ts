import prismaClient from '../../prisma'


interface BreedRequest {
  name: string;
  animal_id: string;
}

class CreateBreedService {
  async execute({ name, animal_id }: BreedRequest) {
    if(name === ''){
      throw new Error('Invalid name')
    }
    const category = await prismaClient.breed.create({
      data:{
        name: name,
        animal_id: animal_id,
      },
      select:{
        id: true,
        name: true,
        animal_id: true,
      }
    })

    return category;
  }
}
export { CreateBreedService }