import {IAuthRepositoryImplementation} from '../domain/auth.repository';
import {IAuthApi} from './datasource/api/auth.api.types';
import {authToEntityMapper} from './mapper/auth.mapper';

export const authRepositoryImplementation = (
  api: IAuthApi,
): IAuthRepositoryImplementation => {
  return {
    login: async params => {
      const res = await api.login(params);
      const mappedRes = authToEntityMapper(res);
      return mappedRes;
    },
  };
};
