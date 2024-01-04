import {ILoginEntity} from '../../../domain/entity/auth.entity';
interface IAuthStorage {
  saveUser(user: ILoginEntity): Promise<void>;
  getUser(): Promise<ILoginEntity | null>;
}

export type {IAuthStorage};
