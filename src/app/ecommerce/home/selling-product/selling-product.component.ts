import { Component } from '@angular/core';
import { ItemProductResponse } from '../../../models/responses/product/item-product-response';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'ngx-selling-product',
  templateUrl: './selling-product.component.html',
  styleUrl: './selling-product.component.scss'
})
export class SellingProductComponent {
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
  }
}
