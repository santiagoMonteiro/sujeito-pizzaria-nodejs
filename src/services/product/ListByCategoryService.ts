import { prismaClient } from "../../prisma";

export class ListByCategoryService {
  async execute(category_id: string) {
    const productsByCategory = await prismaClient.product.findMany({
      where: {
        category_id,
      },
    });

    return productsByCategory;
  }
}
