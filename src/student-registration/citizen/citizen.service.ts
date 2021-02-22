import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import {Repository} from 'typeorm';
import { Citizen } from './entities/citizen.entity';

@Injectable()
export class CitizenService {
  constructor(
    //inject user repository for use here in UsersService as if it is part of the class
    @InjectRepository(Citizen)
    private CitizenRepository: Repository<Citizen>
  ){}

  async create(createCitizenDto: CreateCitizenDto) {
    const newCitizen: Citizen= this.CitizenRepository.create(createCitizenDto)
    return this.CitizenRepository.save(newCitizen);
    //return 'This action adds a new citizen';
  }
 
 async findAll() {
    //return `This action returns all citizen`;
    return await this.CitizenRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} citizen`;
    return await this.CitizenRepository.findOne(id);
  }

  

  async remove(id: number) {
    //return `This action removes a #${id} citizen`;
    return await this.CitizenRepository.delete(id);
  }
  
  async update( id: number, updateCitizenDto: UpdateCitizenDto ) {
    //return `This action updates a #${id} citizen`;
    return await this.CitizenRepository.update(id, updateCitizenDto) ;
  }
}
