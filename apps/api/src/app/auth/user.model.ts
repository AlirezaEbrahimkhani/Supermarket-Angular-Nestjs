import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  roleID: { type: Number, required: true }, // 1. Admin  2. Employee  3. Customer
  salt: { type: String, required: true },
  prodcuts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

export interface User extends mongoose.Document {
  id: string;
  username: string;
  password: string;
  roleID: number;
  salt: string;
}
