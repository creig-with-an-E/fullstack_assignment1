import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsDropdownModule} from "ngx-bootstrap";
import { Routes, RouterModule} from "@angular/router";
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { VideolistadminComponent } from './videolistadmin/videolistadmin.component';
import { UpdatevideoadminComponent } from './updatevideoadmin/updatevideoadmin.component';
import { CustomersadminComponent } from './customersadmin/customersadmin.component';
import { VideolistguestComponent } from './videolistguest/videolistguest.component';
import { ReservevideoguestComponent } from './reservevideoguest/reservevideoguest.component';
import { LoginService } from './login.service';
import { AddVideoComponent } from './add-video/add-video.component'

const routes: Routes = [
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'videolistadmin', component: VideolistadminComponent},
  {path: 'addVideo', component: AddVideoComponent},
  {path: 'updatevideoadmin', component: UpdatevideoadminComponent},
  {path: 'customersadmin', component: CustomersadminComponent},
  {path: 'videolistguest', component: VideolistguestComponent},
  {path: 'reservevideoguest', component: ReservevideoguestComponent},




];

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    VideolistadminComponent,
    UpdatevideoadminComponent,
    CustomersadminComponent,
    VideolistguestComponent,
    ReservevideoguestComponent,
    AddVideoComponent

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
