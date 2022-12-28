export interface IHeader {
  [key: string]: string;
}

export interface IRequestParams {
  [key: string]: string;
}

export interface IHttpRequest {
  get<T>(url: string, headers?: IHeader, params?: IRequestParams): Promise<IHttpResponse<T>>;
  post<T>(url: string, body: any, headers?: IHeader): Promise<IHttpResponse<T>>;
  put<T>(url: string, body: any, headers?: IHeader): Promise<IHttpResponse<T>>;
  delete<T>(url: string, headers?: IHeader): Promise<IHttpResponse<T>>;
  patch<T>(url: string, body?: any, headers?: IHeader): Promise<IHttpResponse<T>>;
}

export interface IHttpResponse<T = any> {
  statusCode: number;
  data: string | object;
}

export enum HttpResponseStatusCode {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
};