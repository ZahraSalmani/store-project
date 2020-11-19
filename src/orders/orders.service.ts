import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import CreateOrderDto from '../dto/create-order.dto'

@Injectable()
export class OrdersService {

    constructor(@InjectRepository(Order) private ordersRepository: Repository<Order>) { }

    async getOrders(): Promise<Order[]> {
        return await this.ordersRepository.find();
    }

    async createOrder(createOrderDto: CreateOrderDto): Promise<Order>{
   
            const order = new Order();
            order.customerId = createOrderDto.customerId;
            order.count=createOrderDto.count;
            order.productId=createOrderDto.productId;
            return await this.ordersRepository.save(order);
    }

    async updateOrder(order: Order) {
        this.ordersRepository.save(order)
    }

    async deleteOrder(order: Order) {
        this.ordersRepository.delete(order);
    }
}