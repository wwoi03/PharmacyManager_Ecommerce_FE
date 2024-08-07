import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent implements OnInit {
  // variables
  productId!: string;

  // constructor
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  // Init Data
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productId = params['id'];
      console.log(params);
      console.log(this.productId);
    });
  }
}
