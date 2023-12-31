import {queryKeys} from '../../../../shared/constants/queryKeys';
import {usecases} from '../di/productContainer';
import {useQuery} from '@tanstack/react-query';
import {IProductEntity} from '../../domain/entity/product.entity';

export const useProductListQuery = () => {
  const productListQuery = useQuery<IProductEntity[], Error>({
    queryKey: queryKeys.products,
    queryFn: () => usecases().getProductListUseCase.execute(),
  });

  return productListQuery;
};
