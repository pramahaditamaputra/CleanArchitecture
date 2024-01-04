import {BaseUseCase} from '../../../../shared/base';
import {ICartRepositoryImplementation} from '../cart.repository';
import {ICartEntity} from '../entity/cart.entity';
import {IGetCartListParams} from '../params/cart.params';

export const getCartListUseCase = (
  repo: ICartRepositoryImplementation,
): BaseUseCase<IGetCartListParams, Promise<ICartEntity[]>> => {
  return {
    execute: (params?: IGetCartListParams) => {
      return repo.getCartList(params);
    },
  };
};
