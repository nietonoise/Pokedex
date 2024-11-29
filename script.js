// General function to display Pokémon details
function showPokemon(number, name, type, description, imgSrc) {
    const section = document.querySelector('main section');
    section.innerHTML = `
        <h2>#${number} - ${name}</h2>
        <img src="${imgSrc}" alt="${name}">
        <p><strong>Type:</strong> ${type}</p>
        <p>${description}</p>
    `;
}

// Individual functions for each Pokémon type
function showfire() {
    showPokemon(
        4,
        'Charmander',
        'Fire',
        'Charmander is a Fire-type Pokémon known for its fiery tail and passionate spirit.',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    );
}

function showwater() {
    showPokemon(
        7,
        'Squirtle',
        'Water',
        'Squirtle is a Water-type Pokémon that uses its shell as a shield and sprays water to attack.',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
    );
}

function showgrass() {
    showPokemon(
        1,
        'Bulbasaur',
        'Grass/Poison',
        'Bulbasaur is a dual-type Pokémon with a plant bulb on its back that grows as it evolves.',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    );
}

function showelectric() {
    showPokemon(
        25,
        'Pikachu',
        'Electric',
        'Pikachu is an Electric-type Pokémon that stores electricity in its cheeks to unleash powerful shocks.',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    );
}

function showPsychic() {
    showPokemon(
        150,
        'Mewtwo',
        'Psychic',
        'Mewtwo is a powerful Psychic Pokémon created through genetic manipulation.',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
    );
}

function showghost() {
    showPokemon(
        92,
        'Gastly',
        'Ghost/Poison',
        'Gastly is a Ghost-type Pokémon made of gas that can envelop opponents to cause damage.',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png'
    );
}