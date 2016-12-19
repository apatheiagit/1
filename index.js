'use strict'
class Pokemon {
	constructor(name, level){
		this.name = name;
		this.level = level;
	}
	show(){
		console.log("%s - покемон %d уровня", this.name, this.level);
	}
};
let myPokemon = new Pokemon("Пикачу", 80);
myPokemon.show();
let myPokemon2 = new Pokemon("Чармандер", 2);
myPokemon2.show();

