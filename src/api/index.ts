import axios, { AxiosInstance, AxiosPromise, ResponseType } from 'axios';
import { stringify } from 'qs';
// import { handleError, handleResponse } from './error.interceptor';

export type EndpointConfig = {
  method: 'post' | 'get' | 'patch' | 'put';
  path: string;
  data?: Object;
  headers?: Object;
  params?: Object;
  responseType?: ResponseType;
};

// default headers
const DefaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://cat-fact.herokuapp.com',
  headers: { ...DefaultHeaders },
  timeout: 15000,
  paramsSerializer(params: Object) {
    return stringify(params, { arrayFormat: 'repeat' });
  },
});

/**
 *
 * @param config configurações da requisição
 * @template T: Define um tipo de retorno
 */
export const requestApi = async <T>(
  config: EndpointConfig,
): Promise<AxiosPromise<T>> => {
  const { data, path, headers, params, method, responseType } = config;


  let requestPromise = undefined;
  switch(method){
    case 'get':
      requestPromise = axiosInstance.get<T>(path, {
        headers,
        params,
        responseType,
      });
      break;
    case 'post':
      requestPromise = axiosInstance.post<T>(path, data, {
        headers,
        params,
        responseType,
      })
      break;
    case 'patch':
      requestPromise = axiosInstance.patch<T>(path, data, {
        headers,
        params,
        responseType,
      })
      break;
    case 'put':
      requestPromise = axiosInstance.patch<T>(path, data, {
        headers,
        params,
        responseType,
      })
      break;
  }
  return requestPromise;
};
