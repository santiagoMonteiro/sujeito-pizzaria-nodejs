import { prismaClient } from "../../prisma";

interface CategoryRequest {
  name: string;
}

export class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === "") {
      throw new Error("Invalid Name");
    }

    console.log(name)

    const categoryAlreadyExists = await prismaClient.category.findFirst({
      where: {
        name,
      },
    });

    console.log(JSON.stringify(!!categoryAlreadyExists));

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists");
    }

    const category = await prismaClient.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}
