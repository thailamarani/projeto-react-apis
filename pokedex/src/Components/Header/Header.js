import { useContext } from 'react';
import { getPokeByName } from '../../API/request';
import { goToPokedexPage, goToPokemonListPage } from '../../Router/coordinator';
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalStateContext } from '../../Global/GlobalStateContext';

const Header = () => {
    let titlePage;
    let leftButtonText;
    let nextPage;

    const { pathname } = useLocation()
    const navigate = useNavigate()
    
    const pokeName = pathname.split("/")[2]

    const { pokedex, setPokedex, removePokemon } = useContext(GlobalStateContext)

    const isPokemonInPokedex = pokedex.find((poke) => poke.name === pokeName)

    const addPokedex = (name) => {
        getPokeByName(name, (pokeData) => {
            setPokedex([...pokedex, pokeData])
        })
    }

    if (pathname === "/") {
        titlePage = "Lista de Pokemons";
        leftButtonText = "Ver minha Pokedex";
        nextPage = () => goToPokedexPage(navigate);
    } else if (pathname === "/pokedex") {
        titlePage = "Pokedex";
        leftButtonText = "Voltar para lista de Pokemons";
        nextPage = () => goToPokemonListPage(navigate);
    } else if (pathname.includes("/detalhes/")) {
        titlePage = pokeName
        leftButtonText = "Voltar";
        nextPage = () => goToPokemonListPage(navigate);
    }

    return (
        <HeaderContainer>
            <LeftHeaderButton onClick={nextPage}>
                {leftButtonText}
            </LeftHeaderButton>
            <h1>{titlePage}</h1>
            {
                pathname.includes("detalhes/") &&
                (isPokemonInPokedex ? (
                    <RightHeaderButton onClick={() => removePokemon(pokeName)}>
                        Remover da Pokedex
                    </RightHeaderButton>
                ) : (
                    (
                        <RightHeaderButton onClick={() => addPokedex(pokeName)}>
                        Adicionar a Pokedex
                    </RightHeaderButton>
                    )
                ))}
        </HeaderContainer>
    )
};

export default Header;