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
    var FItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FItemComponent = (function () {
                function FItemComponent(_elRef) {
                    this._elRef = _elRef;
                }
                FItemComponent.prototype.ngOnInit = function () {
                    var jQ = jQuery(this._elRef.nativeElement);
                    jQ.find('.datepicker').datepicker({
                        format: 'mm/dd/yyyy',
                        startDate: '-3d',
                        orientation: 'bottom auto',
                        autoclose: true,
                    });
                };
                FItemComponent = __decorate([
                    core_1.Component({
                        selector: 'fitem-component',
                        template: "\n\t\t<div class=\"container-fluid\">\n\t\t\t<form class=\"col-md-4 form-maintenance\">\n\t\t\t  <legend>Reminders</legend>\n\t\t\t  <div class=\"form-group\">\n\t\t\t     <label for=\"category\">Category</label>\n\t\t\t      <select id=\"category\" class=\"form-control\">\n\t\t\t      \t<option selected></option>\n\t\t\t        <option>Category 1</option>\n\t\t\t        <option>Category 2</option>\n\t\t\t        <option>Category 3</option>\n\t\t\t        <option>Category 4</option>\n\t\t\t        <option>Category 5</option>\n\t\t\t      </select>\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"exampleInputPassword1\">Name/Title</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Name/Title\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t      <label for=\"category\">Category</label>\n\t\t\t      <select id=\"category\" class=\"form-control\">\n\t\t\t      \t<option selected></option>\n\t\t\t        <option>Category 1</option>\n\t\t\t        <option>Category 2</option>\n\t\t\t        <option>Category 3</option>\n\t\t\t        <option>Category 4</option>\n\t\t\t        <option>Category 5</option>\n\t\t\t      </select>\n\t\t\t   </div>\n\n\t\t\t\t<div class=\"form-group col-md-4 dateform\">\n\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t <div class=\"input-group date\">\t\t\t\t\t \t\n\t\t\t\t\t    <input type=\"text\" data-provide=\"datepicker\" class=\"form-control datepicker\">\n\t\t\t\t\t    <div class=\"input-group-addon\">\n\t\t\t\t\t        <span class=\"glyphicon glyphicon-th show-icon\"></span>\n\t\t\t\t\t    </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t  <button type=\"submit\" class=\"btn btn-warning\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n\t\t\t</form>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.form-maintenance{\n\t\t\tmargin-top:4em;\n\t\t\tpadding:2em;\n\t\t\tbackground-color:#F3F0EA;\n\t\t\tborder-left:3px solid #43CCAC;\n\t\t}\n\n\t\t.form-maintenance button{\n\t\t\tfloat:right;\n\t\t}\n\n\n\t\t.form-maintenance legend{\n\t\t\tmargin:0 0 2em 0;\n\t\t}\n\n\t\tselect{\n\t\t\tcursor:pointer;\n\t\t}\n\n\t\t.dateform{\n\t\t\tposition:relative;\n\t\t}\n\n\t\t.dateform input[type=\"checkbox\"]{\n\t\t\tposition: absolute;\n\t\t    top: 0.4em;\n\t\t    left: 1.5em;\n\t\t    z-index: 100;\n\t\t}\n\n\t\t.dateform input[type=\"text\"]{\n\t\t\tpadding-left:2em;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], FItemComponent);
                return FItemComponent;
            }());
            exports_1("FItemComponent", FItemComponent);
        }
    }
});
//# sourceMappingURL=fitem.component.js.map