import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoReviewComponent } from './demo-review.component';

describe('DemoReviewComponent', () => {
  let component: DemoReviewComponent;
  let fixture: ComponentFixture<DemoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
