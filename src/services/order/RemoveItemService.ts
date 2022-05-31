import { prismaClient } from "../../prisma";

export class RemoveItemService {
  async execute(item_id: string) {
    const item = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return item;
  }
}
