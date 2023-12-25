import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 10000,
});
