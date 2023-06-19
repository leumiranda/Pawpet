import prismaClient from "../../prisma";

interface PetRequest {
  banner: string;
  dateOfBirth: Date;
  breed_id: string;

}

class CreatePetService {
  async execute({ banner, dateOfBirth, breed_id }: PetRequest) {
    const pet = await prismaClient.pet.create({
      data: {
        banner: banner,
        dateOfBirth: dateOfBirth,
        breed_id: breed_id,
      }
    })

    return pet
  }
}



export { CreatePetService }