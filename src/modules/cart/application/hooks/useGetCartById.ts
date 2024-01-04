import {useQuery} from '@tanstack/react-query';
import {ICartEntity} from '../../domain/entity/cart.entity';
import {queryKeys} from '../../../../shared/constants/queryKeys';
import {usecases} from '../DI/cartContainer';

type TUseCartQueryParams = {
  id: number;
};

export const useCartQuery = (params: TUseCartQueryParams) => {
  const cartQuery = useQuery<ICartEntity, Error>({
    queryKey: queryKeys.cart(params.id),
    queryFn: () => usecases().getCartByIdUseCase.execute(),
  });

  return cartQuery;
};
