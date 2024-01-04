import {BaseUseCase} from '../../../../shared/utils/BaseUseCase';
import {IAuthRepositoryImplementation} from '../auth.repository';
import {ILoginEntity} from '../entity/auth.entity';
import {ILoginParams} from '../params/auth.params';

/**
 * Represents a use case for logging in.
 * @param repo - The authentication repository implementation.
 * @returns A base use case that takes login parameters and returns a promise of login entity.
 */
export const loginUseCase = (
  repo: IAuthRepositoryImplementation,
): BaseUseCase<ILoginParams, Promise<ILoginEntity>> => {
  return {
    execute: (params: ILoginParams) => {
      return repo.login(params);
    },
  };
};
