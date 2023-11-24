import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class League {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  company: string;
  @Column()
  participants: number;
  @CreateDateColumn()
  create_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}