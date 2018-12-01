import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersadminComponent } from './customersadmin.component';

describe('CustomersadminComponent', () => {
  let component: CustomersadminComponent;
  let fixture: ComponentFixture<CustomersadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
