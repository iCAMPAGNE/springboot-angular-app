import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeBodyProblemComponent } from './three-body-problem.component';

describe('ThreeBodyProblemComponent', () => {
  let component: ThreeBodyProblemComponent;
  let fixture: ComponentFixture<ThreeBodyProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeBodyProblemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeBodyProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
