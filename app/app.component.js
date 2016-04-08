System.register(['angular2/core', "angular2/router", "./header.component", './components/fitem.component', './components/adamashome.component', './components/adamasheader.component', './breadcrumb.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, header_component_1, fitem_component_1, adamashome_component_1, adamasheader_component_1, breadcrumb_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (fitem_component_1_1) {
                fitem_component_1 = fitem_component_1_1;
            },
            function (adamashome_component_1_1) {
                adamashome_component_1 = adamashome_component_1_1;
            },
            function (adamasheader_component_1_1) {
                adamasheader_component_1 = adamasheader_component_1_1;
            },
            function (breadcrumb_component_1_1) {
                breadcrumb_component_1 = breadcrumb_component_1_1;
            }],
        execute: function() {
            // @RouteConfig([
            // 		{path:"/",name:"Home", component:HomeComponent, useAsDefault:true},
            // 		{path:"/users",name:"Users", component:UserComponent},
            // 		{path:"/posts",name:"Posts", component:PostComponent},
            // 		{path:"/users/new",name:"UserNew", component:UsernewComponent},
            // 		{path:"/*other",name:"Other",redirectTo:['Home']}
            // 	])
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: "/", name: "Home", component: adamashome_component_1.AdamasHomeComponent, useAsDefault: true },
                        { path: "/fItem", name: "Item", component: fitem_component_1.FItemComponent },
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        providers: [],
                        template: "\n    \t\t\t<adamas-header></adamas-header>\n    \t\t\t<margin>\n                    <breadcrumb [routeConfig]=\"routeConfig\"></breadcrumb>\n    \t\t\t\t<router-outlet></router-outlet>\n    \t\t\t</margin>\n    \t\t\t\n    ",
                        directives: [
                            header_component_1.HeaderComponent,
                            router_1.ROUTER_DIRECTIVES,
                            fitem_component_1.FItemComponent,
                            adamashome_component_1.AdamasHomeComponent,
                            adamasheader_component_1.AdamasHeaderComponent,
                            breadcrumb_component_1.BreadcrumbComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map