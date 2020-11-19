import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './order.entity';
import CreateOrderDto from '../dto/create-order.dto'

@Controller('orders')
export class OrdersController {

    constructor(private service: OrdersService) { }

    @Get()
    findAll(): Promise<Order[]> {
      return this.service.getOrders();
    }

    @Post()
  create(@Body() createorderDto: CreateOrderDto): Promise<Order> {
    return this.service.createOrder(createorderDto);
  }

    @Put()
    update(@Body() order: Order) {
        return this.service.updateOrder(order);
    }

    @Delete(':id')
    deleteOrder(@Param() params) {
        return this.service.deleteOrder(params.id);
    }
}