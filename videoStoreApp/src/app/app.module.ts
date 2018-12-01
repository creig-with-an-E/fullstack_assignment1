import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsDropdownModule} from "ngx-bootstrap";
import { Routes, RouterModule} from "@angular/router";
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { VideolistadminComponent } from './videolistadmin/videolistadmin.component';

const routes: Routes = [
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'videolistadmin', component: VideolistadminComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    VideolistadminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
