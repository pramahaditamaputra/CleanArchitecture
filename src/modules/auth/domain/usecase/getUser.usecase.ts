import {BaseUseCase} from '../../../../shared/utils/BaseUseCase';
import {IAuthRepositoryImplementation} from '../auth.repository';
import {ILoginEntity} from '../entity/auth.entity';

/**
 * Retrieves the user information from the repository.
 *
 * @param repo - The authentication repository implementation.
 * @returns A promise that resolves to the login entity.
 */
export const getUserUseCase = (
  repo: IAuthRepositoryImplementation,
): BaseUseCase<null, Promise<ILoginEntity>> => {
  return {
    execute: () => {
      return repo.getUser();
    },
  };
};
