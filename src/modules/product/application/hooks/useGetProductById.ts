import {useState} from 'react';
import {IProductEntity} from '../../domain/entity/product.entity';
import {usecases} from '../di/productContainer';
import {IGetProductParams} from '../../domain/params/product.params';

export const useGetProductById = () => {
  const [product, setProduct] = useState<IProductEntity>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getProductById = async (params: IGetProductParams) => {
    setIsLoading(true);
    try {
      const response = await usecases().getProductByIdUseCase.execute(params);
      setProduct(response);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {product, isLoading, error, getProductById};
};
