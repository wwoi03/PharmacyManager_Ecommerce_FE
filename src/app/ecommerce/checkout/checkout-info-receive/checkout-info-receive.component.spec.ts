import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutInfoReceiveComponent } from './checkout-info-receive.component';

describe('CheckoutInfoReceiveComponent', () => {
  let component: CheckoutInfoReceiveComponent;
  let fixture: ComponentFixture<CheckoutInfoReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutInfoReceiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutInfoReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
