import {ICartEntity} from './entity/cart.entity';
import {IGetCartListParams, IGetCartParams} from './params/cart.params';

export interface ICartRepositoryImplementation {
  getCart: (params: IGetCartParams) => Promise<ICartEntity>;
  getCartList: (params?: IGetCartListParams) => Promise<ICartEntity[]>;
}
