import {Component} from 'angular2/core';

@Component({
	template: `
		<div class="container-fluid">
			<form class="col-md-2 login-form">
				<legend>TRACCS Login</legend>
			  <div class="form-group">
			    <input type="text" class="form-control" id="uname" placeholder="Username">
			    <i class="fa fa-user"></i>
			  </div>
		      <div class="form-group">
			    <input type="password" class="form-control" id="password" placeholder="Password">
			    <i class="fa fa-lock"></i>
			  </div>
			  <button type="submit" class="btn btn-lg col-md-12" style="background-color:#339E8F;color:#fff"><i class="fa fa-lemon-o"></i> Login</button>
				<nav>
					<span>Forgot</span> | <span>Register</span>
				</nav>
			</form>
		</div>
	`,
	styles:[`

		form.login-form{
			margin-top:5em;
			padding:2em 2em 3em 2em;
			background-color:rgba(179, 179, 179, 0.3);
			border-bottom-right-radius:0.5em;
			border-top-right-radius: 0.5em;
			border-left:3px solid #43CCAC;
			border-bottom:3px solid #43CCAC;
		}

		form.login-form nav{
			float:right;
		}

		form.login-form nav span{
			color:#757575;
			font-size:0.8em;
		}

		.form-group{
			position:relative;
		}

		.form-group i{
		    position: absolute;
		    top: 8px;
		    left: 10px;
		    color:#848484;
		}

		.form-group input{
			padding-left:2em;
		}
	`]
})

export class AdamasHomeComponent{

}