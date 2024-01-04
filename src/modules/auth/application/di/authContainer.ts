import {authRepositoryImplementation} from '../../data/auth.repositoryImplementation';
import {authApi} from '../../data/datasource/api/auth.api';
import {authStorage} from '../../data/datasource/local/auth.storage';
import {getUserUseCase} from '../../domain/usecase/getUser.usecase';
import {loginUseCase} from '../../domain/usecase/login.usecase';

/**
 * Returns the data sources for the authentication module.
 * @returns {Object} The data sources object containing the authApi and authStorage.
 */
const dataSources = () => {
  return {
    authApi: authApi(),
    authStorage: authStorage(),
  };
};

/**
 * Returns the repositories object containing the authRepository.
 * @returns {Object} The repositories object.
 */
const repositories = () => {
  return {
    authRepository: authRepositoryImplementation(
      dataSources().authApi,
      dataSources().authStorage,
    ),
  };
};

/**
 * Returns an object containing the loginUsecase and getUserUsecase functions.
 * @returns {Object} An object with loginUsecase and getUserUsecase functions.
 */
const usecases = () => {
  return {
    loginUsecase: loginUseCase(repositories().authRepository),
    getUserUsecase: getUserUseCase(repositories().authRepository),
  };
};

/**
 * Exported modules for authentication container.
 * @module authContainer
 * @exports usecases - The use cases module.
 * @exports repositories - The repositories module.
 */
export {usecases, repositories};
