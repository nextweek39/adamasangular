System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var UsernewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            UsernewComponent = (function () {
                function UsernewComponent(fb) {
                    this.userDataForm = fb.group({
                        name: ['', common_1.Validators.required],
                        email: email
                    });
                }
                UsernewComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<form [ngFormModel]=\"userDataForm\" class=\"col-md-3\">\n\t\t  <h2>Users</h2>\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"exampleInputEmail1\">Name</label>\n\t\t    <input type=\"text\" ngControl=\"name\" #name=\"ngForm\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Name\" required>\n\t\t    <div *ngIf=\"name.touched && name.errors\">\n\t\t    \t<div\n\t\t    \t\t*ngIf=\"name.errors.required\"\n\t\t    \t\tclass=\"alert alert-danger\">\n\t\t    \t\tName is required\n\t\t    \t</div>\t\t    \t\n\t\t    </div>\n\t\t  </div>\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"exampleInputPassword1\">Email</label>\n\t\t    <input type=\"email\" ngControl=\"email\" #email=\"ngForm\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Email\">\n\t\t    <div *ngIf=\"email.touched && email.errors\">\n\t\t    \t<div class=\"alert alert-danger\" *ngIf=\"email.errors.required\">Email is required</div>\n\n\t\t    </div>\n\t\t  </div>\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"exampleInputPassword1\">Phone</label>\n\t\t    <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Phone\">\n\t\t  </div>\n\n\t\t  <h2>Address</h2>\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"exampleInputEmail1\">Street</label>\n\t\t    <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Street\">\n\t\t  </div>\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"exampleInputPassword1\">Suite</label>\n\t\t    <input type=\"email\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Suite\">\n\t\t  </div>\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"exampleInputPassword1\">City</label>\n\t\t    <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"City\">\n\t\t  </div>\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"exampleInputPassword1\">ZipCode</label>\n\t\t    <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"ZipCode\">\n\t\t  </div>\n\t\t \n\t\t  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n\t\t</form>\n\t",
                        styles: ["\n\t\tform{\n\t\t\tpadding:1em;\n\t\t\tbackground-color:#ECECEC;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], UsernewComponent);
                return UsernewComponent;
            }());
            exports_1("UsernewComponent", UsernewComponent);
        }
    }
});
//# sourceMappingURL=usernew.component.js.map