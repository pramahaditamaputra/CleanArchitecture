import {cartRepositoryImplementation} from '../../data/cart.repositoryImplementation';
import {cartApi} from '../../data/datasources/api/cart.api';
import {getCartByIdtUseCase} from '../../domain/usecase/getCartByIdUsecase';
import {getCartListUseCase} from '../../domain/usecase/getCartListUsecase';

const dataSources = () => {
  return {
    cartApi: cartApi(),
  };
};

const repositories = () => {
  return {
    cartRepository: cartRepositoryImplementation(dataSources().cartApi),
  };
};

const usecases = () => {
  return {
    getCartListUseCase: getCartListUseCase(repositories().cartRepository),
    getCartByIdUseCase: getCartByIdtUseCase(repositories().cartRepository),
  };
};

export {usecases, repositories};
