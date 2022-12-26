// ScopeType
export enum ScopeType {
  // Bank Statement and Balance. 
  bankStatementRead = 'extrato.read',

  // Bills consultation and export to PDF.
  billRead = 'boleto-cobranca.read',
  // Issuance and cancellation of bills.
  billWrite = 'boleto-cobranca.write',

  // Payment of title with barcode.
  billPaymentWrite = 'pagamento-boleto.write',
  // Get complete titulum data from the barcode or digitized line.
  billPaymentRead = 'pagamento-boleto.read',

  // DARF payment without barcode.
  darfPaymentWrite = 'pagamento-darf.write',
}
