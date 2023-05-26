import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { Article } from './entities/article.entity';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { User } from 'src/user/entities/user.entity';
import { CommonService } from 'src/common/common.service';

@Resolver(() => Article)
export class ArticleResolver {
  constructor(
    private readonly articleService: ArticleService,
    private readonly commonService: CommonService,
  ) {}

  @Mutation(() => Article)
  createArticle(
    @Args('createArticleInput') createArticleInput: CreateArticleInput,
  ) {
    return this.articleService.create(createArticleInput);
  }

  @Query(() => [Article], { name: 'articles' })
  findAll() {
    return this.articleService.findAll();
  }

  @Query(() => [Article], { name: 'userArticles' })
  findUserArticles(@Args('user_id', { type: () => Int }) user_id: number) {
    return this.commonService.findUserArticles(user_id);
  }

  @Query(() => Article, { name: 'article' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.articleService.findOne(id);
  }

  @ResolveField(() => User)
  user(@Parent() article: Article): Promise<User> {
    return this.commonService.findUser(article.user_id);
  }

  @Mutation(() => Article)
  updateArticle(
    @Args('updateArticleInput') updateArticleInput: UpdateArticleInput,
  ) {
    return this.articleService.update(
      updateArticleInput.id,
      updateArticleInput,
    );
  }

  @Mutation(() => Article)
  removeArticle(@Args('id', { type: () => Int }) id: number) {
    return this.articleService.remove(id);
  }
}
