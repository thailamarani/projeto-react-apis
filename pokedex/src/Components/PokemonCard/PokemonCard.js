import { PokeCardContainer, ImgContainer, PokeImg, ButtonsContainer, InfoContainer, ButtonCapture, ButtonDetail, TypeImg, PokeballImg } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToDetailPage } from '../../Router/coordinator';
import { returnTypes } from '../../utils/returnTypes';
import { returnBackgroundColorCard } from '../../utils/returnBackgroundColorCard';
import pokebola from '../../assets/pokebola.png';

const PokemonCard = ({ poke, addPokemon, removePokemon }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const changeFirstLetter = (name) => {
        return name[0].toUpperCase() + name.substring(1)
    }

    return (
        <PokeCardContainer type={returnBackgroundColorCard(poke.types[0].type.name)}>
            <InfoContainer>
                <p>#{poke.id.toString().length === 1 ? `0${poke.id}` : poke.id}</p>
                <h1>{changeFirstLetter(poke.name)}</h1>
                <div>
                    {poke.types.map((type, index) => {
                        return <TypeImg key={index} src={returnTypes(type.type.name)} />;
                    })}
                </div>
            </InfoContainer>
            <ImgContainer>
                <PokeballImg src={pokebola} />
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