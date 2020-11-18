import {Order} from "../orders/order.entity"
export default class CreateProductDto {
    readonly name: string;
    readonly orders: Order[];
  }