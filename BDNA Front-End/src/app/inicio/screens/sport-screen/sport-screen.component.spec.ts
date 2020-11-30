import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportScreenComponent } from './sport-screen.component';

describe('SportScreenComponent', () => {
  let component: SportScreenComponent;
  let fixture: ComponentFixture<SportScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
