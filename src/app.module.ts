import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CustomersModule,TypeOrmModule.forRoot(), ProductsModule, OrdersModule, UserModule,AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
