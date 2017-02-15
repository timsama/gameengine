export default function Bottle(bottleContents) {
	this.bottleContents = bottleContents;
};

Bottle.prototype.useContents = function(character, other) {
	let contents = this.bottleContents;
	let target = Bottle.isSelfTargeted(contents) ? character : other;

	this.bottleContents = Bottle.Contents.EMPTY;
	return target.applyBottle(contents);
}

Bottle.isSelfTargeted = (bottleContents) => {
	let selfTargetedBottleContents = [
		Bottle.Contents.FAIRY,
		Bottle.Contents.RED_POTION,
		Bottle.Contents.BLUE_POTION,
	];

	return selfTargetedBottleContents.includes(bottleContents);
}

Bottle.Contents = {
	EMPTY: 0,
	WATER: 1,
	FAIRY: 2,
	RED_POTION: 3,
	BLUE_POTION: 4,
};