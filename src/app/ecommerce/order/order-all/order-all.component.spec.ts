import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAllComponent } from './order-all.component';

describe('OrderAllComponent', () => {
  let component: OrderAllComponent;
  let fixture: ComponentFixture<OrderAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
