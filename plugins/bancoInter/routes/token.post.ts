// create a post request to get oauth token using defineEventHandler nuxt
import { tokenPath } from './index';
import { HttpRequest, HttpResponse } from '~/plugins/http';
import { ScopeType } from '../scopeType';
import { HttpResponseStatusCode } from '~/plugins/http/types';

export interface ITokenParams {
  client_id: string;
  client_secret: string;
  grant_type: string;
  scope: ScopeType;
}

interface ITokenResponse {
  access_token: string;
}

export const getToken = async (scope: ScopeType): Promise<string> => {
  const data: ITokenParams = {
    client_id: 'client_id',
    client_secret: 'client',
    grant_type: 'client_credentials',
    scope: scope
  };

  const response = await HttpRequest.post<ITokenResponse>(tokenPath, data);

  if (response.statusCode === HttpResponseStatusCode.OK) {
    return response.data.access_token;
  }

  return "";
};

