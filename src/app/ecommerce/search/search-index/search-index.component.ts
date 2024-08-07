import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-search-index',
  templateUrl: './search-index.component.html',
  styleUrls: ['./search-index.component.scss'],
})
export class SearchIndexComponent {
  searchContent: string;

  constructor(private route: ActivatedRoute) {
    this.searchContent = '';
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.searchContent = params.get('searchContent') || '';
      console.log(this.searchContent);
    });
  }
}
