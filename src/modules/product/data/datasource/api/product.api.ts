import {
  IGetProductListResponseDto,
  IGetProductResponseDto,
} from './product.api.responseDto';
import {httpClient} from '../../../../../shared/libraries/axios/httpClient';
import {IProductApi} from './product.api.types';
import {ENDPOINTS} from '../../../../../shared/constants/endpoints';

export const productApi = (): IProductApi => {
  return {
    getProductList: async params => {
      let endpointPath = ENDPOINTS.PRODUCTS;
      if (params?.limit) {
        endpointPath = endpointPath.concat(`?limit=${params.limit}`);
      }
      const response = await httpClient.get<IGetProductListResponseDto>(
        endpointPath,
      );
      return response.data;
    },
    getProduct: async params => {
      const response = await httpClient.get<IGetProductResponseDto>(
        `${ENDPOINTS.PRODUCTS}/${params.id}`,
      );
      return response.data;
    },
    addProduct: async params => {
      await httpClient.post(ENDPOINTS.PRODUCTS, params);
    },
    updateProduct: async params => {
      await httpClient.put(`${ENDPOINTS.PRODUCTS}/${params.id}`, params);
    },
    deleteProduct: async params => {
      await httpClient.delete(`${ENDPOINTS.PRODUCTS}/${params.id}`);
    },
  };
};
