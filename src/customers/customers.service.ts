import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = new Customer();
    customer.firstName = createCustomerDto.firstName;
    customer.lastName = createCustomerDto.lastName;
    customer.phoneNumber = createCustomerDto.phoneNumber;

    return this.customersRepository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.customersRepository.find();
  }


  async remove(id: string): Promise<void> {
    await this.customersRepository.delete(id);
  }
}