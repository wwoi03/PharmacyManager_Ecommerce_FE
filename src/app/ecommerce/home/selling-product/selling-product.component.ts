import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { ItemProductResponse } from '../../../models/responses/product/item-product-response';
import { ProductService } from '../../../services/product/product.service';
>>>>>>> origin/master

@Component({
  selector: 'ngx-selling-product',
  templateUrl: './selling-product.component.html',
  styleUrls: ['./selling-product.component.scss']
})
export class SellingProductComponent {
<<<<<<< HEAD
  constructor(private router: Router) { }

  goToDetails(){
    this.router.navigate(['/ecommerce/product/product-details']);
=======
  itemProductResponses: ItemProductResponse[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadItemProduct();
  }

  loadItemProduct() {
    this.productService.getSellingProductByMonth().subscribe(
      (res) => {
        if (res.code === 200) {
          this.itemProductResponses = res.obj as ItemProductResponse[];
        }
      }
    )
>>>>>>> origin/master
  }
}
