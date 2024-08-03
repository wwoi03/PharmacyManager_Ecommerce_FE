import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBeingDeliveredComponent } from './order-being-delivered.component';

describe('OrderBeingDeliveredComponent', () => {
  let component: OrderBeingDeliveredComponent;
  let fixture: ComponentFixture<OrderBeingDeliveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderBeingDeliveredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderBeingDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
