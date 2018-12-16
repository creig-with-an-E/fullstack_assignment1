import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./customer/customer.component";
import { AddVideoComponent} from "./add-video/add-video.component";
import {AdminloginComponent} from "./adminlogin/adminlogin.component";
import {UpdatevideoadminComponent} from "./updatevideoadmin/updatevideoadmin.component";
import {VideolistadminComponent} from "./videolistadmin/videolistadmin.component";
import {VideolistguestComponent} from "./videolistguest/videolistguest.component";


const routes: Routes = [
  {path:'addvideo' ,component:AddVideoComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'customer',component:CustomerComponent},
  {path:'updatevideoadmin',component:UpdatevideoadminComponent},
  {path:'videolistadmin',component:VideolistadminComponent},
  {path:'videolistguest',component:VideolistguestComponent}


  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
