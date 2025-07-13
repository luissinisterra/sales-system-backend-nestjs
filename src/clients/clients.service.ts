import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { ResponseClientDTO } from './dto/response-client.dto';

@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>
  ){}

  async create(createClientDto: CreateClientDto): Promise<ResponseClientDTO> {
    const client: Client = this.clientsRepository.create(createClientDto);
    
    const savedClient: Client = await this.clientsRepository.save(client);

    return plainToInstance(ResponseClientDTO, savedClient);
  }

  async findAll(): Promise<ResponseClientDTO[] | null> {
    const clients: Client[] = await this.clientsRepository.find();

    return plainToInstance(ResponseClientDTO, clients);
  }

  async findOne(id: number): Promise<ResponseClientDTO | null> {
    const client: Client | null = await this.clientsRepository.findOneBy({ id });

    if (!client) {
      throw new NotFoundException(`El cliente con el id: ${id} no fué encontrado.`);
    }

    return plainToInstance(ResponseClientDTO, client)
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<ResponseClientDTO | null> {
    const client: Client | null = await this.clientsRepository.findOneBy({ id });

    if (!client) {
      throw new NotFoundException(`El cliente con el id: ${id} no fué encontrado.`);
    }

    await this.clientsRepository.update(id, updateClientDto);

    const updatedClient = await this.clientsRepository.findOneBy({ id });

    return plainToInstance(ResponseClientDTO, updatedClient);
  }

  async remove(id: number): Promise<void> {
    const client: Client | null = await this.clientsRepository.findOneBy({ id });

    if (!client) {
      throw new NotFoundException(`El cliente con el id: ${id} no fué encontrado.`);
    }

    await this.clientsRepository.delete(id);
  }
}
