import {IAuthRepositoryImplementation} from '../domain/auth.repository';
import {IAuthApi} from './datasource/api/auth.api.types';
import {IAuthStorage} from './datasource/local/auth.storage.types';
import {
  authResponseDtoToAuthEntityMapper,
  authParamsEntityToAuthRequestDtoMapper,
} from './mapper/auth.mapper';

/**
 * Creates an implementation of the `IAuthRepositoryImplementation` interface.
 * @param api - The instance of `IAuthApi` used for API communication.
 * @param localStorage - The instance of `IAuthStorage` used for local storage operations.
 * @returns An object that implements the `IAuthRepositoryImplementation` interface.
 */
export const authRepositoryImplementation = (
  api: IAuthApi,
  localStorage: IAuthStorage,
): IAuthRepositoryImplementation => {
  return {
    /**
     * Logs in the user with the provided parameters.
     * @param params - The login parameters.
     * @returns A promise that resolves to the authenticated user.
     */
    login: async params => {
      const mappedParams = authParamsEntityToAuthRequestDtoMapper(params);
      const res = await api.login(mappedParams);
      const mappedRes = authResponseDtoToAuthEntityMapper(res);
      await localStorage.saveUser(mappedRes);
      return mappedRes;
    },
    /**
     * Retrieves the currently logged-in user.
     * @returns A promise that resolves to the logged-in user.
     */
    getUser: async () => {
      const user = await localStorage.getUser();
      return user;
    },
  };
};
