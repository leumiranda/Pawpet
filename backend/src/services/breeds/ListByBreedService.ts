import prismaClient from "../../prisma";


interface BreedsRequest {
  name: string;
  animal_id: string;
}


class ListByBreedService {
  async execute({ animal_id }: BreedsRequest) {
    const findByCategory = await prismaClient.breed.findMany({
      where:{
        animal_id: animal_id
      },
      select:{
        id: true,
        name: true,
        animal_id: true,
      }
    })

    return findByCategory;
   }
}

export { ListByBreedService }