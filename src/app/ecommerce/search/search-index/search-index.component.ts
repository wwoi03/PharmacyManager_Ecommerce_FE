import { Component, EventEmitter, Output } from '@angular/core';
import { UtilMoney } from 'src/app/helpers/utils/util-money';
import { ItemProductResponse } from 'src/app/models/responses/product/item-product-response';
import { FileService } from 'src/app/services/file/file.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'ngx-search-index',
  templateUrl: './search-index.component.html',
  styleUrls: ['./search-index.component.scss'],
})
export class SearchIndexComponent {
  
}
