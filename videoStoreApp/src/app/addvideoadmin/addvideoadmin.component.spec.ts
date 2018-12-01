import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvideoadminComponent } from './addvideoadmin.component';

describe('AddvideoadminComponent', () => {
  let component: AddvideoadminComponent;
  let fixture: ComponentFixture<AddvideoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvideoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvideoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
