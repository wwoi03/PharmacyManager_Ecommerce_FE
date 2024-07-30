import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWaitingComponent } from './order-waiting.component';

describe('OrderWaitingComponent', () => {
  let component: OrderWaitingComponent;
  let fixture: ComponentFixture<OrderWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderWaitingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
