import {ILoginRequestDto} from './auth.api.requestDto';
import {ILoginResponseDto} from './auth.api.responseDto';

/**
 * Represents the interface for the Auth API.
 */
export interface IAuthApi {
  /**
   * Performs a login operation.
   * @param params - The login request parameters.
   * @returns A promise that resolves to the login response.
   */
  login: (params: ILoginRequestDto) => Promise<ILoginResponseDto>;
}
