import {ILoginEntity} from '../../domain/entity/auth.entity';
import {ILoginParams} from '../../domain/params/auth.params';
import {ILoginRequestDto} from '../datasource/api/auth.api.requestDto';
import {ILoginResponseDto} from '../datasource/api/auth.api.responseDto';

/**
 * Maps an authentication response DTO to an authentication entity.
 * @param authResponseDto The authentication response DTO to be mapped.
 * @returns The mapped authentication entity.
 */
export const authResponseDtoToAuthEntityMapper = (
  authResponseDto: ILoginResponseDto,
): ILoginEntity => {
  return {
    id: authResponseDto.id,
    email: authResponseDto.email,
    firstName: authResponseDto.firstName,
    gender: authResponseDto.gender,
    image: authResponseDto.image,
    lastName: authResponseDto.lastName,
    token: authResponseDto.token,
    username: authResponseDto.username,
  };
};

/**
 * Maps an authentication parameters entity to an authentication request DTO.
 * @param authParamsEntity The authentication parameters entity to be mapped.
 * @returns The mapped authentication request DTO.
 */
export const authParamsEntityToAuthRequestDtoMapper = (
  authParamsEntity: ILoginParams,
): ILoginRequestDto => {
  return {
    username: authParamsEntity.username,
    password: authParamsEntity.password,
  };
};
