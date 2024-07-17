import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-selling-product',
  templateUrl: './selling-product.component.html',
  styleUrl: './selling-product.component.scss'
})
export class SellingProductComponent {
  constructor(private router: Router) { }

  goToDetails(){
    this.router.navigate(['/ecommerce/product/product-details']);
  }
}
