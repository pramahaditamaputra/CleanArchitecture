import {ILoginEntity} from './entity/auth.entity';
import {ILoginParams} from './params/auth.params';

/**
 * Represents the implementation of the authentication repository.
 */
export interface IAuthRepositoryImplementation {
  /**
   * Logs in the user with the provided login parameters.
   * @param params The login parameters.
   * @returns A promise that resolves to the login entity.
   */
  login: (params: ILoginParams) => Promise<ILoginEntity>;

  /**
   * Retrieves the currently logged-in user.
   * @returns A promise that resolves to the login entity if a user is logged in, or null otherwise.
   */
  getUser: () => Promise<ILoginEntity | null>;
}
