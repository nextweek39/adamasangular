import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {HeaderComponent} from "./header.component";

// import {UserComponent} from "./components/user.component";
// import {HomeComponent} from "./components/home.component";
// import {PostComponent} from "./components/post.component";
// import {UsernewComponent} from './components/usernew.component';

import {FItemComponent} from './components/fitem.component';
import {AdamasHomeComponent} from './components/adamashome.component';
import {AdamasHeaderComponent} from './components/adamasheader.component';


// @RouteConfig([
// 		{path:"/",name:"Home", component:HomeComponent, useAsDefault:true},
// 		{path:"/users",name:"Users", component:UserComponent},
// 		{path:"/posts",name:"Posts", component:PostComponent},
// 		{path:"/users/new",name:"UserNew", component:UsernewComponent},
// 		{path:"/*other",name:"Other",redirectTo:['Home']}
// 	])


@RouteConfig([
		{path:"/", name:"Home", component:AdamasHomeComponent, useAsDefault:true},
		{path:"/fItem",name:"Item", component: FItemComponent },
	])



@Component({
    selector: 'my-app',
    providers: [],
    template: `
    			<!--<header-component></header-component>
    		    <main>
    			 	<router-outlet></router-outlet>
    			</main> -->

    			<adamas-header></adamas-header>
    			<margin>
    				<router-outlet></router-outlet>
    			</margin>
    			
    `,
   
    directives: [HeaderComponent, ROUTER_DIRECTIVES,FItemComponent,AdamasHomeComponent,AdamasHeaderComponent]
})
export class AppComponent { 
	constructor(){

	}
}