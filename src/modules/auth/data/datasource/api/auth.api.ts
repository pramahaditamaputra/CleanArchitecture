import {IAuthApi} from './auth.api.types';
import {httpClient} from '../../../../../shared/libraries/axios/httpClient';
import {ILoginResponseDto} from './auth.api.responseDto';

export const authApi = (): IAuthApi => {
  return {
    login: async params => {
      const response = await httpClient.post<ILoginResponseDto>(
        '/auth/login',
        params,
      );
      return response.data;
    },
  };
};
