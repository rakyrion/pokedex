

const pokedex = require('../assets/pokedex.json')

const pokedexLength = pokedex.length

const getRandomPokemon = () => {
	const randomPokemon = pokedex[Math.floor(Math.random() * pokedexLength)]
	return randomPokemon
}

module.exports = {
	pokedex: pokedex,
	random: getRandomPokemon
}