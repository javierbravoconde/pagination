import {Component, Directive, HostListener, Output, Input, EventEmitter} from '@angular/core';

@Directive({
    selector: '[scrollTracker]',    
})

export class ScrollTrackerComponent {
   
    @Output() notifyScrollBottom: EventEmitter<any> = new EventEmitter();
    @Output() notifyScrollTop: EventEmitter<any> = new EventEmitter();
	
	@Output() notifyScrollFinished: EventEmitter<any> = new EventEmitter();
	
	@Input() scrollableElementSelector: string;
	@Input() active: boolean;
	
	scrollTimer;
	
	leftBeforeScroll: number;
	leftAfterScroll: number;
	
	
	constructor()
	{
		console.log("entering constructor");	
		this.leftBeforeScroll = 0;
		this.leftAfterScroll = 0;
	}

    @HostListener('scroll', ['$event'])
    onScroll(event) {
				
        let tracker = event.target;
						
        if (this.scrollTimer){            
			clearTimeout(this.scrollTimer);			
		}
			
		this.scrollTimer = setTimeout (() => {
			    this.scrollTimer = null;
			
				let target: HTMLElement;						
				target = <HTMLElement>document.querySelector(this.scrollableElementSelector);
				
				this.leftBeforeScroll = this.leftAfterScroll;
				this.leftAfterScroll = 	target.scrollLeft;
							    
				let leftbefore: number = this.leftBeforeScroll;
				let leftafter: number = this.leftAfterScroll;
				let clientwidth: number = target.clientWidth;
				
				this.notifyScrollFinished.emit({leftbefore, leftafter, clientwidth});																					
		}, 100)
		
    }				
}





