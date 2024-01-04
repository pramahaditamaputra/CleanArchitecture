import {IAuthApi} from './auth.api.types';
import {httpClient} from '../../../../../shared/libraries/axios/httpClient';
import {ILoginResponseDto} from './auth.api.responseDto';
import {ENDPOINTS} from '../../../../../shared/constants/endpoints';

export const authApi = (): IAuthApi => {
  return {
    login: async params => {
      const response = await httpClient.post<ILoginResponseDto>(
        ENDPOINTS.LOGIN,
        params,
      );
      return response.data;
    },
  };
};
