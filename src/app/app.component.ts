import { Component, OnInit } from '@angular/core';
import { ScrollTrackerComponent } from './scrolltracker.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
	config: Object = {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			spaceBetween: 30
		};  
  
  ngOnInit() {
  }  
  
    
}
