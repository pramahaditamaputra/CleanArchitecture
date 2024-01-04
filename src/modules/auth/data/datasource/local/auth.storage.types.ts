import {ILoginEntity} from '../../../domain/entity/auth.entity';

/**
 * Represents a storage interface for authentication-related data.
 */
interface IAuthStorage {
  /**
   * Saves the user data.
   * @param user The user data to be saved.
   * @returns A promise that resolves when the user data is successfully saved.
   */
  saveUser(user: ILoginEntity): Promise<void>;

  /**
   * Retrieves the user data.
   * @returns A promise that resolves with the user data, or null if no user data is found.
   */
  getUser(): Promise<ILoginEntity | null>;
}

export type {IAuthStorage};
