import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutNewAddressComponent } from './checkout-new-address.component';

describe('CheckoutNewAddressComponent', () => {
  let component: CheckoutNewAddressComponent;
  let fixture: ComponentFixture<CheckoutNewAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutNewAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutNewAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
