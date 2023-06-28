import { PokeCardContainer, ImgContainer, PokeImg, ButtonsContainer } from './styled';
import pokemon from '../../pokemon.png';
import { useNavigate } from 'react-router-dom';
import { goToDetailPage } from '../../Router/coordinator';

const PokemonCard = () => {
    const navigate = useNavigate()

    return(
        <PokeCardContainer>
            <ImgContainer>
                <PokeImg src={pokemon} alt="Imagem de um Pokemon"/>
            </ImgContainer>
            <ButtonsContainer>
                <button>Adicionar</button>
                <button onClick={() => goToDetailPage(navigate)}>Ver Detalhes</button>
            </ButtonsContainer>
        </PokeCardContainer>
    )
};

export default PokemonCard;