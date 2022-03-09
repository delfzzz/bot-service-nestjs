import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'bots' })
export class Bot extends BaseEntity {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Unique hashid of the bot.',
  })
  @Column()
  hashid: string;

  @ApiProperty({
    description: 'Name of the bot.',
  })
  @Column({ unique: true })
  name: string;

  @ApiProperty({
    description: 'Purpose of the bot.',
  })
  @Column()
  purpose: string;

  @ApiProperty({
    description: 'SVG text image of the bot.',
  })
  @Column()
  image: string;
}
