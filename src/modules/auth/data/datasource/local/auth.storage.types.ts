import {ILoginEntity} from '../../../domain/entity/auth.entity';

interface IAuthStorage {
  // saveTokens(token: TokenEntityType): Promise<void>;
  saveUser(user: ILoginEntity): Promise<void>;
  getUser(): Promise<ILoginEntity | null>;
  //   saveLoginData(data: LogInParamType): Promise<void>;
  //   getLoginData(): Promise<LogInParamType>;
  //   wipe(): Promise<void>;
}

export type {IAuthStorage};
