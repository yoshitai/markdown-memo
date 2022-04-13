import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MydataModule } from './mydata/mydata.module';
import { MemoModule } from './memo/memo.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MydataModule, MemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
