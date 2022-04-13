import { Module } from '@nestjs/common';
import { MydataService } from './mydata.service';
import { MydataController } from './mydata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mydata } from 'src/entities/mydata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mydata])],
  providers: [MydataService],
  controllers: [MydataController]
})
export class MydataModule {}
