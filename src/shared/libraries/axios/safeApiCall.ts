import {isResponseError} from '../../utils/response';
import type {
  ApiCallErrorType,
  BaseApiResponse,
  SafeApiCallType,
} from '../../base/BaseResponse';

type ApiCall<T> = () => Promise<BaseApiResponse<T>>;

type ReturnApiCallType<ReturnData, MapResponse> = (
  callback?: (data: ReturnData) => MapResponse,
) => SafeApiCallType<MapResponse>;

async function safeApiCall<ReturnData = unknown, MapResponse = ReturnData>(
  axiosCall: ApiCall<ReturnData>,
): Promise<ReturnApiCallType<ReturnData, MapResponse>> {
  try {
    const response = await axiosCall();

    if (isResponseError(response)) {
      const {code, message} = response;

      return function () {
        return {
          error: {
            code,
            message,
          },
          data: null,
        };
      };
    }

    const {data} = response;

    return function (mappedData = () => null) {
      return {
        error: null,
        data: mappedData(data),
      };
    };
  } catch (e) {
    let message: ApiCallErrorType['error'] = {
      code: 'ERR_UNKNOWN',
      message: 'Terjadi kesalahan. Coba lagi nanti.',
    };

    if (e.code === 'ERR_NETWORK' || e.message === 'Network Error') {
      message = {
        code: 'ERR_NETWORK',
        message:
          'Tidak ada koneksi internet. Cek ulang koneksi Anda dan coba lagi.',
      };
    }

    if (e.code === 'ECONNABORTED') {
      message = {
        code: 'ERR_TIMEOUT',
        message: 'Request timeout',
      };
    }

    return function () {
      return {
        error: message,
        data: null,
      };
    };
  }
}

export {safeApiCall};
