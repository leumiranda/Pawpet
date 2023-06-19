import prismaClient from "../../prisma";

class ListAnimalTypeService {
  async execute() {

    const category = await prismaClient.animal.findMany({
      select: {
        id: true,
        name: true,
      }
    })

    return category;
  }
}

export { ListAnimalTypeService }