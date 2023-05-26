import { Injectable } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { Article } from './entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  async create(createArticleInput: CreateArticleInput): Promise<Article> {
    const newArticle = this.articleRepository.create(createArticleInput);
    return this.articleRepository.save(newArticle);
  }

  async findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async findOne(id: number): Promise<Article> {
    return this.articleRepository.findOneOrFail({ where: { id } });
  }

  async findUserArticles(id: number) {
    return this.articleRepository.findBy({ user_id: id });
  }

  async update(
    id: number,
    updateArticleInput: UpdateArticleInput,
  ): Promise<Article> {
    await this.articleRepository.update(id, updateArticleInput);
    return await this.findOne(id);
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
