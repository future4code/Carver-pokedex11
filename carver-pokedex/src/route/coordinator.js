
export const goToHomePage = (history) => {
    history.push("/")
}
export const goToPokedex = (history) => {
<<<<<<< HEAD
    console.log(history)
=======
>>>>>>> eb4de0d12f92b4f7b870fe55dc5125f43731eee6
    history.push("/pokedex")
}
export const goToPokemonDetails = (history, name) => {
    history.push(`/pokemon/${name}`)
}
