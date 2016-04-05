System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AdamasHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AdamasHomeComponent = (function () {
                function AdamasHomeComponent() {
                }
                AdamasHomeComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<div class=\"container-fluid\">\n\t\t\t<form class=\"col-md-2 login-form\">\n\t\t\t\t<legend>TRACCS Login</legend>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <input type=\"text\" class=\"form-control\" id=\"uname\" placeholder=\"Username\">\n\t\t\t    <i class=\"fa fa-user\"></i>\n\t\t\t  </div>\n\t\t      <div class=\"form-group\">\n\t\t\t    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n\t\t\t    <i class=\"fa fa-lock\"></i>\n\t\t\t  </div>\n\t\t\t  <button type=\"submit\" class=\"btn btn-lg col-md-12\" style=\"background-color:#339E8F;color:#fff\"><i class=\"fa fa-lemon-o\"></i> Login</button>\n\t\t\t\t<nav>\n\t\t\t\t\t<span>Forgot</span> | <span>Register</span>\n\t\t\t\t</nav>\n\t\t\t</form>\n\t\t</div>\n\t",
                        styles: ["\n\n\t\tform.login-form{\n\t\t\tmargin-top:5em;\n\t\t\tpadding:2em 2em 3em 2em;\n\t\t\tbackground-color:rgba(179, 179, 179, 0.3);\n\t\t\tborder-bottom-right-radius:0.5em;\n\t\t\tborder-top-right-radius: 0.5em;\n\t\t\tborder-left:3px solid #43CCAC;\n\t\t\tborder-bottom:3px solid #43CCAC;\n\t\t}\n\n\t\tform.login-form nav{\n\t\t\tfloat:right;\n\t\t}\n\n\t\tform.login-form nav span{\n\t\t\tcolor:#757575;\n\t\t\tfont-size:0.8em;\n\t\t}\n\n\t\t.form-group{\n\t\t\tposition:relative;\n\t\t}\n\n\t\t.form-group i{\n\t\t    position: absolute;\n\t\t    top: 8px;\n\t\t    left: 10px;\n\t\t    color:#848484;\n\t\t}\n\n\t\t.form-group input{\n\t\t\tpadding-left:2em;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdamasHomeComponent);
                return AdamasHomeComponent;
            }());
            exports_1("AdamasHomeComponent", AdamasHomeComponent);
        }
    }
});
//# sourceMappingURL=adamashome.component.js.map