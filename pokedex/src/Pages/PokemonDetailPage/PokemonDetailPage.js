import { useEffect, useState } from 'react';
import { getPokeByName } from '../../API/request';
import { useParams } from 'react-router-dom';
import { ImagesContainer, ImgWrapper, MovesContainer, PokeInfosContainer, StatsContainer, TitleContainer, TypeAndMovesContainer, TypesContainer, TypeImg, PokeImg, PokeballImg, ProgressContainer, ProgressBar, PStatsName, PStatsNumber, DivProgress, MainContainer } from './styled';
import { returnBackgroundColorCard } from '../../utils/returnBackgroundColorCard';
import { returnTypes } from '../../utils/returnTypes';
import pokebola from '../../assets/pokebola.png';

const PokemonDetailPage = () => {
    const [pokemon, setPokemon] = useState({})
    const { nome } = useParams()

    let pokemonType;
    let pokemonId;
    let pokemonName;

    if ("types" in pokemon) {
        pokemonType = returnBackgroundColorCard(pokemon.types[0].type.name);
        pokemonId = pokemon.id.toString().length === 1 ? `0${pokemon.id}` : pokemon.id;
        pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
    }

    useEffect(() => {
        getPokeByName(nome, setPokemon)
    }, [])

    return (
        <MainContainer>
            <PokeInfosContainer colorType={pokemonType}>
                <ImagesContainer>
                    <ImgWrapper src={pokemon.sprites?.front_default} />
                    <ImgWrapper src={pokemon.sprites?.backdefault} />
                </ImagesContainer>
                <StatsContainer>
                    <TitleContainer>Base Stats</TitleContainer>
                    <ProgressContainer>
                        {
                            pokemon.stats?.map((poke) => {
                                return (
                                    <section>
                                        <PStatsName><strong>{poke.stat.name}</strong></PStatsName>
                                        <PStatsNumber>{poke.base_stat}</PStatsNumber>
                                        <DivProgress>
                                            <ProgressBar widthBar={poke.base_stat}></ProgressBar>
                                        </DivProgress>
                                    </section>)
                            })
                        }
                    </ProgressContainer>
                </StatsContainer>
                <PokeballImg src={pokebola} />
                <PokeImg src={pokemon.sprites?.other["official-artwork"].front_default} alt={`imagem do pokemon ${pokemon?.name}`} />
                <TypeAndMovesContainer>
                    <TypesContainer>
                        <p>{pokemonId}</p>
                        <h1>{pokemonName}</h1>
                        <div>
                            {
                                pokemon.types?.map((poke, index) => {
                                    return <TypeImg key={index} src={returnTypes(poke.type.name)} />
                                })
                            }
                        </div>
                    </TypesContainer>
                    <MovesContainer>
                        <TitleContainer>Moves:</TitleContainer>
                        {
                            pokemon.moves?.map((poke, index) => {
                                return index < 5 && <p key={index}>{poke.move.name}</p>
                            })
                        }
                    </MovesContainer>
                </TypeAndMovesContainer>
            </PokeInfosContainer>
        </MainContainer>
    )
};

export default PokemonDetailPage;