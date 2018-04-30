var Bee = function(value) {
	Grub.call(this, value);
	this.age = 5;
	this.color = 'yellow';
	this.job = 'keep on growing';
};

// Bee.prototype.eat = function (value){
// };
Bee.prototype = Object.create(Grub.prototype)
Bee.prototype.constructor = Bee;

var bee = new Bee;