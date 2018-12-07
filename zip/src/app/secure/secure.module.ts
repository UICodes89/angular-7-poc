import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureRoutingModule } from './secure-routing.module';
import { MainNavComponent } from './home-page/main-nav/main-nav.component';
import { FooterLinksComponent } from './home-page/footer-links/footer-links.component';
import { CoupanListingComponent } from './home-page/coupan-listing/coupan-listing.component';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailComponent } from './sub-category/detail/detail.component';

@NgModule({
  declarations: [
    MainNavComponent,
    FooterLinksComponent,
    CoupanListingComponent,
    CarouselComponent,
    HomePageComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
