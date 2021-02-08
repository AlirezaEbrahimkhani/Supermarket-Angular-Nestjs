import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
  constructor() {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads',
    })
  )
  uploadFile(@UploadedFile() file) {
    return { file_name: file.filename };
  }

  @Get(':imgPath')
  getFile(@Param('imgPath') image, @Res() res) {
    return res.sendFile(image, { root: 'uploads' });
  }
}
