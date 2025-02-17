/**
 *
 * @param {string} name
 * @param {number} weight
 * @param {"common" | "uncommon" | "rare" | "legendary"} rarity
 * @constructor
 */
function Item(name, weight, rarity) {
	this.name = name;
	this.weight = weight;
	this.rarity = rarity;
}

Item.prototype.getInfo = function () {
	return `${this.rarity} ${this.name}`;
};

/**
 *
 * @param {number} newWeight
 */
Item.prototype.setWeight = function (newWeight) {
	this.weight = newWeight;
};
