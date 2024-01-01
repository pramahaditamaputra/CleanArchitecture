import {useEffect, useState} from 'react';
import {usecases} from '../di/authContainer';
import {ILoginEntity} from '../../domain/entity/auth.entity';

export const useGetUser = () => {
  const [data, setData] = useState<ILoginEntity>();
  const getUserInfo = async () => {
    const res = await usecases().getUserUsecase.execute();
    setData(res);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return {
    getUserInfo,
    data,
  };
};
