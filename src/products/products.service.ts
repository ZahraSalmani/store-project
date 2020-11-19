import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import CreateProductDto from '../dto/create-product.dto'

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(Product) private productsRepository: Repository<Product>) { }

    async getProducts(): Promise<Product[]> {
        return await this.productsRepository.find();
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
      const item = new Product();
      item.name = createProductDto.name;
  
      return await this.productsRepository.save(item);
      
    }

    async updateProduct(product: Product) {
        this.productsRepository.save(product)
    }

    async deleteProduct(product: Product) {
        this.productsRepository.delete(product);
    }
}