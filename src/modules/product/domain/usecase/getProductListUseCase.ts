import {BaseUseCase} from '../../../../shared/utils/BaseUseCase';
import {IProductEntity} from '../entity/product.entity';
import {IProductRepositoryImplementation} from '../product.repository';

export const getProductListUseCase = (
  repo: IProductRepositoryImplementation,
): BaseUseCase<null, Promise<IProductEntity[]>> => {
  return {
    execute: () => {
      return repo.getProductList();
    },
  };
};
