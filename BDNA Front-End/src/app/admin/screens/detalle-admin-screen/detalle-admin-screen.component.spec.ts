import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAdminScreenComponent } from './detalle-admin-screen.component';

describe('DetalleAdminScreenComponent', () => {
  let component: DetalleAdminScreenComponent;
  let fixture: ComponentFixture<DetalleAdminScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAdminScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAdminScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
