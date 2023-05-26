import { Injectable } from '@nestjs/common';
import { ArticleService } from 'src/article/article.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CommonService {
  constructor(
    private userService: UserService,
    private articleService: ArticleService,
  ) {}

  async findUserArticles(id: number) {
    return this.articleService.findUserArticles(id);
  }

  async findUser(id: number) {
    return this.userService.findOne(id);
  }
}
