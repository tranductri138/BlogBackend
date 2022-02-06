import { Controller, Get, Post, Body, StreamableFile , Response } from '@nestjs/common';
import { createReadStream } from 'fs';
import { PdfService } from 'src/pdf/pdf.service';
import { DownloadService } from './download.service';
import { CreateDownloadDto } from './dto/create-download.dto';


@Controller('download')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService, 
    private readonly pdfService: PdfService) {}

  @Post()
  create(@Body() createDownloadDto: CreateDownloadDto) {
    return this.downloadService.create(createDownloadDto);
  }

  @Get('file')
  async getFile(@Response({ passthrough : true }) res) {
    const file  = await this.pdfService.createDocs() 
    console.log(file);
    res.contentType('application/pdf')
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': file.length,
    })
    return new StreamableFile(file);
  }
}
