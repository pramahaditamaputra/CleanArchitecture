import {useState} from 'react';
import {usecases} from '../di/authContainer';
import {ILoginEntity} from '../../domain/entity/auth.entity';
import {ILoginParams} from '../../domain/params/auth.params';

export const useLogin = () => {
  const [data, setData] = useState<ILoginEntity>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const login = async (params: ILoginParams) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await usecases().loginUsecase.execute(params);
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

  return {data, isLoading, isError, error, login};
};
