import { IsEmail } from 'class-validator';

export class PasswordlessLoginReqDto {
  @IsEmail()
  email: string;
}
