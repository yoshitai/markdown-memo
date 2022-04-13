import { Module } from '@nestjs/common';
import { MemoService } from './memo.service';
import { MemoController } from './memo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memo } from 'src/entities/memo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Memo])],
  providers: [MemoService],
  controllers: [MemoController]
})
export class MemoModule {}
