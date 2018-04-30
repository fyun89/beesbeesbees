var Bee = function(value) {
	Grub.call(this, value);
	this.age = 5;
	this.color = 'yellow';
	this.job = 'keep on growing';
};

Bee.prototype.eat = function (value){
	return value;
};

var bee = new Bee;