import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartIndexComponent } from './cart-index.component';

describe('CartIndexComponent', () => {
  let component: CartIndexComponent;
  let fixture: ComponentFixture<CartIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
