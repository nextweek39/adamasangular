import {Component, OnInit} from 'angular2/core';
import {UserService} from './services/user.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouterLink} from 'angular2/router';

@Component({
	selector: 'user-app',
	template: `
	<h2>Users</h2>
	<div style="padding:1em">
		<p [routerLink]="['UserNew']" class="btn btn-primary">Add User</p>
	</div>
	<div class="col-md-9">
		<table class="table table-bordered">
		  <tr>
		  	<th class="col-md-5">Name</th>
		  	<th class="col-md-5">Email</th>
		  	<th class="col-md-1">Edit</th>
		  	<th class="col-md-1">Delete</th>
		  </tr>
		  <tr *ngFor="#user of users">
		  	<td>{{ user.name }}</td>
		  	<td>{{ user.email }}</td>
		  	<td><i class="fa fa-pencil-square-o"></i></td>
		  	<td><i class="fa fa-times"></i></td>
		  </tr>
		</table>
	</div>
	`,
	providers: [UserService,HTTP_PROVIDERS],
	directives: [RouterLink]
})

export class UserComponent implements OnInit{

	users = [];
	constructor(private _userService: UserService){

	}

	ngOnInit(){
		this._userService.getUsers()
			.subscribe(prod => {
				this.users = prod;
			})
	}


}