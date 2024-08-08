import { ShipmentDetailsUnitResponse } from "../shipment-details-unit/shipment-details-unit-response";

export class DetailsProductResponse {
    id?: string;
    name?: string;
    codeMedicine?: string;
    specifications?: string;
    shortDescription?: string;
    description?: string;
    uses?: string;
    howToUse?: string;
    sideEffects?: string;
    warning?: string;
    preserve?: string;
    dosage?: string;
    contraindication?: string;
    dosageForms?: string;
    registrationNumber?: string;
    brandOrigin?: string;
    ageOfUse?: string;
    categoryId?: string; 
    categoryName?: string; 
    image?: string;
    images?: string[];
    shipmentDetailsUnits: ShipmentDetailsUnitResponse[] = [];
}