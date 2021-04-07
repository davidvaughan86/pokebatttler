
const poke1 = document.querySelector('.player1choice')
const poke2 = document.querySelector('.player2choice')
const pokeSubmit1 = document.querySelector('.player1btn')
const pokeSubmit2 = document.querySelector('.player2btn')
// const name = player1choice

const pokemonGenerate1 = async ()=> {
    if (poke1.value.length < 0) {
        alert('try again')
        poke1.value =''
    } else {
        try {
    // this is how you would do it if you use async await
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke1.value}`)
    // convert to json
    const pokeData = await data.json()
    console.log(pokeData)
    let poke1pic = document.querySelector('.pokemon1Container')
    let image = document.createElement('img')
    // const image2 = document.createElement('p')
    image.src = pokeData.sprites.front_default
    poke1pic.append(image)
}
catch (err) {
    err = 'you didnt type a zip'
    alert(err)
    location.reload()

}
    

}}
// pokemonGenerate()


const pokemonGenerate2 = async ()=> {
    if (poke2.value.length < 0) {
        alert('try again')
        poke2.value =''
    } else {
        try {
    // this is how you would do it if you use async await
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke2.value}`)
    // convert to json
    const pokeData = await data.json()
    console.log(pokeData)
    let poke2pic = document.querySelector('.pokemon2Container')
    let image = document.createElement('img')
    // const image2 = document.createElement('p')
    image.src = pokeData.sprites.front_default
    poke2pic.append(image)
}
catch (err) {
    err = 'you didnt type a zip'
    alert(err)
    location.reload()

}
    

}}



const pokemonAbilties1 = async ()=> {
   
    
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke1.value}`)
    
    let pokeData = await data.json()
    
    let ability1 = pokeData.abiltiies[0].ability.name
    // let ability2 = pokeData.abiltiies[1].ability.name
    console.log(ability1)
    


}
const pokemonAbilties2 = async ()=> {
   
   
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke2.value}`)
   
    let pokeData = await data.json()
    

}
    

pokeSubmit1.addEventListener('click', () =>{
    pokemonGenerate1(), 
    pokemonAbilties1()
})

pokeSubmit2.addEventListener('click', () =>{
    pokemonGenerate2()
    pokemonAbilties2()
})