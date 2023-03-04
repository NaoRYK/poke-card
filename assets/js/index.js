const input = document.getElementById("pokeInput");

const pokeForm = document.getElementById("searchForm");

const card = document.querySelector(".card");
const changeHTML = ( pokemon) =>{
    card.innerHTML = `
    <div class="card-container animate">
        <div id="spanPokeName"><h2 id="pokeName">${pokemon.name.toUpperCase()}</h2></div>
        <div id="divPokeImg">
            <img id="pokeImg" src="${pokemon.sprites.front_default}" alt="">
        </div>
        <p id="pokeType">${pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.substring(1)}</p>

        <div id="pokeInfo">
            <p>${pokemon.height * 10}cm</p>
            <p>${dividir(pokemon.weight)}kg</p>
        </div>
    </div>
    `;
    pokeForm.reset();
};

let pokemonLocal = JSON.parse(localStorage.getItem('pokemonLocal'));

// Funcion para guardar en el local storage

const saveLocalStorage = (pokemon) =>{

    
    localStorage.setItem('pokemonLocal', JSON.stringify(pokemon));
}

let dividir = (medida) => medida / 10;

const searchPokemon = async e =>{
    e.preventDefault();
    const pokemonSearched = input.value.trim().toLowerCase();
   


    let fetchedPokemon = await fetchPokemon(pokemonSearched);




    saveLocalStorage(fetchedPokemon);
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