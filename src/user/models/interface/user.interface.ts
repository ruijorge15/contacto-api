import { Document } from 'mongoose';

export interface User extends Document {
  email: string;
  nome: string;
  tipo_user: string;
  password: string;
  salt: string;
  isAdmin: boolean;
  isGestor: boolean;
  isFuncionario: boolean;
}
