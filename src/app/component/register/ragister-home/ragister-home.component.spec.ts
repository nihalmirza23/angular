import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagisterHomeComponent } from './ragister-home.component';

describe('RagisterHomeComponent', () => {
  let component: RagisterHomeComponent;
  let fixture: ComponentFixture<RagisterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RagisterHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RagisterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
