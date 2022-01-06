
export const goToHomePage = (history) => {
    history.push("/")
}
export const goToPokedex = (history) => {
    history.push("/pokedex")
}
export const goToPokemonDetails = (history, name) => {
    history.push(`/pokemon/${name}`)
}
export const goBack = (history) => {
    history.goBack()
}