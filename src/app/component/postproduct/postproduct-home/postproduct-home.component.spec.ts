import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostproductHomeComponent } from './postproduct-home.component';

describe('PostproductHomeComponent', () => {
  let component: PostproductHomeComponent;
  let fixture: ComponentFixture<PostproductHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostproductHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostproductHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
