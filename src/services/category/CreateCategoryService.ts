import { prismaClient } from "../../prisma";

interface CategoryRequest {
  name: string;
}

export class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === "") {
      throw new Error("Invalid Name");
    }

    const categoryAlreadyExists = prismaClient.category.findFirst({
      where: {
        name,
      },
    });

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
