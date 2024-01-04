import {ICartRepositoryImplementation} from '../domain/cart.repository';
import {ICartApi} from './datasources/api/cart.api.types';
import {
  cartDtoToEntityMapper,
  cartListDtoToEntityMapper,
} from './mapper/cart.mapper';

export const cartRepositoryImplementation = (
  api: ICartApi,
): ICartRepositoryImplementation => {
  return {
    getCart: async params => {
      const response = await api.getCart(params);
      const mappedResponse = cartDtoToEntityMapper(response);
      return mappedResponse;
    },
    getCartList: async (params?) => {
      const response = await api.getCartList(params);
      const mappedResponse = cartListDtoToEntityMapper(response);
      return mappedResponse;
    },
  };
};
