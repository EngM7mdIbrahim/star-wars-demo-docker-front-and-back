import { Schema } from "mongoose";
import { BaseError } from "./base-error";

// TODO: ADD ANY CHILD ERROR AS AN EXTENSTION FROM THE BASE ERROR! THIS IS THE BAD REQUEST ERROR MADE FOR YOU!
export class BadRequestError extends BaseError {
  statusCode = 400;
  constructor(
    public message: string,

  ) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeError(): { message: string; field?: string | undefined }[] {
    return [{ message: this.message }];
  }
}
