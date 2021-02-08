import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { MulterModule } from '@nestjs/platform-express';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    MongooseModule.forRoot(),
    ProductModule,
    AuthModule,
    FilesModule,
    MulterModule.register({
      dest: './uploads',
    }),
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
