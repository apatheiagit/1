'use strict'
class Pokemon {
	constructor(name, level){
		this.name = name;
		this.level = level;
	}
	show(){
		console.log('%s - покемон %d уровня', this.name, this.level);
	}
	valueOf(){
		return this.level;
	}
};
class PokemonList extends Array {
	constructor(...Pokemons){
		super(...Pokemons);
	}
	add(name, level){
		let newPokemon = new Pokemon(name, level);
		this.push(newPokemon);
	}
	show(){
		for (let pokemon of this){
			pokemon.show();
		}
		console.log('Общее количество покемонов: %d', this.length);
	}
	max(){
		this.sort(function(a, b) {
		  return b.level - a.level;
		});
		return this[0];
	}
}

let lost = new PokemonList(), found = new PokemonList();

lost.add('Пикачу', 56);
lost.add('Чармандер', 20);
lost.add('Сквиртл', 31);
lost.add('Мисти', 14);

found.add('Джесси', 45);
found.add('Джеймс', 27);
found.add('Мяут', 33);

found.push(lost[0]);
lost.splice(0,1);

console.log('Покемоны из списка lost:');
lost.show();
console.log('\nПокемоны из списка found:');
found.show();

console.log('\nПокемон максимального уровня в списке lost: %s, уровень - %d', lost.max().name, lost.max().level);
console.log('Покемон максимального уровня в списке found: %s, уровень - %d', found.max().name, found.max().level);
