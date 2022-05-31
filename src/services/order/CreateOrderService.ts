import { prismaClient } from "../../prisma";

interface OrderRequest {
  table: number;
  client_name?: string;
}

export class CreateOrderService {
  async execute({ table, client_name }: OrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        table,
        client_name,
      },
    });

    return order;
  }
}
