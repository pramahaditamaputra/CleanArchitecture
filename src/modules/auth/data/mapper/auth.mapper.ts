import {ILoginEntity} from '../../domain/entity/auth.entity';
import {ILoginResponseDto} from '../datasource/api/auth.api.responseDto';

export const authToEntityMapper = (
  authDto: ILoginResponseDto,
): ILoginEntity => {
  return {
    id: authDto.id,
    email: authDto.email,
    firstName: authDto.firstName,
    gender: authDto.gender,
    image: authDto.image,
    lastName: authDto.lastName,
    token: authDto.token,
    username: authDto.username,
  };
};
