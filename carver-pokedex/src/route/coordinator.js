
export const goToHomePage = (history) => {
    history.push("/")
}
export const goToPkedes = (history) => {
    history.push("/pokedex")
}
export const goToPokemonDetails = (history, id) => {
    history.push(`/pokemon/${id}`)
}
