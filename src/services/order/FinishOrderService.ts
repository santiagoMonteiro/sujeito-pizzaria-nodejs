import { prismaClient } from "../../prisma";

export class FinishOrderService {
  async execute(order_id: string) {
    const order = prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });

    return order;
  }
}
