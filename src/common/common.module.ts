import { Module, forwardRef } from '@nestjs/common';
import { CommonService } from './common.service';
import { ArticleModule } from 'src/article/article.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [forwardRef(() => ArticleModule), forwardRef(() => UserModule)],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
