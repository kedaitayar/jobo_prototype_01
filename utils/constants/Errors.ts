export class InvalidCredentialError extends Error {
   constructor(message?: string) {
      if (!message) message = "Invalid Credential"
      super(message);
      this.name = "InvalidCredentialError"
   }
}
