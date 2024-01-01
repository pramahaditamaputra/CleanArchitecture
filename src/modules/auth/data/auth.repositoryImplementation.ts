import {IAuthRepositoryImplementation} from '../domain/auth.repository';
import {IAuthApi} from './datasource/api/auth.api.types';
import {IAuthStorage} from './datasource/local/auth.storage.types';
import {
  authResponseDtoToAuthEntityMapper,
  authParamsEntityToAuthRequestDtoMapper,
} from './mapper/auth.mapper';

export const authRepositoryImplementation = (
  api: IAuthApi,
  localStorage: IAuthStorage,
): IAuthRepositoryImplementation => {
  return {
    login: async params => {
      const mappedParams = authParamsEntityToAuthRequestDtoMapper(params);
      const res = await api.login(mappedParams);
      const mappedRes = authResponseDtoToAuthEntityMapper(res);
      await localStorage.saveUser(mappedRes);
      return mappedRes;
    },
    getUser: async () => {
      const user = await localStorage.getUser();
      return user;
    },
  };
};
