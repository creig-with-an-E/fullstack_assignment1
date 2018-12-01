import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservevideoguestComponent } from './reservevideoguest.component';

describe('ReservevideoguestComponent', () => {
  let component: ReservevideoguestComponent;
  let fixture: ComponentFixture<ReservevideoguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservevideoguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservevideoguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
