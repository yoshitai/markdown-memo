import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Memo } from 'src/entities/memo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemoService {
  constructor(
    @InjectRepository(Memo)
    private readonly memoRepository: Repository<Memo>
  ){}

  // 登録
  async create(memo: Memo) {
    await this.memoRepository.insert(memo);
  }

  // 更新
  async update(title:string, memo: Memo) {
    await this.memoRepository.update(title,
      {
        title: memo.title,
        content: memo.content
      });
  }

  // タイトル指定による取得
  async findByTitle(title: string): Promise<Memo> {
    return await this.memoRepository.findOne({title: title});
  }

  // 全件取得
  async findAll(): Promise<Memo[]> {
    return await this.memoRepository.find();
  }

}
