"use strict";
// // Arrow Function
// let arrow = (m:number) => 5*m;
// console.log(arrow(5));
// var obj = {
//     id : 1,
//     greet : function() {
//         var self = this; //If we want to access outside object property inside normal a function
//         setTimeout(function(){console.log(self.id)}, 1000);
//         setTimeout(()=>{console.log(this.id)}, 1000);//This keyword is applicable in arrow function
//     }
// }
// obj.greet();
// // ------------------------------------
// // Specifying default arguments in function
// let givenBonus = () => 0.1;
// let fun = function(value=10,bonus=value*givenBonus()){
//     console.log(value + bonus)
// }
// fun();
// fun(undefined,30);
// fun(200);
// fun(20,10);
// ------------------------------------
// Rest operator (Combine)
// * It is used to pass mutiple number of arguments
// * It puts variable number of arguments into an array
// * It must be only one argument in the fuction or it must be the last argument 
// * We can also use any number aruguments without declaring and it can be used inside the function
// * It is specified in function declaration
// Spread operator(Split)
// * It takes an array and splits into indivdual element
// * It is specified in function call
// * Passing array as an arguments
var restOperator = function (a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    for (var i in c) {
        console.log(a, b, c[i]);
    }
};
restOperator(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
var spreadOperator = [3, 5, 1];
console.log(Math.max.apply(Math, spreadOperator)); // 5 (spread turns array into a list of arguments)
//Object Literls
var firstName = "Neel";
var lastName = "Prasad";
var emp = {
    firstName: firstName,
    lastName: lastName,
};
function objLit(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return { firstName: firstName, lastName: lastName, fullName: fullName };
}
var p = objLit("Neel", "Prasad");
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
//# sourceMappingURL=test.js.map