import {fetchPokemonById, fetchAllPokemons} from "./services";

import {createHomeMarkup, pokedexLoadingMarkup, createPokedexErrorMarkup, createPokedexMarkup, createPokemonDetailsMarkup} from "./markups";


let mainNode = document.getElementById("main");

let perPage = 20;
let currentPage = 0;


function renderPokemonDetails(pokemonId) {
    fetchPokemonById(pokemonId)
    .then(function (pokemon) {
        mainNode.innerHTML = createPokemonDetailsMarkup(pokemon);

        let backButtonNode = document.getElementById("backButton");
        backButtonNode.addEventListener("click", function () {
            renderPokedex(currentPage, perPage);
        });
    });
};

function renderPokedex(page, perPage) {
    mainNode.innerHTML = pokedexLoadingMarkup();

    fetchAllPokemons(page, perPage)
    .then(function (pokemons) {
        mainNode.innerHTML = createPokedexMarkup(pokemons);

        let prevButtonNode = document.getElementById("prevButton")
        if (currentPage < 1) {
            prevButtonNode.style.display = "none";
        } else {
            prevButtonNode.addEventListener("click", function () {
            currentPage--;
            renderPokedex(currentPage, perPage);
            });
        };

        let nextButtonNode = document.getElementById("nextButton")
        if ((currentPage + 1) * perPage >= 151) {
            nextButtonNode.style.display = "none";
        } else {
            nextButtonNode.addEventListener("click", function () {
            currentPage++;
            renderPokedex(currentPage, perPage);
            });
        };

        let pokemonListNode = document.getElementById("pokemonList");
        pokemonListNode.childNodes.forEach(function (child) {
            child.addEventListener("click", function (event) {
                renderPokemonDetails(event.currentTarget.id);
            });
        });
    })
    .catch(function (error) {
        mainNode.innerHTML = createPokedexErrorMarkup(error);
    });
};

function renderHome() {
    mainNode.innerHTML = createHomeMarkup();

    let viewPokedexButtonNode = document.getElementById("viewPokedex");
    viewPokedexButtonNode.addEventListener("click", function () {
        renderPokedex(currentPage, perPage);
    });
};

renderHome();