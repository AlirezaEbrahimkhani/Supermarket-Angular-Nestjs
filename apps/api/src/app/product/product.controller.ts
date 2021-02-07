import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { GetUserDTO } from '../auth/auth.dto';
import { GetUser } from '../auth/get-user.decorator';
import { InsertProductDTO } from './product.dto';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addProduct(
    @GetUser() user: GetUserDTO,
    @Body() insertProductDTO: InsertProductDTO
  ): Promise<{ id: string }> {
    const { roleID } = user;
    if (roleID === 1) {
      const generatedId = await this.productService.insertProduct(
        insertProductDTO
      );
      return { id: generatedId };
    } else {
      throw new UnauthorizedException("You Don't have Permision !");
    }
  }

  @Get(':id')
  async getSingleProduct(@Param('id') productID): Promise<Product> {
    const product = await this.productService.getSingleProduct(productID);
    return product;
  }

  @Get()
  async getAllProduct(): Promise<Product[]> {
    let products;
    products = await this.productService.getAllProdcuts();
    return products;
  }

  @Delete()
  async removeProduct(@Query() params): Promise<any> {
    const { productID } = params;
    await this.productService.deleteProduct(productID);
    return null;
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') productId: string,
    @Body() updateProductDTO: InsertProductDTO
  ): Promise<any> {
    await this.productService.updateProduct(productId, updateProductDTO);
    return null;
  }
}
