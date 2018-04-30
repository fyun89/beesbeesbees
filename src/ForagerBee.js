var ForagerBee = function(value) {
	Bee.call(this, value);
	this.age = 10;
	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype.eat = function(value) {
	return value;
};

ForagerBee.prototype.forage = function(value) {
	this.treasureChest.push(value)
};