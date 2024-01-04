import {IAuthApi} from './auth.api.types';
import {httpClient} from '../../../../../shared/libraries/axios/httpClient';
import {ILoginResponseDto} from './auth.api.responseDto';

/**
 * Creates an instance of the authentication API.
 * @returns {IAuthApi} The authentication API instance.
 */
export const authApi = (): IAuthApi => {
  return {
    /**
     * Logs in the user with the provided parameters.
     * @param {ILoginParams} params - The login parameters.
     * @returns {Promise<ILoginResponseDto>} A promise that resolves to the login response data.
     */
    login: async params => {
      const response = await httpClient.post<ILoginResponseDto>(
        '/auth/login',
        params,
      );
      return response.data;
    },
  };
};
