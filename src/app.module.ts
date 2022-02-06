import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { DownloadModule } from './download/download.module';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [AuthModule, UserModule, PostModule, DownloadModule, PdfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
