

export default gameengine.model.persistent.CharacterState = (maxHp, maxMp, weapon, shield, boundEquipA, boundEquipB, equipFlags, mapId, bottles) => {
	this.maxHp = maxHp;
	this.maxMp = maxMp;
	this.weapon = weapon;
	this.shield = shield;
	this.boundEquipA = boundEquipA;
	this.boundEquipB = boundEquipB;
	this.equipFlags = equipFlags;
	this.mapId = mapId;
	this.bottles = bottles;
};