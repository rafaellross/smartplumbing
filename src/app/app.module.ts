import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    OurservicesComponent,
    ContactusComponent,
    CarouselComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    Ng2PageScrollModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
