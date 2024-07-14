export interface ItemProductResponse {
    productId: string; 
    productName: string;
    specifications: string;
    productImage: string;
    pricePerUnit: { [key: string]: string };
    discount: string;
}
