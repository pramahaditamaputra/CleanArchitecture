// import LocalStorageService from '../../../../../shared/asyncstorage/LocalStorageService';
// import {IAuthStorage} from './auth.storage.types';

import LocalStorageService from '../../../../../shared/asyncstorage/LocalStorageService';
import {ILoginEntity} from '../../../domain/entity/auth.entity';
import {IAuthStorage} from './auth.storage.types';

export const authStorage = (): IAuthStorage => {
  return {
    async saveUser(data: ILoginEntity) {
      LocalStorageService.save('user', data);
      return Promise.resolve();
    },
  };
};
