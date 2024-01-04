import {BaseUseCase} from '../../../../shared/base';
import {ICartRepositoryImplementation} from '../cart.repository';
import {ICartEntity} from '../entity/cart.entity';
import {IGetCartParams} from '../params/cart.params';

export const getCartByIdtUseCase = (
  repo: ICartRepositoryImplementation,
): BaseUseCase<IGetCartParams, Promise<ICartEntity>> => {
  return {
    execute: async (params: IGetCartParams) => {
      return await repo.getCart(params);
    },
  };
};
