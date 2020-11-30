import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaScreenComponent } from './tecnologia-screen.component';

describe('TecnologiaScreenComponent', () => {
  let component: TecnologiaScreenComponent;
  let fixture: ComponentFixture<TecnologiaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
