import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarNoticiaScreensComponent } from './modificar-noticia-screens.component';

describe('ModificarNoticiaScreensComponent', () => {
  let component: ModificarNoticiaScreensComponent;
  let fixture: ComponentFixture<ModificarNoticiaScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarNoticiaScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarNoticiaScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
