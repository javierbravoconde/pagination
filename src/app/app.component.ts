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
			
			prevButton: '.btn-previous',
			nextButton: '.btn-next',
			spaceBetween: 30,
			bulletClass: 'my-swiper-pagination-bullet',
			bulletActiveClass: 'my-swiper-pagination-bullet-active'
			
		};  
  
  ngOnInit() {
  }  
  
    
}
