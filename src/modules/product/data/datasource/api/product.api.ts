import {
  IGetProductListResponseDto,
  IGetProductResponseDto,
} from './product.api.responseDto';
import {httpClient} from '../../../../../shared/libraries/axios/httpClient';
import {IProductApi} from './product.api.types';

const productApi = (): IProductApi => {
  return {
    getProductList: async params => {
      let endpointPath = '/products';
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
        `/products/${params.id}`,
      );
      return response.data;
    },
    addProduct: async params => {
      await httpClient.post('/products', params);
    },
    updateProduct: async params => {
      await httpClient.put(`/products/${params.id}`, params);
    },
    deleteProduct: async params => {
      await httpClient.delete(`/products/${params.id}`);
    },
  };
};

export default productApi;
