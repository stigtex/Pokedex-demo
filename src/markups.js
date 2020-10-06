import {getCapitalized, getIdFromUrl, getAnimatedPokemonImage} from "./utils";

export function createHomeMarkup() {
    return `
    <h1>My Pokedex</h1>
    <button id="viewPokedex">View pokemons</button>
    `;
};

export function pokedexLoadingMarkup() {
    return `
        <h3>Loading pokemons...</h3>
    `;
};

export function createPokedexErrorMarkup(error) {
    return `
        <h3>Unable to load pokedex</h3>
        <p>${error.message}</p>
        <p>Please check your internet connection.<p>
    `;
};

export function createPokemonCardMarkup(pokemon) {
    let pokemonId = getIdFromUrl(pokemon.url);
    let pokemonImgUrl = getAnimatedPokemonImage(pokemonId);   
        
    return `
    <div class="pokemonCard" id="${pokemonId}">
        <img src="${pokemonImgUrl}">
        <h3>${getCapitalized(pokemon.name)}</h3>
    </div>
    `;
};

export function createPokedexMarkup(pokemons) {
    let pokemonList = pokemons
        .map(createPokemonCardMarkup).join("");

    return `
    <h1>My Pokemons</h1>
    <button id="prevButton">Prev</button>
    <button id="nextButton">Next</button>
    <div id="pokemonList">
        ${pokemonList}                    
    </div>
    `;
};

export function createPokemonDetailsMarkup(pokemon) {
    return `
    <h1>${getCapitalized(pokemon.name)}</h1>
    <button id="backButton">Back to pokedex</button>
    <div>
        <img src="${pokemon.sprites.other.dream_world.front_default}">
        <p>ID: ${pokemon.id}</p>
        <p>Type: ${pokemon.types.map(function (type) {
            return `<li>${getCapitalized(type.type.name)}</li>`
        }).join("")}
        <p>Height: ${pokemon.height / 10} m</p>
        <p>Stats: </p>
        <ul>${pokemon.stats.map(function (stat) {
            return `<li>${getCapitalized(stat.stat.name)}: ${stat.base_stat}</li>`
        }).join("")}
        </ul>
        <p>Abilities:</p>
        <ul>${pokemon.abilities.map(function (ability) {
                return `<li>${getCapitalized(ability.ability.name)}</li>`;
            }).join("")}
        </ul>
    </div>
    `;
};