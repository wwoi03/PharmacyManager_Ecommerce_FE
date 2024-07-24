import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private API_BASE_URL = 'https://esgoo.net/api-tinhthanh';
  private apiUrl: string = this.API_BASE_URL;
  
  constructor(
    private http: HttpClient,
  ) { }

  // Lấy danh sách tỉnh/thành
  getProvinces() {
    return this.http.get<any>(`${this.apiUrl}/1/0.htm`);
  }

  // Lấy danh sách quận/huyện theo id tỉnh/thành
  getDistrictsByProvinceId(id: string) {
    return this.http.get<any>(`${this.apiUrl}/2/${id}.htm`);
  }

  // Lấy danh sách phường/xã theo id quận/huyện
  getWardsByDistrictId(id: string) {
    return this.http.get<any>(`${this.apiUrl}/3/${id}.htm`);
  }
}
