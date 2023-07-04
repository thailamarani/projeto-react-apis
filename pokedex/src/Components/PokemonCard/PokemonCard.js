import { PokeCardContainer, ImgContainer, PokeImg, ButtonsContainer, InfoContainer, ButtonCapture, ButtonDetail, TypeImg, PokeballImg } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToDetailPage } from '../../Router/coordinator';
import { returnTypes } from '../../utils/returnTypes';
import { returnBackgroundColorCard } from '../../utils/returnBackgroundColorCard';
import pokebola from '../../assets/pokebola.png';

const PokemonCard = ({ poke, addPokemon, removePokemon }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    console.log(poke)

    return (
        <PokeCardContainer type={returnBackgroundColorCard(poke.types[0].type.name)}>
            <InfoContainer>
                <p>#{poke.id}</p>
                <h1>{poke.name}</h1>
                <div>
                    {poke.types.map((type) => {
                        return <TypeImg src={returnTypes(type.type.name)} />;
                    })}
                </div>
            </InfoContainer>
            <ImgContainer>
                <PokeballImg src={pokebola}/>
                <PokeImg src={poke.sprites.other["official-artwork"].front_default} alt={`imagem do pokemon ${poke.name}`} />
            </ImgContainer>
            <ButtonsContainer>
                <ButtonDetail onClick={() => goToDetailPage(navigate, poke.name)}><u>Detalhes</u></ButtonDetail>
                {
                    pathname === "/" ?
                        <ButtonCapture onClick={() => addPokemon(poke)}>Capturar!</ButtonCapture>
                        :
                        <button onClick={() => removePokemon(poke.name)}>Remover</button>
                }

            </ButtonsContainer>
        </PokeCardContainer>
    )
};

export default PokemonCard;