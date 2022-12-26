// create a post request to get oauth token using defineEventHandler nuxt
import { tokenPath } from './index';
import { post } from '@/utils/http/request';
import { ScopeType } from '../scopeType';

export default defineEventHandler((event) => {
  const data: ITokenParams = {
    client_id: 'client_id',
    client_secret: 'client',
    grant_type: 'client_credentials',
    scope: event.context.params.scope as ScopeType
  };

  return post(tokenPath, data);
});

export interface ITokenParams {
  client_id: string;
  client_secret: string;
  grant_type: string;
  scope: ScopeType;
}
