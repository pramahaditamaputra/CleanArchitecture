import {
  IAddProductRequestDto,
  IDeleteProductRequestDto,
  IGetProductRequestDto,
  IUpdateProductRequestDto,
} from './product.api.requestDto';
import {
  IGetProductListResponseDto,
  IGetProductResponseDto,
} from './product.api.responseDto';
import {httpClient} from '../../../../../shared/libraries/axios/httpClient';
import {IProductApi} from './product.api.types';

const productApi = (): IProductApi => {
  return {
    getProductList: async () => {
      const response = await httpClient.get<IGetProductListResponseDto>(
        '/products',
      );
      return response.data;
    },
    getProduct: async (params: IGetProductRequestDto) => {
      const response = await httpClient.get<IGetProductResponseDto>(
        `/products/${params.id}`,
      );
      return response.data;
    },
    addProduct: async (params: IAddProductRequestDto) => {
      await httpClient.post('/products', params);
    },
    updateProduct: async (params: IUpdateProductRequestDto) => {
      await httpClient.put(`/products/${params.id}`, params);
    },
    deleteProduct: async (params: IDeleteProductRequestDto) => {
      await httpClient.delete(`/products/${params.id}`);
    },
  };
};

export default productApi;
