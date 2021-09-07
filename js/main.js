// Pokemonlar joylanadigan idish
var elPokemonsList = document.querySelector('.pokemons-list');

// Har bir pokemonlarning HTML qolipi
var elPokemonsItemTemplate = document.querySelector('#pokemons-item-template').content;
var pakemons = pokemons;
// Pokemonlarni HTMLga aylantirib vaqtincha yig'ib turish uchun fragment
var elPokemonsListFragment = document.createDocumentFragment();

// Pokemonlarni aylanib chiqamiz
for (var pokemon of pakemons) {
  // Har bir kino uchun qolipdan nusxa olamiz
  var elPokemon = elPokemonsItemTemplate.cloneNode(true);

  // Qolipni ma'lumot bilan to'ldiramiz
  elPokemon.querySelector('.pokemon__img').src = pokemon.img;
  elPokemon.querySelector('.pokemon__name').textContent = pokemon.name;
  elPokemon.querySelector('.pokemon__number').textContent = '#' + pokemon.num;

  // Tayyor natijani fragmentga solamiz
  elPokemonsListFragment.appendChild(elPokemon);
}

// pokemonlarni jamlagan fragmentni sahifaga joylaymiz
elPokemonsList.appendChild(elPokemonsListFragment);