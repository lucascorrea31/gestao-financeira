import token from "@/plugins/interBank/token";
import { ScopeType } from "@/plugins/interBank/scopeType";

describe('InterBank test', () => {

  it('get token', async () => {

    const response = await token(ScopeType.bankStatementRead);
    expect(response).toBeDefined();
    expect(response.access_token).toBeTruthy();
    expect(response.access_token.length).toBeGreaterThan(0);
    expect(response.scope).toBe(ScopeType.bankStatementRead);

    // RESPONSES
    // 200
    // Sucesso. Token emitido
    // 403
    // Requisição de participante autenticado que viola alguma regra de autorização.
    // 404
    // Recurso solicitado não foi encontrado.
    // 503
    // Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.

    // RESPONSE BODY: object 
    // access_token: string
    // Token gerado para ser utilizado nas requisições do Inter via Bearer.
    // token_type: string
    // Tipo do token gerado.
    // expires_in: number
    // Tempo de uso do token até expirar.
    // scope: string
    // Para qual escopo foi gerado o token.

  });

})