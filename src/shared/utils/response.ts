import type {BaseErrorResponseType, BaseResponse} from '../base/BaseResponse';

function isResponseError<T>(
  response: BaseResponse<T> | BaseErrorResponseType,
): response is BaseErrorResponseType {
  return response.statusCode !== 200;
}

export {isResponseError};
