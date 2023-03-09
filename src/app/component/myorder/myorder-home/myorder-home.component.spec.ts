import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyorderHomeComponent } from './myorder-home.component';

describe('MyorderHomeComponent', () => {
  let component: MyorderHomeComponent;
  let fixture: ComponentFixture<MyorderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyorderHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyorderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
