/**
 * @description: InterBank plugin types
 */

/**
 * Billing API
 * 
 * @see https://developers.bancointer.com.br/reference/pesquisarboletos
 */
export interface IBilling {
  bills(params: TBillsParams): Promise<TBills[]>,
  billsCollection(): any,
  billsDetailed(): any,
  billsPDF(): any,
  billsCanceling(): any,
}

export enum TBillsStatus {
  EXPIRED = 'EXPIRADO',
  OVERDUE = 'VENCIDO',
  OPEN = 'EMABERTO',
  PAID = 'PAGO',
  CANCELED = 'CANCELADO',
}

export enum TBillsOrderBy {
  PAYER = 'PAGADOR',
  OUR_NUMBER = 'NOSSONUMERO',
  YOUR_NUMBER = 'SEUNUMERO',
  SITUATION_DATE = 'DATASITUACAO',
  DUE_DATE = 'DATAVENCIMENTO',
  VALUE = 'VALOR',
  STATUS = 'STATUS',
}

export enum TDateFilterOptions {
  ISSUE = 'emissao',
  DUE = 'vencimento',
  SITUATION = 'situacao',
}

export type TBillsParams = {
  initialDate: Date, // YYYY-MM-DD
  finalDate: Date, // YYYY-MM-DD
  dateFilterBy?: TDateFilterOptions, // default TDateFilterOptions.DUE
  status?: TBillsStatus, // default TBillsStatus.OPEN
  name?: string,
  email?: string,
  documentId?: string,
  itemsPerPage?: number, // 1 until 1000
  page?: number, // default 0
  orderBy?: string, // default TOrderBy.PAYER
  orderType?: 'ASC' | 'DESC', // default 'ASC'
}

export type TBills = {
  totalPages?: number; // Quantidade total de páginas disponíveis para consulta.
  totalElements?: bigint; // Quantidade total de itens disponíveis de acordo com os parâmetros informados.
  last?: boolean; // Última página
  first?: boolean; // Primeira página
  size?: number; // Quantidade de registros por página, configurado na requisição.
  numberOfElements?: number; // Quantidade de registros retornado na página atual.
  content: TBillsContent[]; // Array de objetos
}

export type TBillsContent = {
  nomeBeneficiario?: string; // Nome do beneficiário.
  cnpjCpfBeneficiario?: string; // CNPJ do beneficiário.
  tipoPessoaBeneficiario?: string; // Tipo do beneficiário.
  contaCorrente?: string; // Conta corrente do boleto emitido
  nossoNumero?: string; // Nosso número do boleto emitido
  seuNumero?: string; // Campo seuNumero do boleto emitido.
  pagador?: TBillsPayer; // Objeto pagador
  situacao?: TBillsStatus; // Situação do boleto
  dataHoraSituacao?: Date; // Data da situação do boleto YYYY-MM-DD
  dataVencimento?: Date; // Data de vencimento do boleto YYYY-MM-DD
  valorNominal?: number; // Valor nominal do boleto
  dataEmissao?: Date; // Data de emissão do boleto YYYY-MM-DD
  dataLimite?: Date; // Data limite para pagamento do boleto YYYY-MM-DD
  codigoEspecie?: string; // Código da espécie do boleto
  codigoBarras?: string; // Código de barras do boleto
  linhaDigitavel?: string; // Linha digitável do boleto
  origem?: string; // Origem do boleto
  mensagem?: TBillsMessage; // Mensagem do boleto
  desconto1?: TBillsFees; // Desconto do boleto 1
  desconto2?: TBillsFees; // Desconto do boleto 2
  desconto3?: TBillsFees; // Desconto do boleto 3
  multa?: TBillsFees; // Multa do boleto
  mora?: TBillsFees; // Mora do boleto
}

export type TBillsPayer = {
  cpfCnpj: string; // CPF ou CNPJ do pagador
  tipoPessoa: 'FISICA' | 'JURIDICA'; // Tipo do pagador
  nome: string; // Nome do pagador
  endereco: string; // Endereço do pagador
  numero?: string; // Número do endereço do pagador
  complemento?: string; // Complemento do endereço do pagador
  bairro?: string; // Bairro do pagador
  cidade: string; // Cidade do pagador
  uf: string; // UF do pagador
  cep: string; // CEP do pagador
  email?: string; // E-mail do pagador
  ddd?: string; // DDD do pagador
  telefone?: string; // Telefone do pagador
}

export type TBillsMessage = {
  linha1?: string; // Linha 1 da mensagem do boleto
  linha2?: string; // Linha 2 da mensagem do boleto
  linha3?: string; // Linha 3 da mensagem do boleto
  linha4?: string; // Linha 4 da mensagem do boleto
  linha5?: string; // Linha 5 da mensagem do boleto
}

export type TBillsFees = {
  codigo?: string; // Código do desconto
  data?: string; // Data do desconto
  taxa?: number; // Taxa do desconto
  valor?: number; // Valor do desconto
}
