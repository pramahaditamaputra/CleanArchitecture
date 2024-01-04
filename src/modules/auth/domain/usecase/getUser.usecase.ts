import {BaseUseCase} from '../../../../shared/utils/BaseUseCase';
import {IAuthRepositoryImplementation} from '../auth.repository';
import {ILoginEntity} from '../entity/auth.entity';

export const getUserUseCase = (
  repo: IAuthRepositoryImplementation,
): BaseUseCase<null, Promise<ILoginEntity>> => {
  return {
    execute: () => {
      return repo.getUser();
    },
  };
};
