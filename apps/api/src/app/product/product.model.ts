import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image_src: { type: String, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export interface Product extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  price: number;
  image_src: string;
}
