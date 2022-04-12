import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactoDto } from '../models/dtos/create-contacto.dto';
import { UpdateContactoDto } from '../models/dtos/update-contacto.dto';
import { Contacto } from '../models/interface/contacto.interface';

@Injectable()
export class ContactoService {
  constructor(
    @InjectModel('Contacto') private readonly ContactoModel: Model<Contacto>,
  ) {}

  async createContacto(
    createContactoDto: CreateContactoDto,
  ): Promise<Contacto> {
    const newContacto = new this.ContactoModel(createContactoDto);
    return await newContacto.save();
  }

  async updateContacto(
    _id: string,
    updateContactoDto: UpdateContactoDto,
  ): Promise<Contacto> {
    const updateContacto = await this.ContactoModel.findByIdAndUpdate(
      _id,
      updateContactoDto,
      { new: true },
    );
    if (!updateContacto) throw new NotFoundException(`Contacto is not Exists`);
    return updateContacto;
  }

  async getAllContactos(): Promise<Contacto[]> {
    return await this.ContactoModel.find().populate('user').exec();
  }

  async getAllContactosbyTipoContacto(
    tipo_Contacto: string,
  ): Promise<Contacto[]> {
    return await this.ContactoModel.find({ tipo_Contacto: tipo_Contacto })
      .populate('user')
      .exec();
  }

  async getAllContactosbyCentro(): Promise<Contacto[]> {
    return await this.ContactoModel.find().populate('user').exec();
  }

  async getContactoById(_id: string): Promise<Contacto> {
    const ContactoAlreadyExists = await this.ContactoModel.findById(_id)
      .populate('centro')
      .exec();
    if (!ContactoAlreadyExists)
      throw new NotFoundException(`Contacto is not Exists`);
    return ContactoAlreadyExists;
  }

  async deleteContacto(_id: string): Promise<Contacto> {
    const deleteContacto = await this.ContactoModel.findByIdAndDelete(_id);
    if (!deleteContacto) throw new NotFoundException(`Contacto is not Exists`);
    return deleteContacto;
  }
}