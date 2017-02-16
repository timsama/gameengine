import PersistentCharacterState from './characterstate';
import Bottle from '../bottle';

describe('PersistentCharacterState', () => {
	var expectedCharacter = new PersistentCharacterState(
		3,				// maxHp
		10,				// maxMp
		'armor',		// armor
		'armorFlags',	// armorFlags
		'weapon',		// weapon
		'weaponFlags',	// weaponFlags
		'shield',		// shield
		'shieldFlags',	// shieldFlags
		'equipA',		// equipA
		'equipB',		// equipB
		'equipFlags',	// equipFlags
		'mapId',		// mapId
		[
			Bottle.Contents.EMPTY,
			Bottle.Contents.RED_POTION,
			Bottle.Contents.FAIRY,
		]
	);

	var expectedJson = '{' +
		'"maxHp":3,' +
		'"maxMp":10,' +
		'"armor":"armor",' +
		'"armorFlags":"armorFlags",' +
		'"weapon":"weapon",' +
		'"weaponFlags":"weaponFlags",' +
		'"shield":"shield",' +
		'"shieldFlags":"shieldFlags",' +
		'"equipA":"equipA",' +
		'"equipB":"equipB",' +
		'"equipFlags":"equipFlags",' +
		'"mapId":"mapId",' +
		'"bottles":[' +
			Bottle.Contents.EMPTY + ',' +
			Bottle.Contents.RED_POTION + ',' +
			Bottle.Contents.FAIRY +
		']' +
	'}';

	it('should serialize into JSON as expected', () => {
		expect(expectedCharacter.serialize()).toEqual(expectedJson);
	});

	it('should deserialize from JSON as expected', () => {
		let actual = new PersistentCharacterState();
		expect(actual.deserialize(expectedJson)).toEqual(expectedCharacter);
	});
});
