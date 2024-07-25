import { ItemCartResponse } from "../../responses/cart/item-cart-response";

export class CreateOrderCommandRequest {
  ordererName: string = '';
  receiverName: string = '';
  recipientPhone: string = '';
  email?: string;
  provinceOrCity: string = '';
  district: string = '';
  ward: string = '';
  addressDetails: string = '';
  transportFee: number = 0;
  note?: string;
  paymentMethodId: string = '';
  staffId?: string;
  branchId?: string;
  voucher?: string;
  products: ItemCartResponse[] = [];
}
