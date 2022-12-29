import { BadRequestError, ConflictError, ForbiddenError, InfraError, InternalServerError, MethodNotAllowedError, NotFoundError, UnauthorizedError } from '../errors/infra.error';
import { HttpResponseStatusCode } from '../http/types';

const handleErrors = (statusCode: number, message: string) => {
  switch (statusCode) {
    case HttpResponseStatusCode.BAD_REQUEST:
      return new BadRequestError(`Bad request: ${message}`);
    case HttpResponseStatusCode.UNAUTHORIZED:
      return new UnauthorizedError(`Unauthorized: ${message}`);
    case HttpResponseStatusCode.FORBIDDEN:
      return new ForbiddenError(`Forbidden: ${message}`);
    case HttpResponseStatusCode.NOT_FOUND:
      return new NotFoundError(`Not found: ${message}`);
    case HttpResponseStatusCode.METHOD_NOT_ALLOWED:
      return new MethodNotAllowedError(`Method not allowed: ${message}`);
    case HttpResponseStatusCode.CONFLICT:
      return new ConflictError(`Conflict: ${message}`);
    case HttpResponseStatusCode.UNPROCESSABLE_ENTITY:
      return new UnauthorizedError(`Unprocessable entity: ${message}`);
    case HttpResponseStatusCode.INTERNAL_SERVER_ERROR:
      return new InternalServerError(`Internal server error: ${message}`);
    default:
      return new InfraError(`Unknown error: ${message}`);
  }
}

export default handleErrors;