import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Article {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Unique Identifier' })
  id: number;

  @Column()
  @Field()
  title: string;

  @Column({ unique: true })
  @Field()
  slug: string;

  @Column()
  @Field()
  body: string;

  @Column()
  @Field()
  excerpt: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  mainImage?: string;

  @Column()
  @Field(() => Int)
  user_id: number;

  @ManyToOne(() => User, (user) => user.articles)
  @Field(() => User)
  user: User;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}
