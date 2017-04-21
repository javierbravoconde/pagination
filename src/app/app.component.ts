import { Component } from '@angular/core';
import { ScrollTrackerComponent } from './scrolltracker.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  currentPage: number = 0;
  
  private handleScrollBottom(scrolledToBottom: boolean) {

  }

  private handleScrollTop(scrolledToTop: boolean) {

  }   
  
  private handleScrollFinished(scrolleEvent: any) {

    let modulus = scrolleEvent.clientwidth % scrolleEvent.leftafter;
	let pagenumber = Math.floor(scrolleEvent.leftafter/ scrolleEvent.clientwidth);	
	
	if(modulus)
	{		
		console.log("|pagenumb: " + pagenumber + "|modulus: " + modulus + "|clientwidth: " + scrolleEvent.clientwidth);	
		
		if (scrolleEvent.leftafter > scrolleEvent.leftbefore )
		{
			pagenumber++;
			//swap left
			console.log("swap left to right");	
		}
		else{
			
			//swap right
			console.log("swap right to left");	
		}
		
		
		let htmlElement: string = "#container" + pagenumber;
		let target = <HTMLElement>document.querySelector(htmlElement);
								
		let scrollEnd: number = target.offsetLeft;		
		this.currentPage = pagenumber + 1;
		let scrollableElement = <HTMLElement>document.querySelector("#order-sub-content-container");
														
		this.smoothScroll(scrollableElement, scrollEnd);			
		
	}
	else
	{
		this.currentPage = pagenumber;
		console.log("pagenumber: " + pagenumber);	
		console.log("not modulus");	
	}
	

	
  }

  private next(incomingevent: any){
	++this.currentPage;
	let htmlElement: string = "#container" + (this.currentPage);
	let target = <HTMLElement>document.querySelector(htmlElement);
	if(target){
		let scrollEnd: number = target.offsetLeft;
		let scrollableElement = <HTMLElement>document.querySelector("#order-sub-content-container");	
		this.smoothScroll(scrollableElement, scrollEnd);		
	}
  }  
  
  private previous(incomingevent: any){
	--this.currentPage;
	let htmlElement: string = "#container" + (this.currentPage);
	let target = <HTMLElement>document.querySelector(htmlElement);
	if(target){
		let scrollEnd: number = target.offsetLeft;
		let scrollableElement = <HTMLElement>document.querySelector("#order-sub-content-container");	
		this.smoothScroll(scrollableElement, scrollEnd);
	}
  }    
  
  
  private smoothScroll(element: HTMLElement, end: number): void {
    const duration = 500;
    const clock: number = Date.now();
    const requestAnimationFrame = window.requestAnimationFrame || function (fn) {
      window.setTimeout(fn, 15);
    };
    const start: number = element.scrollLeft;
    let step = () => {
      let elapsed = Date.now() - clock;
      let position = this.position(start, end, elapsed, duration);
      element.scrollLeft = position;
      if (elapsed > duration) {
      } else {
        requestAnimationFrame(step);
      }
    };
    step();
  }

  // ease in out function thanks to:
  // http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
  easeInOutCubic(t: number): number {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
  /**
    * calculate the scroll position we should be in
    * given the start and end point of the scroll
    * the time elapsed from the beginning of the scroll
    * and the total duration of the scroll (default 500ms)
    */
  private position(start: number, end: number, elapsed: number, duration: number): number {
    if (elapsed > duration) {
      return end;
    };
    return start + (end - start) * this.easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
    // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
  }
  
  
}
