/**
 *
 * @param {string} name
 * @param {number} weight
 * @param {"common" | "uncommon" | "rare" | "legendary"} rarity
 * @param {number} damage
 * @param {number} durability
 * @constructor
 */
function Weapon(name, weight, rarity, damage, durability) {
	Item.call(this, name, weight, rarity);
	this.damage = damage;
	this.durability = durability;
}

Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.constructor = Weapon;

Weapon.prototype.use = function () {
	if (this.durability > 0) {
		this.durability -= 10;
		if (this.durability < 0) {
			this.durability = 0;
		}
		console.log(`Weapon used. Durability: ${this.durability}`);
	} else {
		console.log('Weapon is broken!');
	}
};

Weapon.prototype.repair = function () {
	this.durability = 100;
	console.log('Weapon repaired.');
};

Weapon.prototype.getInfo = function () {
	return `${Item.prototype.getInfo.call(this)} (Damage: ${this.damage}, Durability: ${this.durability}%)`;
};
