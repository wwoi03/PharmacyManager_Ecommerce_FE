import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIndexComponent } from './order-index.component';

describe('OrderIndexComponent', () => {
  let component: OrderIndexComponent;
  let fixture: ComponentFixture<OrderIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
