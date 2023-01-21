import axios, { AxiosRequestConfig } from 'axios';
import { INTER_BANK_CRT, INTER_BANK_KEY } from '@/utils/config';
import { HttpResponseStatusCode, IHeader, IHttpRequest, IHttpResponse, IRequestParams } from './types';

import https from 'https';

/**
 * @description Http get request
 * @param {string} url 
 * @param {IHeader | undefined} headers 
 * @param {IRequestParams | undefined} params 
 * @returns Promise<IHttpResponse<T>>
 */
const get = async function <T,>(url: string, headers?: IHeader | undefined, params?: IRequestParams | undefined): Promise<IHttpResponse<T>> {
  const config: AxiosRequestConfig = {
    headers,
    params
  };
  const response = await axios.get<T>(url, config);
  return {
    statusCode: response.status,
    data: response.data,
    message: response.statusText
  } as IHttpResponse<T>;
};

/**
 * @description Http post request
 * @param {string} url 
 * @param {any} body 
 * @param {IHeader | undefined} headers 
 * @returns Promise<IHttpResponse<T>>
 */
const post = async function <T,>(url: string, body: any, headers?: IHeader | undefined, hasHttpsAgent?: boolean): Promise<IHttpResponse<T>> {
  const config: AxiosRequestConfig = {
    headers,
    withCredentials: hasHttpsAgent,
    httpsAgent: httpsAgent,
  };
  const response = await axios.post<T>(url, body, config);
  return {
    statusCode: response.status,
    data: response.data,
    message: response.statusText
  } as IHttpResponse<T>;
};

/**
 * @description Http put request
 * @param {string} url 
 * @param {any} body 
 * @param {IHeader | undefined} headers 
 * @returns Promise<IHttpResponse<T>>
 */
const put = async function <T,>(url: string, body: any, headers?: IHeader | undefined): Promise<IHttpResponse<T>> {
  const config: AxiosRequestConfig = {
    headers
  };
  const response = await axios.put<T>(url, body, config);
  return {
    statusCode: response.status,
    data: response.data,
    message: response.statusText
  } as IHttpResponse<T>;
};

/**
 * @description Http delete request
 * @param {string} url 
 * @param {IHeader | undefined} headers 
 * @returns Promise<IHttpResponse<T>>
 */
const del = async function <T,>(url: string, headers?: IHeader | undefined): Promise<IHttpResponse<T>> {
  const config: AxiosRequestConfig = {
    headers
  };
  const response = await axios.delete<T>(url, config);
  return {
    statusCode: response.status,
    data: response.data,
    message: response.statusText
  } as IHttpResponse<T>;
};

/**
 * @description Http patch request
 * @param {string} url 
 * @param {any} body 
 * @param {IHeader | undefined} headers 
 * @returns Promise<IHttpResponse<T>>
 */
const patch = async function <T,>(url: string, body?: any, headers?: IHeader | undefined): Promise<IHttpResponse<T>> {
  const config: AxiosRequestConfig = {
    headers
  };
  const response = await axios.patch<T>(url, body, config);
  return {
    statusCode: response.status,
    data: response.data,
    message: response.statusText
  } as IHttpResponse<T>;
};

/**
 * @description Http request wrapper using axios
 * @type {IHttpRequest}
 */
export const HttpRequest: IHttpRequest = {
  get,
  post,
  put,
  delete: del,
  patch
};

const httpsAgent = new https.Agent({
  cert: INTER_BANK_CRT,
  key: INTER_BANK_KEY
});