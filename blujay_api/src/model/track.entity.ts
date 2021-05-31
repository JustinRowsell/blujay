// item.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'track' })
export class Track extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  title: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  image: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'varchar', length: 300 })
  file: string;
}