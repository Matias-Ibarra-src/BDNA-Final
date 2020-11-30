import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalScreenComponent } from './nacional-screen.component';

describe('NacionalScreenComponent', () => {
  let component: NacionalScreenComponent;
  let fixture: ComponentFixture<NacionalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionalScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
