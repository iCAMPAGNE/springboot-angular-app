import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousewheelScrollingComponent } from './mousewheel-scrolling.component';

describe('MousewheelScrollingComponent', () => {
  let component: MousewheelScrollingComponent;
  let fixture: ComponentFixture<MousewheelScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MousewheelScrollingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MousewheelScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
