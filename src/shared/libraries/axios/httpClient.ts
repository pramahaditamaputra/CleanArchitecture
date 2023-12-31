import axios, {AxiosError, AxiosResponse} from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 10000,
});

// Menambahkan interceptor untuk penanganan kesalahan global
httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      // Tanggapan dengan status selain 2xx
      console.error(
        'Response error:',
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      // Tidak ada tanggapan dari server
      console.error('No response from server:', error.request);
    } else {
      // Kesalahan konfigurasi atau yang lainnya
      console.error('Request error:', error.message);
    }

    // Mengembalikan Promise dengan kesalahan
    return Promise.reject(error);
  },
);
