import {BaseUseCase} from '../../../../shared/utils/BaseUseCase';
import {IAuthRepositoryImplementation} from '../auth.repository';
import {ILoginEntity} from '../entity/auth.entity';
import {ILoginParams} from '../params/auth.params';

export const loginUseCase = (
  repo: IAuthRepositoryImplementation,
): BaseUseCase<ILoginParams, Promise<ILoginEntity>> => {
  return {
    execute: (params: ILoginParams) => {
      return repo.login(params);
    },
  };
};
