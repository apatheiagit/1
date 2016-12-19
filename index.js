'use strict'
class Pokemon {
	constructor(name, level){
		this.name = name;
		this.level = level;
	}
	show(){
		console.log("%s - покемон %d уровня", this.name, this.level);
	}
	/*valueOf(){
		return this.level;
	}*/
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
			console.log("%s - покемон %d уровня", pokemon.name, pokemon.level);
		}
		console.log("Общее количество покемонов: %d", this.length);
	}
	max(){
		//return Math.max.apply(null, this);
		return Math.max.apply(Math, this.map( function (el) {return el.level} ));
	}
}
let myPokemon = new Pokemon("Пикачу", 80);
myPokemon.show();
let myPokemon2 = new Pokemon("Чармандер", 2);
myPokemon2.show();

let myPokeArray = new PokemonList( myPokemon, myPokemon2 );
myPokeArray[0].show();

myPokeArray.add('Тест', 5);
myPokeArray[2].show();

let lost = new PokemonList(), found = new PokemonList();
lost.add('Lost1', 1);
lost.add('Lost2', 2);
lost.add('Lost3', 3);
lost.add('Lost4', 4);
//console.log(lost);
found.add('Found1', 4);
found.add('Found2', 2);
found.add('Found3', 3);

lost.show();
found.show();

//found.add(lost[0].name, lost[0].level);
found.push(lost[0]);
lost.splice(0,1);

lost.show();
found.show();

console.log("Max el ", myPokeArray.max());
