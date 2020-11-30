import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodistaComponent } from './periodista.component';

describe('PeriodistaComponent', () => {
  let component: PeriodistaComponent;
  let fixture: ComponentFixture<PeriodistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
