import { Module } from '@nestjs/common';
import { DownloadService } from './download.service';
import { DownloadController } from './download.controller';
import { PdfService } from 'src/pdf/pdf.service';

@Module({
  controllers: [DownloadController],
  providers: [DownloadService ,PdfService]
})
export class DownloadModule {}
