import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNoticiaScreensComponent } from './crear-noticia-screens.component';

describe('CrearNoticiaScreensComponent', () => {
  let component: CrearNoticiaScreensComponent;
  let fixture: ComponentFixture<CrearNoticiaScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearNoticiaScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNoticiaScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
