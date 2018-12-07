import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OopsComponent } from './public/other/oops/oops.component';
import {SimpleWithMenuLayoutComponent} from "./core/layouts/simple-with-menu-layout-component/simple-with-menu-layout-component"
import {SimpleLayoutComponent} from "./core/layouts/simple-layout-component/simple-layout.component";
import {HeaderComponent} from "./core/shared-component/header/header.component"
import {FooterComponent} from "./core/shared-component/footer/footer.component";


import {CommonService} from "./core/services/common-.service";

@NgModule({
  declarations: [
    AppComponent,
    OopsComponent,
    HeaderComponent,
    FooterComponent,
    SimpleWithMenuLayoutComponent,
    SimpleLayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
