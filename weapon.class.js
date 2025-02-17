class Weapon extends Item {
	/**
	 *
	 * @param {string} name
	 * @param {number} weight
	 * @param {"common" | "uncommon" | "rare" | "legendary"} rarity
	 * @param {number} damage
	 * @param {number} durability
	 */
	constructor(name, weight, rarity, damage, durability) {
		super(name, weight, rarity);
		this.damage = damage;
		this.durability = durability;
	}

	use() {
		if (this.durability > 0) {
			this.durability -= 10;
			if (this.durability < 0) {
				this.durability = 0;
			}
			console.log(`Weapon used. Durability: ${this.durability}`);
		} else {
			console.log('Weapon is broken!');
		}
	}

	repair() {
		this.durability = 100;
		console.log('Weapon repaired.');
	}

	getInfo() {
		return `${super.getInfo()} (Damage: ${this.damage}, Durability: ${this.durability}%)`;
	}
}
