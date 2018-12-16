import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsDropdownModule} from "ngx-bootstrap";
import { Routes, RouterModule} from "@angular/router";
import { LoginService } from './login.service';
import { AddVideoComponent } from './add-video/add-video.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {path: '#login', component: LoginComponent},
  {path: '#addVideo', component: AddVideoComponent},
  // {path: '#customersadmin', component: CustomersadminComponent},
  // {path: '#reservevideoguest', component: ReservevideoguestComponent},
  {path: '#customer', component: CustomerComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AddVideoComponent,
    CustomerComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
