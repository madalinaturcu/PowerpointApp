// function greet(name: string) {
// 	return 'Hello ' + name;
// }

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

// export class Slide {
// 	title: String;
// 	text : String;
// 	image: URL;

// 	constructor(title: String, content: String, img) {
// 		this.title = title;
// 		this.text = content;
// 		this.image = img;
// 	};

// 	display() {
// 		return this.title + ' ' + this.text + ' ' + this.image;
// 	}

// }

// var newSlide = new Slide('title', 'content', 'https://media.licdn.com/media/AAEAAQAAAAAAAANbAAAAJDE5NjBkNDk1LTY3ZGQtNDA0NS04YTJiLTdkNmU3NjZiNjI3Mg.png');
// document.body.innerHTML = newSlide.display();