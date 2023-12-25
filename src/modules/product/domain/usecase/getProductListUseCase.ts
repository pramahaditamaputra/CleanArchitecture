import {BaseUseCase} from '../../../../shared/utils/BaseUseCase';
import {IProductEntity} from '../entity/product.entity';
import {IGetProductListParams} from '../params/product.params';
import {IProductRepositoryImplementation} from '../product.repository';

export const getProductListUseCase = (
  repo: IProductRepositoryImplementation,
): BaseUseCase<IGetProductListParams, Promise<IProductEntity[]>> => {
  return {
    execute: (params: IGetProductListParams) => {
      return repo.getProductList(params);
    },
  };
};
