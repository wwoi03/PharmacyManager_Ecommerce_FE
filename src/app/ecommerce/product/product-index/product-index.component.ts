import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent {
  // variables
  productId?: string;

  // constructor
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  // Init Data
  ngOnInit(): void {
    console.log(this.route.params);
    this.route.params.subscribe((params) => {
      this.productId = params["id"];

      console.log(params);
    });
  }
}
