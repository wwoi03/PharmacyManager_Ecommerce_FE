import { Component, Input } from '@angular/core';
import { CreateOrderCommandRequest } from 'src/app/models/requests/order/create-order-request';
import { AddressService } from 'src/app/services/address/address.service';

@Component({
  selector: 'ngx-checkout-info-receive',
  templateUrl: './checkout-info-receive.component.html',
  styleUrls: ['./checkout-info-receive.component.scss'],
})
export class CheckoutInfoReceiveComponent {
  // variables
  provinces: any[] = [];
  districts: any[] = [];
  wards: any[] = [];
  isDistrict: boolean = true;
  isWard: boolean = true;
  @Input() createOrderCommandRequest: CreateOrderCommandRequest = new CreateOrderCommandRequest();

  // constructor
  constructor(private addressService: AddressService) {}

  // InitData
  ngOnInit() {
    this.loadProvinces();
    console.log(this.createOrderCommandRequest);
  }

  // Load Provinces
  loadProvinces() {
    this.addressService.getProvinces().subscribe((res) => {
      this.provinces = res.data;
    });
  }

  // load Districts
  loadDistrictsByProvinceId(id: string) {
    this.addressService.getDistrictsByProvinceId(id).subscribe((res) => {
      this.districts = res.data;
    });
  }

  // load Districts
  loadWardsByDistrictsId(id: string) {
    this.addressService.getWardsByDistrictId(id).subscribe((res) => {
      this.wards = res.data;
    });
  }

  // Tải danh sách quận/huyện theo tỉnh/thành phố
  onProvinceChange(event: any) {
    if (event === undefined) {
      this.districts = [];
      this.wards = [];
      this.isDistrict = this.isWard = true;
    } else {
      this.isDistrict = false;
      this.loadDistrictsByProvinceId(event.id);
    }
  }

  // Tải danh sách phường/xã theo quận/huyện
  onDistrictChange(event: any) {
    if (event === undefined) {
      this.wards = [];
      this.isWard = true;
    } else {
      this.isWard = false;
      this.loadWardsByDistrictsId(event.id);
    }
  }
}
