import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendSimilarProductComponent } from './recommend-similar-product.component';

describe('RecommendSimilarProductComponent', () => {
  let component: RecommendSimilarProductComponent;
  let fixture: ComponentFixture<RecommendSimilarProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendSimilarProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendSimilarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
