import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.model';
import { CartDTO } from './cart.dto';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get()
  async getCartData(@GetUser() user:User): Promise<User[]> {
    return await this.cartService.getCartData(user);
  }

  @Post()
  async addProductCart(@GetUser() user: User, @Query() queryParams: CartDTO) {
    return await this.cartService.addProductCart(queryParams , user);
  }
}
