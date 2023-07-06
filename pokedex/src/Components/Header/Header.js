import { useContext } from 'react';
import { getPokeByName } from '../../API/request';
import { goToPokedexPage, goToPokemonListPage } from '../../Router/coordinator';
import { HeaderContainer, LeftHeaderButton, RightHeaderButton, LogoImg } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalStateContext } from '../../Global/GlobalStateContext';
import pokemon from '../../assets/pokemon.png';

const Header = () => {
    let leftButtonText;
    let nextPage;

    const { pathname } = useLocation()
    const navigate = useNavigate()

    const pokeName = pathname.split("/")[2]

    const { pokedex, setPokedex, removePokemon, setIsOpen, setControlModal } = useContext(GlobalStateContext)

    const isPokemonInPokedex = pokedex.find((poke) => poke.name === pokeName)

    const addPokedex = (name) => {
        setIsOpen(true)
        setControlModal(1)
        getPokeByName(name, (pokeData) => {
            setPokedex([...pokedex, pokeData])
        })
    }

    if (pathname === "/") {
        nextPage = () => goToPokedexPage(navigate);
    } else if (pathname === "/pokedex") {
        leftButtonText = "Todos Pokémons";
        nextPage = () => goToPokemonListPage(navigate);
    } else if (pathname.includes("/detalhes/")) {
        leftButtonText = "Todos Pokémons";
        nextPage = () => goToPokemonListPage(navigate);
    }

    return (
        <HeaderContainer>
            {
                pathname === "/pokedex" || pathname.includes("/detalhes") ?
                    <LeftHeaderButton onClick={nextPage}>
                        <u>&lt; {leftButtonText}</u>
                    </LeftHeaderButton>
                    :
                    <RightHeaderButton onClick={nextPage}>
                        <b>Pokédex</b>
                    </RightHeaderButton>
            }

            <LogoImg src={pokemon} />
            {
                pathname.includes("detalhes/") &&
                (isPokemonInPokedex ? (
                    <RightHeaderButton red onClick={() => removePokemon(pokeName)}>
                        Excluir da Pokédex
                    </RightHeaderButton>
                ) : (
                    <RightHeaderButton onClick={() => addPokedex(pokeName)}>
                        Adicionar a Pokédex
                    </RightHeaderButton>
                ))}
        </HeaderContainer>
    )
};

export default Header;