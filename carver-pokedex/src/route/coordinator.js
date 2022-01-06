
export const goToHomePage = (history) => {
    history.push("/")
}
export const goToPokedex = (history) => {
    console.log(history)
    history.push("/pokedex")
}
export const goToPokemonDetails = (history, id) => {
    history.push(`/pokemon/${id}`)
}
