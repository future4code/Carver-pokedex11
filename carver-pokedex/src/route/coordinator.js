
export const goToHomePage = (history) => {
    history.push("/")
}
export const goToPokedex = (history) => {
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(history)
=======
>>>>>>> eb4de0d12f92b4f7b870fe55dc5125f43731eee6
=======

>>>>>>> d3a9d9d89903b78625e90377d4983de21f0bf47e
    history.push("/pokedex")
}
export const goToPokemonDetails = (history, name) => {
    history.push(`/pokemon/${name}`)
}
export const goBack = (history) => {
    history.goBack()
}