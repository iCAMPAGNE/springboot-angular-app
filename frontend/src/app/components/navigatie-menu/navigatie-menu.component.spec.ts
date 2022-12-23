import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatieMenuComponent } from './navigatie-menu.component';

describe('NavigatieMenuComponent', () => {
  let component: NavigatieMenuComponent;
  let fixture: ComponentFixture<NavigatieMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatieMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatieMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
