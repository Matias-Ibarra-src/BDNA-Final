import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosScreenComponent } from './videos-screen.component';

describe('VideosScreenComponent', () => {
  let component: VideosScreenComponent;
  let fixture: ComponentFixture<VideosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
