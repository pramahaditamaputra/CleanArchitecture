import {usecases} from '../di/authContainer';

/**
 * Custom hook to get user information.
 * @returns An object with a function `getUserInfo` that returns a promise with the user information.
 */
export const useGetUser = () => {
  /**
   * Retrieves user information.
   * @returns {Promise<any>} The user information.
   */
  const getUserInfo = async () => {
    const res = await usecases().getUserUsecase.execute();
    return res;
  };

  return {
    getUserInfo,
  };
};
