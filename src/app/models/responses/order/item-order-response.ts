export class ItemOrderResponse {
    orderId: string = "";
    orderDate: Date = new Date();
    codeOrder: string = "";
    status: string = "";
    finalAmount: number = 0;
    productQuantity: number = 0;
    nameFirstProduct: string = "";
    imageFirstProduct: string = "";
    priceFirstProduct: number = 0;
    quantityFirstProduct: number = 0;
    unitFirstProduct: string = "";
}