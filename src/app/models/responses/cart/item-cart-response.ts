import { ShipmentDetailsUnitResponse } from "../shipment-details-unit/shipment-details-unit-response";

export interface ItemCartResponse {
    cartId: string;
    productId: string;
    unitId: string;
    productName: string;
    productImage: string;
    unitName: string;
    quantity: number;
    shipmentDetailsUnits: ShipmentDetailsUnitResponse[];
}