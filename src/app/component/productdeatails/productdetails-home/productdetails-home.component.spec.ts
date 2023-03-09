import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsHomeComponent } from './productdetails-home.component';

describe('ProductdetailsHomeComponent', () => {
  let component: ProductdetailsHomeComponent;
  let fixture: ComponentFixture<ProductdetailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
