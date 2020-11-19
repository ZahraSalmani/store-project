import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import {CreateCustomerDto} from '../dto/create-customer.dto'

@Controller('customers')
export class CustomersController {

    constructor(private service: CustomersService) { }

    @Get()
    findAll(): Promise<Customer[]> {
      return this.service.getCustomers();
    }

    @Post()
  create(@Body() createUserDto: CreateCustomerDto): Promise<Customer> {
    return this.service.createCustomer(createUserDto);
  }

    @Put()
    update(@Body() customer: Customer) {
        return this.service.updateCustomer(customer);
    }

    @Delete(':id')
    deleteCustomer(@Param() params) {
        return this.service.deleteCustomer(params.id);
    }
}