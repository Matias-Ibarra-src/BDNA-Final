import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosScreenComponent } from './comentarios-screen.component';

describe('ComentariosScreenComponent', () => {
  let component: ComentariosScreenComponent;
  let fixture: ComponentFixture<ComentariosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
