import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number
  ): Promise<{ id: string }> {
    const generatedId = await this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice
    );
    return { id: generatedId };
  }

  @Get(':id')
  async getSingleProduct(@Param('id') productID): Promise<Product> {
    const product = await this.productService.getSingleProduct(productID);
    return product;
  }

  @Get()
  async getAllProduct(): Promise<Product[]> {
    const products = await this.productService.getAllProdcuts();
    return products;
  }

  @Delete()
  async removeProduct(@Query() params) {
    const { productID } = params;
    await this.productService.deleteProduct(productID);
    return null;
  }
}
