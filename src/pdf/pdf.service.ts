import { Injectable } from '@nestjs/common';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { UpdatePdfDto } from './dto/update-pdf.dto';
import PdfDocument from 'pdfkit'
import fs from 'fs'

@Injectable()
export class PdfService {
  create(createPdfDto: CreatePdfDto) {
    return 'This action adds a new pdf';
  }

  findAll() {
    return `This action returns all pdf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pdf`;
  }

  update(id: number, updatePdfDto: UpdatePdfDto) {
    return `This action updates a #${id} pdf`;
  }

  remove(id: number) {
    return `This action removes a #${id} pdf`;
  }

   async createDocs() :Promise<Buffer>{
    const pdfBuffer : Buffer = await new Promise(rs => {
      const doc = new PdfDocument({
        size: 'LETTER',
        bufferPages: true,
      });
    doc
      .font('fonts/PalatinoBold.ttf')
      .fontSize(25)
      .text('Some text with an embedded font!', 100, 100);

        doc.text('Helo i am pro pro ' ,100,100)
        doc.text('Helo i am pro pro ' ,100,100)
        doc.text('Helo i am pro pro ' ,100,100)
        doc.text('Helo i am pro pro ' ,100,100)
        doc.text('Helo i am pro pro ' ,100,100)
        doc.text('Helo i am pro pro ' ,100,100)
    
      doc.end();

      const buffer =[]
      doc.on('data' ,buffer.push.bind(buffer))
      doc.on('end', ()=> {
        const data = Buffer.concat(buffer)
        rs(data)
      })
    })
      return pdfBuffer
   }
}
