export default function PersistentCharacterState(maxHp, maxMp, armor, armorFlags, weapon, weaponFlags, shield, shieldFlags, equipA, equipB, equipFlags, mapId, bottles) {
	this.maxHp = maxHp;
	this.maxMp = maxMp;
	this.armor = armor;
	this.armorFlags = armorFlags;
	this.weapon = weapon;
	this.weaponFlags = weaponFlags;
	this.shield = shield;
	this.shieldFlags = shieldFlags;
	this.equipA = equipA;
	this.equipB = equipB;
	this.equipFlags = equipFlags;
	this.mapId = mapId;
	this.bottles = bottles;
};

PersistentCharacterState.prototype.serialize = function() {
	return JSON.stringify(this);
};

PersistentCharacterState.prototype.deserialize = function(json) {
	let temp = JSON.parse(json);

	this.maxHp = temp.maxHp;
	this.maxMp = temp.maxMp;
	this.armor = temp.armor;
	this.armorFlags = temp.armorFlags;
	this.weapon = temp.weapon;
	this.weaponFlags = temp.weaponFlags;
	this.shield = temp.shield;
	this.shieldFlags = temp.shieldFlags;
	this.equipA = temp.equipA;
	this.equipB = temp.equipB;
	this.equipFlags = temp.equipFlags;
	this.mapId = temp.mapId;
	this.bottles = temp.bottles;

	return this;
};
