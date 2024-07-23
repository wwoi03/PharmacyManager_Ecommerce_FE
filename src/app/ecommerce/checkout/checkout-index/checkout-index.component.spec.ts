import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutIndexComponent } from './checkout-index.component';

describe('CheckoutIndexComponent', () => {
  let component: CheckoutIndexComponent;
  let fixture: ComponentFixture<CheckoutIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
