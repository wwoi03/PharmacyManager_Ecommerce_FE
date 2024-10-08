import { UtilMoney } from "src/app/helpers/utils/util-money";
import { ShipmentDetailsUnitResponse } from "../shipment-details-unit/shipment-details-unit-response";

export class ItemProductResponse {
  productId: string = '';
  productName: string = '';
  specifications: string = '';
  productImage: string = '';
  shipmentDetailsId: string = '';
  shipmentDetailsUnits: ShipmentDetailsUnitResponse[] = [];
  discount: number = 0;
  unitId?: string;
}
