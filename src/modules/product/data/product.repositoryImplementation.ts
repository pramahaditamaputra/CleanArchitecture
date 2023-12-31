import {IProductRepositoryImplementation} from '../domain/product.repository';
import {IProductApi} from './datasource/api/product.api.types';
import {
  addProductParamsToRequestDtoMapper,
  productListDtoToEntityMapper,
} from './mapper/product.mapper';

export const productRepositoryImplementation = (
  api: IProductApi,
): IProductRepositoryImplementation => {
  return {
    getProductList: async params => {
      const res = await api.getProductList(params);
      return productListDtoToEntityMapper(res);
    },
    getProduct: async params => {
      return await api.getProduct(params);
    },
    addProduct: async params => {
      const mappedParams = addProductParamsToRequestDtoMapper(params);
      await api.addProduct(mappedParams);
    },
    updateProduct: async params => {
      await api.updateProduct(params);
    },
    deleteProduct: async params => {
      await api.deleteProduct(params);
    },
  };
};
