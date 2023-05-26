import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => Int)
  user_id: number;
}
