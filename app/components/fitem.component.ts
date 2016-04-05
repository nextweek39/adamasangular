import {Component, OnInit,ElementRef} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
declare var jQuery:any;

@Component({
	selector: 'fitem-component',
	template: `
		<div class="container-fluid">
			<form class="col-md-4 form-maintenance">
			  <legend>Reminders</legend>
			  <div class="form-group">
			     <label for="category">Category</label>
			      <select id="category" class="form-control">
			      	<option selected></option>
			        <option>Category 1</option>
			        <option>Category 2</option>
			        <option>Category 3</option>
			        <option>Category 4</option>
			        <option>Category 5</option>
			      </select>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Name/Title</label>
			    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name/Title">
			  </div>
			  <div class="form-group">
			      <label for="category">Category</label>
			      <select id="category" class="form-control">
			      	<option selected></option>
			        <option>Category 1</option>
			        <option>Category 2</option>
			        <option>Category 3</option>
			        <option>Category 4</option>
			        <option>Category 5</option>
			      </select>
			   </div>

				<div class="form-group col-md-4 dateform">
					<input type="checkbox">
					 <div class="input-group date">					 	
					    <input type="text" data-provide="datepicker" class="form-control datepicker">
					    <div class="input-group-addon">
					        <span class="glyphicon glyphicon-th show-icon"></span>
					    </div>
					</div>
				</div>

			  <button type="submit" class="btn btn-warning"><i class="fa fa-floppy-o"></i> Save</button>
			</form>
		</div>
	`,

	styles:[`
		.form-maintenance{
			margin-top:4em;
			padding:2em;
			background-color:#F3F0EA;
			border-left:3px solid #43CCAC;
		}

		.form-maintenance button{
			float:right;
		}


		.form-maintenance legend{
			margin:0 0 2em 0;
		}

		select{
			cursor:pointer;
		}

		.dateform{
			position:relative;
		}

		.dateform input[type="checkbox"]{
			position: absolute;
		    top: 0.4em;
		    left: 1.5em;
		    z-index: 100;
		}

		.dateform input[type="text"]{
			padding-left:2em;
		}
	`]
})

export class FItemComponent implements  OnInit{
	constructor(private _elRef: ElementRef){

	}

	ngOnInit(){
		var jQ = jQuery(this._elRef.nativeElement);
		jQ.find('.datepicker').datepicker({
		    format: 'mm/dd/yyyy',
		    startDate: '-3d',
		    orientation: 'bottom auto',
		    autoclose: true,
		});
	}
}