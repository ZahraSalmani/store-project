import { IsString, IsNotEmpty, IsEmail } from "class-validator"
export class CreateUserDto {
  @IsNotEmpty() @IsString() username: string;
  @IsNotEmpty() password: string;
  @IsNotEmpty() @IsEmail() email: string;
}