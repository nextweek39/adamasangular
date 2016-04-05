import {Component,ElementRef,OnInit} from 'angular2/core';
declare var jQuery:any;

@Component({
	selector: 'my-query',
	template:`
		<button>Click Me</button>
	`,

})

export class jQueryComponent implements OnInit{

	constructor(private _elRef: ElementRef){

	}

	ngOnInit(){
		jQuery(this._elRef.nativeElement).find('button').on('click',function(){
			console.log('it works');
		})
	}
}