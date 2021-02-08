import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../auth/user.model';
import { ProductSchema } from '../product/product.model';
import { CartController } from './cart.comtroller';
import { CartService } from './cart.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
