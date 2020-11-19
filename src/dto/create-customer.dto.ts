import { IsString} from 'class-validator';
export  class CreateCustomerDto {
  @IsString() readonly firstName: string;
  @IsString() readonly lastName: string;
  @IsString() readonly phoneNumber: string;
  }