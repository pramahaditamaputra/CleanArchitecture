import {ILoginRequestDto} from './auth.api.requestDto';
import {ILoginResponseDto} from './auth.api.responseDto';
export interface IAuthApi {
  login: (params: ILoginRequestDto) => Promise<ILoginResponseDto>;
}
