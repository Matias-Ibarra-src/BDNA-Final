import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisNoticiasScreenComponent } from './mis-noticias-screen.component';

describe('MisNoticiasScreenComponent', () => {
  let component: MisNoticiasScreenComponent;
  let fixture: ComponentFixture<MisNoticiasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisNoticiasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisNoticiasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
