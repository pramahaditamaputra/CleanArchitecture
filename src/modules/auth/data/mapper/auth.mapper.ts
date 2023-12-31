import {ILoginEntity} from '../../domain/entity/auth.entity';
import {ILoginParams} from '../../domain/params/auth.params';
import {ILoginRequestDto} from '../datasource/api/auth.api.requestDto';
import {ILoginResponseDto} from '../datasource/api/auth.api.responseDto';

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

export const authParamsEntityToAuthRequestDtoMapper = (
  authParamsEntity: ILoginParams,
): ILoginRequestDto => {
  return {
    username: authParamsEntity.username,
    password: authParamsEntity.password,
  };
};
