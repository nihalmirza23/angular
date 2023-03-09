import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersummaryHomeComponent } from './ordersummary-home.component';

describe('OrdersummaryHomeComponent', () => {
  let component: OrdersummaryHomeComponent;
  let fixture: ComponentFixture<OrdersummaryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersummaryHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersummaryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
