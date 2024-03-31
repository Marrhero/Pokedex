
const pokeName = document.getElementById("pokemon-name");
const button = document.getElementById("name-button");


async function fetchData(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if(!response.ok){
            throw new Error("Couldn't find");}

        const data = (await response).json();
        pokeName.textContent = data.name;

    }
    catch(error){
        console.error(error);
    }
}

button.addEventListener('click', () =>fetchData());

