export const goToPokemonListPage = (navigate) => {
    navigate("/")
};

export const goToPokedexPage = (navigate) => {
    navigate("/pokedex")
};

export const goToDetailPage = (navigate, name) => {
    navigate(`/detalhes/${name}`)
};