import Bottle from './bottle';

describe('bottle', () => {
	it('should be able to tell if its contents are self-targeting', () => {
		let selfTargeted = Bottle.isSelfTargeted;

		expect(selfTargeted(Bottle.Contents.EMPTY)).toBe(false);
		expect(selfTargeted(Bottle.Contents.FAIRY)).toBe(true);
		expect(selfTargeted(Bottle.Contents.RED_POTION)).toBe(true);
		expect(selfTargeted(Bottle.Contents.BLUE_POTION)).toBe(true);
		expect(selfTargeted(Bottle.Contents.MILK_HALF)).toBe(true);
		expect(selfTargeted(Bottle.Contents.MILK_FULL)).toBe(true);
	});

	it('should be able to consume its contents correctly', () => {
		// empty cases
		expect(Bottle.getConsumedContents(Bottle.Contents.EMPTY)).toBe(Bottle.Contents.EMPTY);
		expect(Bottle.getConsumedContents(Bottle.Contents.FAIRY)).toBe(Bottle.Contents.EMPTY);
		expect(Bottle.getConsumedContents(Bottle.Contents.RED_POTION)).toBe(Bottle.Contents.EMPTY);
		expect(Bottle.getConsumedContents(Bottle.Contents.BLUE_POTION)).toBe(Bottle.Contents.EMPTY);
		expect(Bottle.getConsumedContents(Bottle.Contents.MILK_HALF)).toBe(Bottle.Contents.EMPTY);

		// non-empty cases
		expect(Bottle.getConsumedContents(Bottle.Contents.MILK_FULL)).toBe(Bottle.Contents.MILK_HALF);
	});
});