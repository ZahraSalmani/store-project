import {Order} from "../orders/order.entity"
export default class CreateOrderDto {
    readonly count: number;
    readonly customerId: number;
    readonly productId: number;
  }