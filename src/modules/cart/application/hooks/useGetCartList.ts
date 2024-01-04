import {useQuery} from '@tanstack/react-query';
import {ICartEntity} from '../../domain/entity/cart.entity';
import {queryKeys} from '../../../../shared/constants/queryKeys';
import {usecases} from '../DI/cartContainer';

export const useCartListQuery = () => {
  const cartListQuery = useQuery<ICartEntity[], Error>({
    queryKey: queryKeys.carts,
    queryFn: () => usecases().getCartListUseCase.execute(),
  });

  return cartListQuery;
};
