import {AxiosError} from 'axios';
import {ILoginEntity} from '../../domain/entity/auth.entity';
import {ILoginParams} from '../../domain/params/auth.params';
import {usecases} from '../di/authContainer';
import {useMutation} from '@tanstack/react-query';

export const useLogin = () => {
  const login = useMutation<ILoginEntity, AxiosError, ILoginParams>({
    mutationFn: async (params: ILoginParams) => {
      const res = await usecases().loginUsecase.execute(params);
      return res;
    },
    onMutate: async _variables => {
      console.log('ON MUTATE');
    },
    onError: async (error, _variables, _context) => {
      console.log('ON ERROR', error);
    },
    onSuccess: async (_data, _variables, _context) => {
      console.log('ON SUCCESS');
    },
    onSettled: async (_data, _error, _variables, _context) => {
      if (_error) {
        console.log('ON SETTLED ERROR');
        return;
      }
      console.log('ON SETTLED ERROR OR SUCCESS');
    },
  });

  return login;
};
