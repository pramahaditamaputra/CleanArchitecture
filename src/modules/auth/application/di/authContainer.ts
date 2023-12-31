import {authRepositoryImplementation} from '../../data/auth.repositoryImplementation';
import {authApi} from '../../data/datasource/api/auth.api';
import {authStorage} from '../../data/datasource/local/auth.storage';
import {loginUseCase} from '../../domain/usecase/login.usecase';

const dataSources = () => {
  return {
    authApi: authApi(),
    authStorage: authStorage(),
  };
};

const repositories = () => {
  return {
    authRepository: authRepositoryImplementation(
      dataSources().authApi,
      dataSources().authStorage,
    ),
  };
};

const usecases = () => {
  return {
    loginUsecase: loginUseCase(repositories().authRepository),
  };
};

export {usecases, repositories};
