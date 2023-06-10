import FormData from 'form-data';
import { HttpRequest } from "../http";
import { HttpResponseStatusCode } from "../http/types";
import { billsPath } from "./routes";
import { token } from './token';
import { IBilling, TBills, TBillsOrderBy, TBillsParams, TBillsStatus, TDateFilterOptions } from "./types";


/**
 * Get all bills in a list
 */
const bills = async function (params: TBillsParams): Promise<TBills[]> {
  const formData = new FormData();
  formData.append('dataInicial', params.initialDate.toISOString().substring(0, 10));
  formData.append('dataFinal', params.finalDate.toISOString().substring(0, 10));
  formData.append('filtrarDataPor', params.dateFilterBy ?? TDateFilterOptions.DUE);
  formData.append('situacao', params.status ?? TBillsStatus.OPEN);
  formData.append('nome', params.name ?? '');
  formData.append('email', params.email ?? '');
  formData.append('cpfCnpj', params.documentId ?? '');
  formData.append('itensPorPagina', `${(params.itemsPerPage ?? 100)}`);
  formData.append('paginaAtual', `${(params.page ?? 0)}`);
  formData.append('ordernarPor', params.orderBy ?? TBillsOrderBy.PAYER);
  formData.append('tipoOrdenacao', params.orderType ?? 'ASC');

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${token.accessToken}}`,
    ...formData.getHeaders()
  };

  const response = await HttpRequest.get<TBills[]>(billsPath, headers, {}, formData);

  if (response.statusCode !== HttpResponseStatusCode.OK) {
    return response.data;
  }
  throw new Error('Error getting bills');
};

const billsCollection = async function (): Promise<any> { };
const billsDetailed = async function (): Promise<any> { };
const billsPDF = async function (): Promise<any> { };
const billsCanceling = async function (): Promise<any> { };

export const Billing: IBilling = {
  bills,
  billsCollection,
  billsDetailed,
  billsPDF,
  billsCanceling,
};
