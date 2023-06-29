import { goToPokedexPage, goToPokemonListPage } from '../../Router/coordinator';
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ page, setPage }) => {
    let titlePage;
    let leftButtonText;
    let nextPage;

    const { pathname } = useLocation()
    const navigate = useNavigate()

    if(pathname === "/") {
        titlePage = "Lista de Pokemons";
        leftButtonText = "Ver minha Pokedex";
        nextPage = () => goToPokedexPage(navigate);
    } else if (pathname ==="/pokedex") {
        titlePage = "Pokedex";
        leftButtonText = "Voltar para lista de Pokemons";
        nextPage = () => goToPokemonListPage(navigate);
    } else if (pathname.includes("/detalhes/")) {
        titlePage = pathname.split("/")[2];
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
                pathname.includes("detalhes/") ?
                <RightHeaderButton>
                    Adicionar / Remover da Pokedex
                </RightHeaderButton>
                :
                (
                <></>
                )
            }
        </HeaderContainer>
    )
};

export default Header;