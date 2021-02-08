import { Product } from './product.model';

export interface User {
  products?: Product[];
  username?: string;
  password?: string;
  roleID?: number;
}
