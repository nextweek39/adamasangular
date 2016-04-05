System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserValidators;
    return {
        setters:[],
        execute: function() {
            UserValidators = (function () {
                function UserValidators() {
                }
                UserValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { cannotContainSpace: true };
                    return null;
                };
                return UserValidators;
            }());
            exports_1("UserValidators", UserValidators);
        }
    }
});
//# sourceMappingURL=userValidators.js.map