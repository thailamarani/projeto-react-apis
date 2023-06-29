import { useEffect, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokemonListContainer } from './styled';
import { getAllPokemons } from "../../API/request";

const PokemonListPage = ({ pokedex, setPokedex, addPokemon }) => {
    const [ pokemons, setPokemons ] = useState([])

    useEffect(() => {
        getAllPokemons(setPokemons)
    }, [])

    const filterPokemons = pokemons.filter((pokemon) => !pokedex.find((poke) => poke.name === pokemon.name))

    return (
    <PokemonListContainer>
        {
            filterPokemons.map((poke) => {
                return(
                    <PokemonCard key={poke.id} poke={poke} pokedex={pokedex} addPokemon={addPokemon}/>    
                )
            })
        }
    </PokemonListContainer>
    )
};

export default PokemonListPage;