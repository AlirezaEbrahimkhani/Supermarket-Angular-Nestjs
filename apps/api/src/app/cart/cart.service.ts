import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../auth/user.model';
import { ResponseData } from '../shared/response.model';
import { CartDTO } from './cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getCartData(user: User): Promise<User[]> {
    const { username } = user;
    const result = await this.userModel.find({ username }).populate('products');
    return result;
  }

  async addProductCart(
    queryParams: CartDTO,
    user: User
  ): Promise<ResponseData> {
    const { username } = user;
    const { productID, delFlage } = queryParams;
    const userData: User = await this.findUser(username);
    switch (Number(delFlage)) {
      case 0:
        userData.products.push(productID);
        userData.save();
        return { Data: [], Message: '', Success: true };
      case 1:
        let result = productID.split(',');
        userData.products = [];
        userData.products = result;
        userData.save();
        return { Data: [], Message: '', Success: true };
    }
  }

  private async findUser(username: string): Promise<User> {
    let product;
    try {
      product = await this.userModel.find({ username }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product[0];
  }
}
