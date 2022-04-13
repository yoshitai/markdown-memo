import { Column, CreateDateColumn, Entity, PrimaryColumn, Timestamp } from "typeorm";

@Entity()
export class Memo {
  @PrimaryColumn({ length: 50})
  title: string

  @Column()
  content: string

  @CreateDateColumn({ comment: '登録日時' })
  readonly ins_ts?: Timestamp

}