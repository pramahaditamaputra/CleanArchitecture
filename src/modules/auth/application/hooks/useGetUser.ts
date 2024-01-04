import {usecases} from '../di/authContainer';

export const useGetUser = () => {
  const getUserInfo = async () => {
    const res = await usecases().getUserUsecase.execute();
    return res;
  };

  return {
    getUserInfo,
  };
};
