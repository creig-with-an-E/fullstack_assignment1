import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevideoadminComponent } from './updatevideoadmin.component';

describe('UpdatevideoadminComponent', () => {
  let component: UpdatevideoadminComponent;
  let fixture: ComponentFixture<UpdatevideoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatevideoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevideoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
