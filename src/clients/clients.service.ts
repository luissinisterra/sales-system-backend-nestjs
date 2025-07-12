import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(Client)
    private clientsRespository: Repository<Client>
  ){}

  async create(createClientDto: CreateClientDto) {
    return await this.clientsRespository.save(createClientDto);
  }

  async findAll() {
    return await this.clientsRespository.find();
  }

  async findOne(id: number) {
    return await this.clientsRespository.findBy(id);
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    return await this.clientsRespository.update(id, updateClientDto);
  }

  async remove(id: number) {
    return await this.clientsRespository.delete(id);
  }
}
