import {Component} from 'angular2/core';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import {UserValidators} from './validators/userValidators';

@Component({
	template:`
		<form [ngFormModel]="userDataForm" class="col-md-3">
		  <h2>Users</h2>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Name</label>
		    <input type="text" ngControl="name" #name="ngForm" class="form-control" id="exampleInputEmail1" placeholder="Name" required>
		    <div *ngIf="name.touched && name.errors">
		    	<div
		    		*ngIf="name.errors.required"
		    		class="alert alert-danger">
		    		Name is required
		    	</div>		    	
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">Email</label>
		    <input type="email" ngControl="email" #email="ngForm" class="form-control" id="exampleInputPassword1" placeholder="Email">
		    <div *ngIf="email.touched && email.errors">
		    	<div class="alert alert-danger" *ngIf="email.errors.required">Email is required</div>

		    </div>
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">Phone</label>
		    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Phone">
		  </div>

		  <h2>Address</h2>
		  <div class="form-group">
		    <label for="exampleInputEmail1">Street</label>
		    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Street">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">Suite</label>
		    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Suite">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">City</label>
		    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="City">
		  </div>
		  <div class="form-group">
		    <label for="exampleInputPassword1">ZipCode</label>
		    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="ZipCode">
		  </div>
		 
		  <button type="submit" class="btn btn-default">Submit</button>
		</form>
	`,
	styles: [`
		form{
			padding:1em;
			background-color:#ECECEC;
		}
	`]
})

export class UsernewComponent{
	userDataForm : ControlGroup;

	constructor(fb: FormBuilder){
		this.userDataForm = fb.group({
			name: ['', Validators.required],
			email
		})
	}
}