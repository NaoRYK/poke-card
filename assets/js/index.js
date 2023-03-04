const input = document.getElementById("pokeInput");

const pokeForm = document.getElementById("searchForm");

const card = document.querySelector(".card");
const changeHTML = ( pokemon) =>{
    card.innerHTML = `
    <div class="card-container animate ${pokemon.types[0].type.name}">
        <div id="spanPokeName" ><h2 id="pokeName">${pokemon.name.toUpperCase()}</h2></div>
        <div id="divPokeImg">
            <img id="pokeImg" src="${pokemon.sprites.front_default}" alt="">
        </div>
        <p class="${pokemon.types[0].type.name}" id="pokeType">${pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.substring(1)}</p>

        <div id="pokeInfo">
            <p>${pokemon.height * 10}cm</p>
            <p>${dividir(pokemon.weight)}kg</p>
        </div>
    </div>

    <div id="description-container" class="animate">
        <img id="description" src="./assets/img/49-491514_pokemon-dialog-box-pokemon-dialogue-box.png">
        <h3 id="text-description">The name of this pokemon is ${pokemon.name.toUpperCase()}, it is an ${pokemon.types[0].type.name} type pokemon with a height of ${pokemon.height * 10}cm and a weight of ${dividir(pokemon.weight)}kg </h3>
    </div>
    `;
    pokeForm.reset();
};



// Funcion para guardar en el local storage

let dividir = (medida) => medida / 10;

const searchPokemon = async e =>{
    e.preventDefault();
    const pokemonSearched = input.value.trim().toLowerCase();
   


    let fetchedPokemon = await fetchPokemon(pokemonSearched);




    changeHTML(fetchedPokemon);

    //  console.log("Soy el local", pokemonLocal.name)
    //  console.log("Soy el otro", pokemonSearched)
    //  if(fetchedPokemon.name === pokemonLocal.name){
    //      alert("Usted ya está viendo ese pokemon")
    //      return;
    //  }

    if(pokemonSearched === ""){
        alert("Por favor ingrese un pokemon");
        return;}



}

const init = ()=>{
    
    window.localStorage.clear();
    pokeForm.addEventListener("submit", searchPokemon)

}

init();