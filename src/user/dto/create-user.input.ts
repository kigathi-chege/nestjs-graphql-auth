import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsAlpha()
  @Field()
  username: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  first_name: string;

  @Field({ nullable: true })
  middle_name: string;

  @Field({ nullable: true })
  last_name: string;
}
