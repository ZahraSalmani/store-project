import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import {CreateCustomerDto} from '../dto/create-customer.dto'

@Injectable()
export class CustomersService {

    constructor(@InjectRepository(Customer) private customersRepository: Repository<Customer>) { }

    async getCustomers(): Promise<Customer[]> {
        return await this.customersRepository.find();
    }

    async createCustomer(createUserDto: CreateCustomerDto): Promise<Customer> {
      const user = new Customer();
      user.firstName = createUserDto.firstName;
      user.lastName = createUserDto.lastName;
      user.phoneNumber = createUserDto.phoneNumber;
  
      return await this.customersRepository.save(user);
      
    }

    async updateCustomer(customer: Customer) {
        this.customersRepository.save(customer)
    }

    async deleteCustomer(customer: Customer) {
        this.customersRepository.delete(customer);
    }
}