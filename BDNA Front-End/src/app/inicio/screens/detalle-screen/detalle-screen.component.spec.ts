import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleScreenComponent } from './detalle-screen.component';

describe('DetalleScreenComponent', () => {
  let component: DetalleScreenComponent;
  let fixture: ComponentFixture<DetalleScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
