import {IProductEntity} from './entity/product.entity';
import {
  IAddProductParams,
  IDeleteProductParams,
  IGetProductListParams,
  IGetProductParams,
  IUpdateProductParams,
} from './params/product.params';

export interface IProductRepositoryImplementation {
  getProductList(params?: IGetProductListParams): Promise<IProductEntity[]>;
  getProduct(params: IGetProductParams): Promise<IProductEntity>;
  addProduct(params: IAddProductParams): Promise<void>;
  updateProduct(params: IUpdateProductParams): Promise<void>;
  deleteProduct(params: IDeleteProductParams): Promise<void>;
}
