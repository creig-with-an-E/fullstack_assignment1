import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../shared/customer.service';
import { NgForm } from '@angular/forms';
import { Customer } from '../shared/customer.model';

declare var M :any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshCustomer()
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.customerService.selectedCustomer = {
      _id :"",
      firstName:  "",
      lastName: "",
      address: "",
      city: "",
    }
  }

  onSubmit(form: NgForm) {
    // if (form.value._id == "") {
      this.customerService.postCustomer(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    // }


}

refreshCustomer() {
  this.customerService.getCustomerList().subscribe((res) => {
    this.customerService.customers = res as Customer[];
  });
}

onEdit(cust: Customer) {
  this.customerService.selectedCustomer = cust;
}
}
