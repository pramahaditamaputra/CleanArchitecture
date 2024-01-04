/**
 * Represents the response data structure for login API.
 */
export interface ILoginResponseDto {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
