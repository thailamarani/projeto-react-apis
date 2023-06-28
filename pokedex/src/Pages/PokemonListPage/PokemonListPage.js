import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokemonListContainer } from './styled';

const PokemonListPage = () => {
    return (
    <PokemonListContainer>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
    </PokemonListContainer>
    )
};

export default PokemonListPage;