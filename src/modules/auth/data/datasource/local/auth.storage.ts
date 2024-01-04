import LocalStorageService from '../../../../../shared/asyncstorage/LocalStorageService';
import {ILoginEntity} from '../../../domain/entity/auth.entity';
import {IAuthStorage} from './auth.storage.types';

/**
 * Returns an instance of the authentication storage.
 * @returns An object with methods to save and retrieve user data.
 */
export const authStorage = (): IAuthStorage => {
  return {
    /**
     * Saves the user data to the local storage.
     * @param data - The user data to be saved.
     * @returns A promise that resolves when the data is saved.
     */
    async saveUser(data: ILoginEntity) {
      LocalStorageService.save('user', data);
      return Promise.resolve();
    },
    /**
     * Retrieves the user data from the local storage.
     * @returns A promise that resolves with the user data.
     */
    async getUser() {
      const user = await LocalStorageService.get('user');
      return Promise.resolve(user);
    },
  };
};
