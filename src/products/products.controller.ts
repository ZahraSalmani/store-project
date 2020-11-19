import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import CreateProductDto from '../dto/create-product.dto'

@Controller('products')
export class ProductsController {

    constructor(private service: ProductsService) { }

    @Get()
    findAll(): Promise<Product[]> {
      return this.service.getProducts();
    }

    @Post()
  create(@Body() createUserDto: CreateProductDto): Promise<Product> {
    return this.service.createProduct(createUserDto);
  }

    @Put()
    update(@Body() product: Product) {
        return this.service.updateProduct(product);
    }

    @Delete(':id')
    deleteProduct(@Param() params) {
        return this.service.deleteProduct(params.id);
    }
}