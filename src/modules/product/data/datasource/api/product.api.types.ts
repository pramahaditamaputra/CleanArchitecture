import {
  IAddProductRequestDto,
  IDeleteProductRequestDto,
  IGetProductListRequestDto,
  IGetProductRequestDto,
  IUpdateProductRequestDto,
} from './product.api.requestDto';
import {
  IGetProductListResponseDto,
  IGetProductResponseDto,
} from './product.api.responseDto';

export interface IProductApi {
  getProduct: (
    params: IGetProductRequestDto,
  ) => Promise<IGetProductResponseDto>;
  getProductList: (
    params?: IGetProductListRequestDto,
  ) => Promise<IGetProductListResponseDto>;
  addProduct: (params: IAddProductRequestDto) => Promise<void>;
  updateProduct: (params: IUpdateProductRequestDto) => Promise<void>;
  deleteProduct: (params: IDeleteProductRequestDto) => Promise<void>;
}
