import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioCardComponent } from './comentario-card.component';

describe('ComentarioCardComponent', () => {
  let component: ComentarioCardComponent;
  let fixture: ComponentFixture<ComentarioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
