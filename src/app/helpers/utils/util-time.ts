import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilTime {
  formatCurrency(amount: number): string {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }

  formatDate(date: Date): string {
    const [datePart] = (date + "").split("T");
    const [year, month, day] = datePart.split("-");

    return `${day}/${month}/${year}`;
  }
}
