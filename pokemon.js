
const poke1 = document.querySelector('.player1choice')
const poke2 = document.querySelector('.player2choice')
const pokeSubmit1 = document.querySelector('.player1btn')
const pokeSubmit2 = document.querySelector('.player2btn')
// const name = player1choice

const pokemonGenerate1 = async ()=> {
    if (poke1.value.length < 1) {
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
    image.src = pokeData.sprites.back_default
    poke1pic.append(image)
    let type = pokeData.types[0].type.name
    let statsHp = pokeData.stats[0].base_stat
    let statsAtk = pokeData.stats[1].base_stat
    let statsDef = pokeData.stats[2].base_stat
    console.log(type)
    console.log(statsHp)
    console.log(statsAtk)
    console.log(statsDef)
    let poke1Hp = document.querySelector('.poke1Hp')
    poke1Hp.innerHTML = `
    <h1>${pokeData.name}</h1>
    <h2>Type: ${type}</h3>
    <h2>HP: ${statsHp}</h2>
    <h4>Attack: ${statsAtk}</h4>
    <h4>Defense: ${statsDef}</h4>
    
    `

}
catch (err) {
    err = 'you didnt type a name'
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
    // console.log(pokeData)
    let poke2pic = document.querySelector('.pokemon2Container')
    let image = document.createElement('img')
    // const image2 = document.createElement('p')
    image.src = pokeData.sprites.front_default
    poke2pic.append(image)

    let type = pokeData.types[0].type.name
    let statsHp = pokeData.stats[0].base_stat
    let statsAtk = pokeData.stats[1].base_stat
    let statsDef = pokeData.stats[2].base_stat
    console.log(type)
    console.log(statsHp)
    console.log(statsAtk)
    console.log(statsDef)
    let poke2Hp = document.querySelector('.poke2Hp')
    poke2Hp.innerHTML = `
    <h1>${pokeData.name}</h1>
    <h2>Type: ${type}</h3>
    <h2>HP: ${statsHp}</h2>
    <h4>Attack: ${statsAtk}</h4>
    <h4>Defense: ${statsDef}</h4>
    
    `
}
catch (err) {
    err = 'you didnt type a name'
    alert(err)
    location.reload()

}
  
    

}}



const pokemonAbilties1 = async ()=> {
   
    
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke1.value}`)
    
    let pokeData = await data.json()
    
    let ability1 = pokeData.abilities[0].ability.name
    let ability2 = pokeData.abilities[1].ability.name
    console.log(ability1)
    console.log(ability2)
    let options = document.querySelector('.options')
    let choice1 = document.createElement('button')
    choice1.class = 'choice1'
    options.innerHTML =`
    
    <h3>Encounter!</h3>
    <button class='choice1' > ATTACK </button>
    <br/>
    <p>${pokeData.name} will use: ${ability1} and ${ability2}
    <br/>
    <br/>
    <button class='choice2' > SWITCH POKEMON </button>
    
    

    `
    if (options.innerHTML.length > 0){
        pokeSubmit1.removeAttribute(disabled)
        pokeSubmit2.removeAttribute(disabled)
    }else{
        pokeSubmit1.attributes(disabled)
        pokeSubmit1.attributes(disabled)
    }

    }
    
    // if (options.innerHTML.length > 0){
    //     const choice1 = document.querySelector('.choice1')
    //     choice1.addEventListener('click', ()=> {
    //         function clearOption () {
    //             document.querySelector('.choice1').innerHTML=''
    //         }
    //         clearOption()
    //     })
    // }
        
    
    
    
    



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