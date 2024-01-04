import {
  IGetCartListRequestDto,
  IGetCartRequestDto,
} from './cart.api.requestDto';
import {
  IGetCartListResponseDto,
  IGetCartResponseDto,
} from './cart.api.responseDto';

export interface ICartApi {
  getCart: (params: IGetCartRequestDto) => Promise<IGetCartResponseDto>;
  getCartList: (
    params?: IGetCartListRequestDto,
  ) => Promise<IGetCartListResponseDto>;
}
