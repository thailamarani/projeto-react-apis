import { PokeCardContainer, ImgContainer, PokeImg, ButtonsContainer } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToDetailPage } from '../../Router/coordinator';

const PokemonCard = ({ poke, addPokemon, removePokemon }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    return(
        <PokeCardContainer>
            <ImgContainer>
                <PokeImg src={poke.sprites.front_default} alt={`imagem do pokemon ${poke.name}`}/>
            </ImgContainer>
            <ButtonsContainer>
                {
                    pathname === "/" ?
                    <button onClick={() => addPokemon(poke)}>Adicionar</button>
                    :
                    <button onClick={() => removePokemon(poke.name)}>Remover</button>
                }
                <button onClick={() => goToDetailPage(navigate, poke.name)}>Ver Detalhes</button>
            </ButtonsContainer>
        </PokeCardContainer>
    )
};

export default PokemonCard;