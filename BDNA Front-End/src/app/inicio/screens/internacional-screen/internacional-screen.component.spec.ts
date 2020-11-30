import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacionalScreenComponent } from './internacional-screen.component';

describe('InternacionalScreenComponent', () => {
  let component: InternacionalScreenComponent;
  let fixture: ComponentFixture<InternacionalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternacionalScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternacionalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
