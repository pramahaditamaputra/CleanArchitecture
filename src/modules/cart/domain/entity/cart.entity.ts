import {IProductEntity} from '../../../product/domain/entity/product.entity';

export interface ICartEntity {
  id: number;
  products: IProductEntity[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
