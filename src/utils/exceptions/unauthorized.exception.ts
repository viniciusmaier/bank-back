export class UnauthorizedException extends Error {
  constructor(message: string) {
    super(UnauthorizedException.name);
    super.name = UnauthorizedException.name;
    super.message = message;
  }
}
