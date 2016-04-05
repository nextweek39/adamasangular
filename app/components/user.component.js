System.register(['angular2/core', './services/user.service', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, user_service_1, http_1, router_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(_userService) {
                    this._userService = _userService;
                    this.users = [];
                }
                UserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (prod) {
                        _this.users = prod;
                    });
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user-app',
                        template: "\n\t<h2>Users</h2>\n\t<div style=\"padding:1em\">\n\t\t<p [routerLink]=\"['UserNew']\" class=\"btn btn-primary\">Add User</p>\n\t</div>\n\t<div class=\"col-md-9\">\n\t\t<table class=\"table table-bordered\">\n\t\t  <tr>\n\t\t  \t<th class=\"col-md-5\">Name</th>\n\t\t  \t<th class=\"col-md-5\">Email</th>\n\t\t  \t<th class=\"col-md-1\">Edit</th>\n\t\t  \t<th class=\"col-md-1\">Delete</th>\n\t\t  </tr>\n\t\t  <tr *ngFor=\"#user of users\">\n\t\t  \t<td>{{ user.name }}</td>\n\t\t  \t<td>{{ user.email }}</td>\n\t\t  \t<td><i class=\"fa fa-pencil-square-o\"></i></td>\n\t\t  \t<td><i class=\"fa fa-times\"></i></td>\n\t\t  </tr>\n\t\t</table>\n\t</div>\n\t",
                        providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map