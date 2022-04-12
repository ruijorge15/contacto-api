import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  contacto1: number;

  @ApiProperty()
  contacto2: number;

  @ApiProperty()
  tipo_user: string;

  password: string;
  salt: string;
  isAdmin: boolean;
  isFuncionario: boolean;
}
