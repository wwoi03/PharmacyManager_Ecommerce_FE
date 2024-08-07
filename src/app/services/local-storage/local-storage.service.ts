import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageSubject = new BehaviorSubject<any>(this.getCartQuantity());

  constructor() {
    window.addEventListener('storage', () => {
      this.storageSubject.next(this.getCartQuantity());
    });
  }

  getCartQuantity(): number {
    return Number(localStorage.getItem('quantityCart')) || 0;
  }

  getStorageObservable() {
    return this.storageSubject.asObservable();
  }

  setCartQuantity(quantity: number) {
    localStorage.setItem('quantityCart', quantity + '');
    this.storageSubject.next(quantity);
  }
}
