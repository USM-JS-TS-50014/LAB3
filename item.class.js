class Item {
	/**
	 *
	 * @param {string} name
	 * @param {number} weight
	 * @param {"common" | "uncommon" | "rare" | "legendary"} rarity
	 */
	constructor(name, weight, rarity) {
		this.name = name;
		this.weight = weight;
		this.rarity = rarity;
	}

	getInfo() {
		return `${this.rarity} ${this.name} (Weight: ${this.weight}kg)`;
	}

	/**
	 *
	 * @param {number} newWeight
	 */
	setWeight(newWeight) {
		if (typeof newWeight === 'number' && newWeight >= 0) {
			this.weight = newWeight;
		}
	}
}
