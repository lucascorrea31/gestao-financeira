import axios, { AxiosRequestConfig } from 'axios';

export const get = (url: string, config?: AxiosRequestConfig) => {
  return axios.get(url, config);
}

export const post = (url: string, data?: any, config?: AxiosRequestConfig) => {
  return axios.post(url, data, config);
}

export const put = (url: string, data?: any, config?: AxiosRequestConfig) => {
  return axios.put(url, data, config);
}

export const del = (url: string, config?: AxiosRequestConfig) => {
  return axios.delete(url, config);
}

export const patch = (url: string, data?: any, config?: AxiosRequestConfig) => {
  return axios.patch(url, data, config);
}