import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamosScreenComponent } from './reclamos-screen.component';

describe('ReclamosScreenComponent', () => {
  let component: ReclamosScreenComponent;
  let fixture: ComponentFixture<ReclamosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
