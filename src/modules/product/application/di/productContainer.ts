import {productApi} from '../../data/datasource/api/product.api';
import {productRepositoryImplementation} from '../../data/product.repositoryImplementation';
import {getProductByIdtUseCase} from '../../domain/usecase/getProductByIdUseCase';
import {getProductListUseCase} from '../../domain/usecase/getProductListUseCase';

const dataSources = () => {
  return {
    productApi: productApi(),
  };
};

const repositories = () => {
  return {
    productRepository: productRepositoryImplementation(
      dataSources().productApi,
    ),
  };
};

const usecases = () => {
  return {
    getProductListUseCase: getProductListUseCase(
      repositories().productRepository,
    ),
    getProductByIdUseCase: getProductByIdtUseCase(
      repositories().productRepository,
    ),
  };
};

export {usecases, repositories};
