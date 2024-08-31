import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { UtilMoney } from 'src/app/helpers/utils/util-money';
import { SearchProductRequest } from 'src/app/models/requests/search/search-product-request';
import { ItemProductResponse } from 'src/app/models/responses/product/item-product-response';
import { FileService } from 'src/app/services/file/file.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ProductService } from 'src/app/services/product/product.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'ngx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  // variables
  searchProductRequest: SearchProductRequest = new SearchProductRequest();
  itemProductResponses: ItemProductResponse[] = [];
  @Input() searchContent: string = '';
  @Output() childOnClickBuy = new EventEmitter<ItemProductResponse>();
  @Output() childOnClickDetails = new EventEmitter<ItemProductResponse>();

  // constructor
  constructor(
    private searchService: SearchService,
    public fileService: FileService,
    public utilMoney: UtilMoney,
    private loadingService: LoadingService
  ) {}

  // // InitData
  // ngOnInit() {
  //   this.searchProductRequest.content = this.searchContent;
  //   this.loadItemProduct();
  //   console.log(this.searchProductRequest.content);
  // }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchProductRequest.content = this.searchContent;

    if (changes['searchContent']) {
      this.loadItemProduct()
    }
  }

  get numberOfPages(): number[] {
    const length = this.itemProductResponses.length;
    const pages = Math.ceil(length / 16);
    return Array.from({ length: pages }, (_, i) => i + 1);
  }
  
  // Load Item Product
  loadItemProduct() {
    this.loadingService.show();

    this.searchService
      .searchProduct(this.searchProductRequest)
      .subscribe((res) => {
        if (res.code === 200) {
          setTimeout(() => {
            this.itemProductResponses = res.obj as ItemProductResponse[];

            this.loadingService.hide();
          }, 1000);
        }
      });
  }

  // Xử lý khi bấm nút mua
  triggerParentOnClickBuy(item: ItemProductResponse) {
    this.childOnClickBuy.emit(item);
  }

  // Xử lý khi chi tiết
  triggerParentOnClickDetails(item: ItemProductResponse) {
    this.childOnClickDetails.emit(item);
  }
  // Xử lý khi chọn đơn vị sản phẩm
  onUnitChange(item: ItemProductResponse, unitId: string) {
    item.unitId = unitId;
  }
}
