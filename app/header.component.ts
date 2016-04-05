import {Component} from "angular2/core"
import {RouterLink} from 'angular2/router';

@Component({
	selector: "header-component",
	template: `
		<div class="">
			<header>
				<h3 [routerLink]="['Home']">ngProject</h3>
				<nav>
					<span [routerLink]="['Users']">Users</span>
					<span [routerLink]="['Posts']">Posts</span>
				</nav>
			</header>
		</div>
	`,
	styles: [".router-link-active { color: #339E8F; }"],
	directives: [RouterLink]
})

export class HeaderComponent{

}