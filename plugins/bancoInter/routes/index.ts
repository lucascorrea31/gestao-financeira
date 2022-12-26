const host = 'https://cdpj.partners.bancointer.com.br';
/**
 * Oauth authentication paths
 */
const oauth = `${host}/oauth/v2`;
// Token
export const tokenPath = `${oauth}/token`;

/**
 * API Billing paths
 */
const billing = `${host}/cobranca/v2/`;
// Bills
export const billsPath = `${billing}/boletos`;
export const billsCollectionPath = `${billsPath}/sumario`;
export const billsDetailedPath = `${billsPath}/{ourNumber}`;
export const billsPDFPath = `${billsDetailedPath}/pdf`;
export const billsCancelingPath = `${billsDetailedPath}/cancelar`;
// Webhook
export const webhookPath = `${billsPath}/webhook`;

/**
 * Banking API paths
 */
const banking = `${host}/banking/v2/`;
// Bank Statement
export const bankStatementPath = `${banking}/extrato`;
export const bankStatementPDFPath = `${bankStatementPath}/exportar`;
export const bankStatementFullPath = `${banking}/completo`;
// Bank Balance
export const bankBalancePath = `${banking}/saldo`;
// Payment
export const paymentPath = `${banking}/pagamento`;
export const paymentDarfPath = `${paymentPath}/darf`;


// Returning
// 200
// 403
// 404
// 503