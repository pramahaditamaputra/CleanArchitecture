import {ILoginEntity} from './entity/auth.entity';
import {ILoginParams} from './params/auth.params';
export interface IAuthRepositoryImplementation {
  login: (params: ILoginParams) => Promise<ILoginEntity>;
  getUser: () => Promise<ILoginEntity | null>;
}
