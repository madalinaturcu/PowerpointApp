// function greet(name: string) {
// 	return 'Hello ' + name;
// }
"use strict";
// export = greet;
// module SV {
// 	export class Employee {
// 		name;
// 		salary;
// 		constructor (n: String, s: Number) {
// 			this.name = n;  
// 			this.salary = s;
// 		};
// 		show() {
// 			return 'Name: ' + this.name + ' ' + 'Salary: ' + this.salary;
// 		}
// 		giveRaise(raise: Number) {
// 			this.salary = this.salary + raise;
// 		}
// 	}
// }
// var person = new SV.Employee ('Madalina', 5);
// person.giveRaise(1000);
// document.body.innerHTML = person.show();
var Slide = (function () {
    function Slide(title, content, img) {
        this.title = title;
        this.text = content;
        this.image = img;
    }
    ;
    Slide.prototype.display = function () {
        return this.title + ' ' + this.text + ' ' + this.image;
    };
    return Slide;
}());
exports.Slide = Slide;
var newSlide = new Slide('title', 'regefverg43g', 'sgfere');
