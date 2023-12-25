import {authRepositoryImplementation} from '../../data/auth.repositoryImplementation';
import {authApi} from '../../data/datasource/api/auth.api';
import {loginUseCase} from '../../domain/usecase/login.usecase';

const dataSources = () => {
  return {
    authApi: authApi(),
  };
};

const repositories = () => {
  return {
    authRepository: authRepositoryImplementation(dataSources().authApi),
  };
};

const usecases = () => {
  return {
    loginUsecase: loginUseCase(repositories().authRepository),
  };
};

export {usecases, repositories};
