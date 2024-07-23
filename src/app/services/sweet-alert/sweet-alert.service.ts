import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {
  constructor() { }

  public success(message: string) {
    Swal.fire('Thành công!', message, 'success');
  }

  public error(message: string) {
    Swal.fire('Lỗi!', message, 'error');
  }

  public warning(message: string) {
    Swal.fire('Cảnh báo!', message, 'warning');
  }

  public info(message: string) {
    Swal.fire('Thông báo!', message, 'info');
  }
}
