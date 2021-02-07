import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InsertProductDTO } from './product.dto';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>
  ) {}

  async insertProduct(insertProductDTO: InsertProductDTO): Promise<string> {
    const { title, description, price } = insertProductDTO;
    const newProduct = new this.productModel({
      title,
      description,
      price,
    });
    const result = await newProduct.save();
    return result.id as string;
  }

  async getAllProdcuts(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    return products;
  }

  async deleteProduct(prodId: string): Promise<void> {
    const result = await this.productModel.deleteOne({ _id: prodId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }
  }

  async getSingleProduct(productId: string): Promise<Product> {
    const product = await this.findProduct(productId);
    return product;
  }

  async updateProduct(
    productId: string,
    updateProductDTO: InsertProductDTO
  ): Promise<void> {
    const { title, description, price } = updateProductDTO;
    const updatedProduct = await this.findProduct(productId);
    if (title) {
      updatedProduct.title = title;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }
    updatedProduct.save();
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
