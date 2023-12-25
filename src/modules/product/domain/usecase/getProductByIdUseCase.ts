import {BaseUseCase} from '../../../../shared/utils/BaseUseCase';
import {IProductEntity} from '../entity/product.entity';
import {IGetProductParams} from '../params/product.params';
import {IProductRepositoryImplementation} from '../product.repository';

export const getProductByIdtUseCase = (
  repo: IProductRepositoryImplementation,
): BaseUseCase<IGetProductParams, Promise<IProductEntity>> => {
  return {
    execute: async (params: IGetProductParams) => {
      return await repo.getProduct(params);
    },
  };
};
