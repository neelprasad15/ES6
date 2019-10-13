"use strict";
// Arrow Function
var arrow = function (m) { return 5 * m; };
console.log(arrow(5));
var obj = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
obj.greet();
//# sourceMappingURL=test.js.map