import { IsNumber, IsNotEmpty} from 'class-validator';
export default class CreateOrderDto {

  @IsNotEmpty() @IsNumber() readonly customerId: number;
  @IsNotEmpty() @IsNumber() readonly productId: number;
  @IsNotEmpty() @IsNumber() readonly count: number;
    
  }