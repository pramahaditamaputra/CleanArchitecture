import type {AxiosResponse} from 'axios';

export type BaseResponse<T> = {
  data: T;
  code: string;
  statusCode: number;
  latency: string;
};

export type BaseResultResponse<T> = {
  result: T;
  code: string;
  statusCode: number;
  latency: string;
};

export type BaseErrorResponseType = {
  message: string;
  code: string;
  statusCode: number;
  error: string;
  latency: string;
};

export type BaseResponseAxios<T = null> = AxiosResponse<
  T extends BaseErrorResponseType ? BaseErrorResponseType : BaseResponse<T>
>;

export type BaseApiResponse<T = null> = BaseResponse<T> | BaseErrorResponseType;

type Pagination<T> = {
  data: T[];
  total: number;
  take: number;
  skip: number;
};

export type ApiCallErrorType = {
  error: {
    code: string;
    message: string;
  };
  data: null;
};

export type ApiCallSuccessType<ReturnData> = {
  error: null;
  data: ReturnData;
};

export type SafeApiCallType<ReturnData = null> =
  | ApiCallErrorType
  | ApiCallSuccessType<ReturnData>;

export type BaseResponsePagination<T> = BaseResponse<Pagination<T>>;

export function isApiError<T>(
  response: SafeApiCallType<T>,
): response is ApiCallErrorType {
  return response.error !== null;
}

export function isApiSuccess<T>(
  response: SafeApiCallType<T>,
): response is ApiCallSuccessType<T> {
  return response.error === null;
}
