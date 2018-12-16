import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Customer} from "../shared/customer.model";
import {CustomerService} from "../shared/customer.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

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

    });
    // }


  }

  refreshCustomer() {
    this.customerService.getCustomerList().subscribe((res) => {
      this.customerService.customers = res as Customer[];
    });
  }

}
