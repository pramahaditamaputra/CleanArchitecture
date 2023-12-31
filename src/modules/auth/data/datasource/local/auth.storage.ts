// import LocalStorageService from '../../../../../shared/asyncstorage/LocalStorageService';
// import {IAuthStorage} from './auth.storage.types';

const authStorage = () => {
  return {
    async saveTokens() {
      //   authenticationStorageService.setAccessToken(tokens.accessToken);
      //   authenticationStorageService.setRefreshToken(tokens.refreshToken);
      //   return Promise.resolve();
    },
    async saveUser() {
      //   authenticationStorageService.setUser(user);
      //   return Promise.resolve();
    },
    async getUser() {
      //   const user = authenticationStorageService.user() as UserEntityType | null;
      //   return Promise.resolve(user);
    },
    async saveLoginData() {
      //   LocalStorageService.save(localStorageKeys.LOGIN, data);
      //   return Promise.resolve();
    },
    async getLoginData() {
      //   const userData = await LocalStorageService.get<LogInParamType>(
      //     localStorageKeys.LOGIN,
      //   );
      //   return userData;
    },
    async wipe() {
      //   await LocalStorageService.clear();
      //   return Promise.resolve();
    },
  };
};

export default authStorage;
