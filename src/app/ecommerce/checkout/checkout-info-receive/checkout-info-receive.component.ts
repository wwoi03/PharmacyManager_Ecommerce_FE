import { Component } from '@angular/core';
import { AddressService } from 'src/app/services/address/address.service';

@Component({
  selector: 'ngx-checkout-info-receive',
  templateUrl: './checkout-info-receive.component.html',
  styleUrls: ['./checkout-info-receive.component.scss']
})
export class CheckoutInfoReceiveComponent {
  // variables
  provinces: any[] = [];
  districts: any[] = [];
  wards: any[] = [];

  // constructor
  constructor(
    private addressService: AddressService
  ) {

  }

  // InitData
  ngOnInit() {
    this.loadProvinces();
  }

  // Load Provinces
  loadProvinces() {
    this.addressService.getProvinces().subscribe(res => {
      console.log(res);
      this.provinces = res.data;
    })
  }

  // load Districts
  loadDistrictsByProvinceId(id: string) {
    this.addressService.getDistrictsByProvinceId(id).subscribe(res => {
      console.log(res);
      this.districts = res.data;
    })
  }

  // load Districts
  loadWardsByDistrictsId(id: string) {
    this.addressService.getWardsByDistrictId(id).subscribe(res => {
      console.log(res);
      this.wards = res.data;
    })
  }
}
