import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolistguestComponent } from './videolistguest.component';

describe('VideolistguestComponent', () => {
  let component: VideolistguestComponent;
  let fixture: ComponentFixture<VideolistguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideolistguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolistguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
