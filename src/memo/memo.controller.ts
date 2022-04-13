import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { title } from 'process';
import { Memo } from 'src/entities/memo.entity';
import { MemoService } from './memo.service';

@Controller('memo')
export class MemoController {
  constructor(private readonly memoService: MemoService){}

  // 登録
  @Post("/create")
  async create(@Body() memo: Memo): Promise<void> {
    await this.memoService.create(memo);
  };

  // 更新
  @Post("/update/:title")
  async update(
    @Param("title") title: string,
    @Body() memo: Memo): Promise<void> {
    await this.memoService.update(title, memo);
  }

  // タイトル指定による取得
  @Get("/get/:title")
  async getMemo(@Param("title") title: string): Promise<Memo> {
    console.log("444444")
    return await this.memoService.findByTitle(title);
  }

  // 全件取得
  @Get("/list")
  async findAll(): Promise<Memo[]> {
    console.log("Server")
    return await this.memoService.findAll();
  }

}
