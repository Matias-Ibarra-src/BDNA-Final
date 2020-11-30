import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRelacionadasComponent } from './lista-relacionadas.component';

describe('ListaRelacionadasComponent', () => {
  let component: ListaRelacionadasComponent;
  let fixture: ComponentFixture<ListaRelacionadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRelacionadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRelacionadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
