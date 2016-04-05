import {Component} from "angular2/core"
import {RouterLink} from 'angular2/router';

@Component({
	selector: "adamas-header",
	template: `
		<div class="">
			<header>
				<h3 [routerLink]="['Home']">Adamas</h3>
				<nav>
					<span [routerLink]="['Item']">fItem</span>
					
				</nav>
			</header>
		</div>
	`,
	styles: [".router-link-active { color: #339E8F; }"],
	directives: [RouterLink]
})

export class AdamasHeaderComponent{

}