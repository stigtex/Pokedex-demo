export function fetchPokemonById(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response) {
        return response.json();
    });
};

let maxNumberOfPokemons = 151;

export function fetchAllPokemons(page, perPage) {
    let nextTotal = page * perPage;
    let nextLimit = Math.min(20, maxNumberOfPokemons - nextTotal);

    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${nextLimit}&offset=${nextTotal}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data.results;
    });
};