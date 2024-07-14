import { ValidationNotify } from "../validation-notifies/validation-notify";

export interface ResponseApi<T> {
    code: number;
    isSuccessed: boolean;
    message: string;
    obj?: T;
    validationNotify?: ValidationNotify<string>
}
  