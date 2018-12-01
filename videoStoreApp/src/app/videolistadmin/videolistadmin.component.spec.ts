import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolistadminComponent } from './videolistadmin.component';

describe('VideolistadminComponent', () => {
  let component: VideolistadminComponent;
  let fixture: ComponentFixture<VideolistadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideolistadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
