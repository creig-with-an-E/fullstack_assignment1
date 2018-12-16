import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  selectedCustomer:Customer;
  customers:Customer[];

  readonly baseURL = 'http://localhost:3000/api';
  constructor(private http:HttpClient) { }

  postCustomer(customer:Customer){
    return this.http.post(this.baseURL+"/user",customer);
  }

  getCustomerList(){
    console.log('method is called ****');
    return this.http.get(this.baseURL+"/user")
  };

  putCustomer(customer: Customer) {
    return this.http.put(this.baseURL + `/${customer._id}`, customer);
  }

  deleteCustomer(_id: string) {
    return this.http.delete(this.baseURL + `/user/${_id}`);
  }
}
