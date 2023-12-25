import {useEffect, useState} from 'react';
import {IProductEntity} from '../../domain/entity/product.entity';
import {usecases} from '../di/productContainer';

export const useGetAllProducts = () => {
  const [data, setData] = useState<IProductEntity[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const getAllProducts = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await usecases().getProductListUseCase.execute();
      setData(response);
    } catch (err) {
      if (err instanceof Error) {
        setIsError(true);
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return {data, isLoading, isError, error, getAllProducts};
};
