import {IsString,IsNotEmpty} from "class-validator"
export default class CreateProductDto {
   @IsNotEmpty() @IsString() readonly name: string;
  }