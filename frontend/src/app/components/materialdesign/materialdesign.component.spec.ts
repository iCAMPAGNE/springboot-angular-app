import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdesignComponent } from './materialdesign.component';

describe('MaterialdesignComponent', () => {
  let component: MaterialdesignComponent;
  let fixture: ComponentFixture<MaterialdesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialdesignComponent]
    });
    fixture = TestBed.createComponent(MaterialdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
