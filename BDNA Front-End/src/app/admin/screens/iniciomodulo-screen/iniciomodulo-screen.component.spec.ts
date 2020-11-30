import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciomoduloScreenComponent } from './iniciomodulo-screen.component';

describe('IniciomoduloScreenComponent', () => {
  let component: IniciomoduloScreenComponent;
  let fixture: ComponentFixture<IniciomoduloScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciomoduloScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciomoduloScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
