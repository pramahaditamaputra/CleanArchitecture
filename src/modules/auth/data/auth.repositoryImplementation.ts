import {IAuthRepositoryImplementation} from '../domain/auth.repository';
import {IAuthApi} from './datasource/api/auth.api.types';
import {
  authResponseDtoToAuthEntityMapper,
  authParamsEntityToAuthRequestDtoMapper,
} from './mapper/auth.mapper';

export const authRepositoryImplementation = (
  api: IAuthApi,
): IAuthRepositoryImplementation => {
  return {
    login: async params => {
      const mappedParams = authParamsEntityToAuthRequestDtoMapper(params);
      const res = await api.login(mappedParams);
      const mappedRes = authResponseDtoToAuthEntityMapper(res);
      return mappedRes;
    },
  };
};
