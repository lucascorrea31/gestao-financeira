import axios, { AxiosRequestConfig } from 'axios';
import { IHeader, IHttpRequest, IHttpResponse, IRequestParams } from './types';

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
  return (await axios.get<IHttpResponse<T>>(url, config)).data;
};

/**
 * @description Http post request
 * @param {string} url 
 * @param {any} body 
 * @param {IHeader | undefined} headers 
 * @returns Promise<IHttpResponse<T>>
 */
const post = async function <T,>(url: string, body: any, headers?: IHeader | undefined): Promise<IHttpResponse<T>> {
  const config: AxiosRequestConfig = {
    headers
  };
  return (await axios.post<IHttpResponse<T>>(url, body, config)).data;
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
  return (await axios.put<IHttpResponse<T>>(url, body, config)).data;
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
  return (await axios.delete<IHttpResponse<T>>(url, config)).data;
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
  return (await axios.patch<IHttpResponse<T>>(url, body, config)).data;
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
