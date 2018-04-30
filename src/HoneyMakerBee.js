var HoneyMakerBee = function(value) {
	Bee.call(this, value);
	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;
};

HoneyMakerBee.prototype.eat = function (value) {
	return value;
};

HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot--;
};