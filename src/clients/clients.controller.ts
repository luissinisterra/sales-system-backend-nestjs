import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ResponseClientDTO } from './dto/response-client.dto';

@Controller('api/v1/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto): Promise<ResponseClientDTO> {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll(): Promise<ResponseClientDTO[] | null> {
    return this.clientsService.findAll();
  }

  @Get(':id') 
  findOne(@Param('id') id: string): Promise<ResponseClientDTO | null> {
    return this.clientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto): Promise<ResponseClientDTO | null> {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.clientsService.remove(+id);
    return { message: "El cliente fué eliminado exitosamente." }; 
  }
}
