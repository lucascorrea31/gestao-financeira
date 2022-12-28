import axios, { AxiosRequestConfig } from 'axios';
import { IHeader, IHttpRequest, IHttpResponse, IRequestParams } from './types';

/**
 * @description Http request wrapper using axios
 * @type {IHttpRequest}
 */
export const HttpRequest: IHttpRequest = {
  /**
   * @description Http get request
   * @param {string} url 
   * @param {IHeader | undefined} headers 
   * @param {IRequestParams | undefined} params 
   */
  get: async function <T = any>(url: string, headers?: IHeader | undefined, params?: IRequestParams | undefined): Promise<IHttpResponse<T>> {
    const config: AxiosRequestConfig = {
      headers,
      params
    };
    const response = await axios.get<IHttpResponse<T>>(url, config);
    return {
      statusCode: response.status,
      data: response.data
    };
  },

  /**
   * @description Http post request
   * @param {string} url 
   * @param {any} body 
   * @param {IHeader | undefined} headers 
   * @returns {Promise<IHttpResponse>}
   */
  post: async function <T = any>(url: string, body: any, headers?: IHeader | undefined): Promise<IHttpResponse<T>> {
    const config: AxiosRequestConfig = {
      headers
    };
    const response = await axios.post<IHttpResponse<T>>(url, body, config);
    return {
      statusCode: response.status,
      data: response.data
    };
  },

  /**
   * @description Http put request
   * @param {string} url 
   * @param {any} body 
   * @param {IHeader | undefined} headers 
   * @returns {Promise<IHttpResponse>}
   */
  put: async function <T = any>(url: string, body: any, headers?: IHeader | undefined): Promise<IHttpResponse<T>> {
    const config: AxiosRequestConfig = {
      headers
    };
    const response = await axios.put<IHttpResponse<T>>(url, body, config);
    return {
      statusCode: response.status,
      data: response.data
    };
  },

  /**
   * @description Http delete request
   * @param {string} url 
   * @param {IHeader | undefined} headers 
   * @returns {Promise<IHttpResponse>}
   */
  delete: async function <T = any>(url: string, headers?: IHeader | undefined): Promise<IHttpResponse<T>> {
    const config: AxiosRequestConfig = {
      headers
    };
    const response = await axios.delete<IHttpResponse<T>>(url, config);
    return {
      statusCode: response.status,
      data: response.data
    };
  },

  /**
   * @description Http patch request
   * @param {string} url 
   * @param {any} body 
   * @param {IHeader | undefined} headers 
   * @returns {Promise<IHttpResponse>}
   */
  patch: async function <T = any>(url: string, body?: any, headers?: IHeader | undefined): Promise<IHttpResponse<T>> {
    const config: AxiosRequestConfig = {
      headers
    };
    const response = await axios.patch<IHttpResponse<T>>(url, body, config);
    return {
      statusCode: response.status,
      data: response.data
    };
  }
};

export const HttpResponse: IHttpResponse = {
  statusCode: 0,
  data: {}
};
