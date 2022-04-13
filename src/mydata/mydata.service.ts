import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mydata } from 'src/entities/mydata.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MydataService {
  constructor(
    @InjectRepository(Mydata)
    private readonly mydataRepository: Repository<Mydata>
  ) {}

  getAll(): Promise<Mydata[]> {
    return this.mydataRepository.find();
  }
}
