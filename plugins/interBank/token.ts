// create a post request to get oauth token using defineEventHandler nuxt
import { tokenPath } from './routes';
import { HttpRequest } from '@/plugins/http';
import { ScopeType } from './scopeType';
import { HttpResponseStatusCode } from '@/plugins/http/types';
import handleErrors from '../errors';
import { INTER_BANK_CLIENT_ID, INTER_BANK_CLIENT_SECRET } from '@/utils/config';
import FormData from 'form-data';

interface ITokenParams {
  client_id: string;
  client_secret: string;
  grant_type: string;
  scope: ScopeType;
}

export interface ITokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: ScopeType;
}

export default async (scope: ScopeType): Promise<ITokenResponse | never> => {
  const data: ITokenParams = {
    client_id: INTER_BANK_CLIENT_ID,
    client_secret: INTER_BANK_CLIENT_SECRET,
    grant_type: 'client_credentials',
    scope: scope
  };
  const formData = new FormData();
  formData.append('client_id', data.client_id);
  formData.append('client_secret', data.client_secret);
  formData.append('grant_type', data.grant_type);
  formData.append('scope', data.scope.toString());

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    ...formData.getHeaders()
  };

  const response = await HttpRequest.post<ITokenResponse>(tokenPath, formData, headers, true);

  if (response.statusCode === HttpResponseStatusCode.OK) {
    return response.data;
  }

  throw handleErrors(response.statusCode, response.message ?? 'Error getting token');
};

