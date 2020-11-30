import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanalScreenComponent } from './semanal-screen.component';

describe('SemanalScreenComponent', () => {
  let component: SemanalScreenComponent;
  let fixture: ComponentFixture<SemanalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanalScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
