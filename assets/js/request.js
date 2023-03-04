

const fetchPokemon = async(pokemon) =>{
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
    try{
     

        const response = await fetch(baseURL + pokemon)
        const json = await response.json();

        return json;
    }
    catch{
        alert("El pokemon que ingreso no existe")
    }
}