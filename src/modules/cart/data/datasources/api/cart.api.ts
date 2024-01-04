import {ENDPOINTS} from '../../../../../shared/constants/endpoints';
import {httpClient} from '../../../../../shared/libraries/axios/httpClient';
import {
  IGetCartListResponseDto,
  IGetCartResponseDto,
} from './cart.api.responseDto';
import {ICartApi} from './cart.api.types';

export const cartApi = (): ICartApi => {
  return {
    getCart: async params => {
      const response = await httpClient.get<IGetCartResponseDto>(
        `${ENDPOINTS.PRODUCTS}/${params.id}`,
      );
      return response.data;
    },
    getCartList: async params => {
      let endpointPath = ENDPOINTS.CARTS;
      if (params?.limit) {
        endpointPath = endpointPath.concat(`?limit=${params.limit}`);
      }
      const response = await httpClient.get<IGetCartListResponseDto>(
        endpointPath,
      );
      return response.data;
    },
  };
};
