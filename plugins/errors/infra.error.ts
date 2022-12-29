class InfraError extends Error {
  __proto__ = Error;

  constructor(message: string) {
    super(message);
    this.name = 'InfraError';
    Object.setPrototypeOf(this, InfraError.prototype);
  }
}

class NotFoundError extends InfraError {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

class BadRequestError extends InfraError {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestError';
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

class UnauthorizedError extends InfraError {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedError';
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}

class ForbiddenError extends InfraError {
  constructor(message: string) {
    super(message);
    this.name = 'ForbiddenError';
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}

class ConflictError extends InfraError {
  constructor(message: string) {
    super(message);
    this.name = 'ConflictError';
    Object.setPrototypeOf(this, ConflictError.prototype);
  }
}

class InternalServerError extends InfraError {
  constructor(message: string) {
    super(message);
    this.name = 'InternalServerError';
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

class ServiceUnavailableError extends InfraError {
  constructor(message: string) {
    super(message);
    this.name = 'ServiceUnavailableError';
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
  }
}

class MethodNotAllowedError extends InfraError {
  constructor(message: string) {
    super(message);
    this.name = 'MethodNotAllowedError';
    Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
  }
}

export {
  InfraError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  ConflictError,
  InternalServerError,
  ServiceUnavailableError,
  MethodNotAllowedError
};