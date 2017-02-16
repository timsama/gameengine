export default function Bottle() {};

Bottle.Contents = {
	EMPTY: 0,
	WATER: 1,
	FAIRY: 2,
	RED_POTION: 3,
	BLUE_POTION: 4,
	MILK_HALF: 5,
	MILK_FULL: 6,
};

Bottle.getConsumedContents = function(bottleContents) {
	if (bottleContents == Bottle.Contents.MILK_FULL) {
		return Bottle.Contents.MILK_HALF;
	} else {
		return Bottle.Contents.EMPTY;
	}
}

Bottle.isSelfTargeted = (bottleContents) => {
	let selfTargetedBottleContents = [
		Bottle.Contents.FAIRY,
		Bottle.Contents.RED_POTION,
		Bottle.Contents.BLUE_POTION,
		Bottle.Contents.MILK_HALF,
		Bottle.Contents.MILK_FULL,
	];

	return selfTargetedBottleContents.includes(bottleContents);
}
