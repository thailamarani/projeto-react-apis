import { useContext, useEffect, useState } from 'react';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import { PokemonListContainer, Title, SectionPokemon } from './styled';
import { getAllPokemons } from '../../API/request';
import { GlobalStateContext } from '../../Global/GlobalStateContext';

const PokemonListPage = () => {
    const [pokemons, setPokemons] = useState([])
    const { pokedex, setPokedex, addPokemon } = useContext(GlobalStateContext)

    useEffect(() => {
        getAllPokemons(setPokemons)
    }, [])

    const filterPokemons = pokemons.filter((pokemon) => !pokedex.find((poke) => poke.name === pokemon.name))

    return (
        <PokemonListContainer>
            <Title>Todos Pokémons</Title>
            <SectionPokemon>
                {
                    filterPokemons.map((poke) => {
                        return (
                            <PokemonCard key={poke.id} poke={poke} pokedex={pokedex} addPokemon={addPokemon} />
                        )
                    })
                }
            </SectionPokemon>
        </PokemonListContainer>
    )
};

export default PokemonListPage;