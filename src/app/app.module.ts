import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ScrollToModule } from 'ng2-scroll-to';
import { ScrollToHorizontal } from './scrolltrackerhorizontal.component'
import { SwiperModule } from '../../node_modules/angular2-useful-swiper'; 

import { AppComponent } from './app.component';

import { ScrollTrackerComponent } from './scrolltracker.component'

@NgModule({
  declarations: [
    AppComponent,
	ScrollTrackerComponent,
	ScrollToHorizontal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ScrollToModule.forRoot(),
	SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
