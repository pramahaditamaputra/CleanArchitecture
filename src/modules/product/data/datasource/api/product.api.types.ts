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
  getProductList: (
    params: IGetProductListRequestDto,
  ) => Promise<IGetProductListResponseDto>;
  getProduct: (
    params: IGetProductRequestDto,
  ) => Promise<IGetProductResponseDto>;
  addProduct: (params: IAddProductRequestDto) => Promise<void>;
  updateProduct: (params: IUpdateProductRequestDto) => Promise<void>;
  deleteProduct: (params: IDeleteProductRequestDto) => Promise<void>;
}
