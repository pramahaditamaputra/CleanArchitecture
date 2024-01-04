import {IGetProductResponseDto} from '../../../../product/data/datasource/api/product.api.responseDto';

export interface IGetCartResponseDto {
  id: number;
  products: IGetProductResponseDto[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface IGetCartListResponseDto {
  carts: IGetCartResponseDto[];
  total: number;
  skip: number;
  limit: number;
}
