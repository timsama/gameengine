import Bottle from './bottle';

describe('bottle', () => {
	it('should be able to tell if its contents are self-targeting', () => {
		let selfTargeted = Bottle.isSelfTargeted;

		expect(selfTargeted(Bottle.Contents.EMPTY)).toBe(false);
		expect(selfTargeted(Bottle.Contents.FAIRY)).toBe(true);
		expect(selfTargeted(Bottle.Contents.RED_POTION)).toBe(true);
		expect(selfTargeted(Bottle.Contents.BLUE_POTION)).toBe(true);
	});

	it('should be able to apply self-targeting contents to the passed-in character', () => {
		let bottle = new Bottle(Bottle.Contents.RED_POTION);

		let character = { applyBottle: (contents) => {
				return true;
			}
		}
		let target = { applyBottle: (contents) => {
				return false;
			}
		}

		expect(bottle.useContents(character, target)).toBe(true);
	});

	it('should be able to apply non-self-targeting contents to passed-in targets', () => {
		let bottle = new Bottle(Bottle.Contents.EMPTY);

		let character = { applyBottle: (contents) => {
				return false;
			}
		}
		let target = { applyBottle: (contents) => {
				return true;
			}
		}

		expect(bottle.useContents(character, target)).toBe(true);
	});
});