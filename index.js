/* DOM MANIPULATION */

console.log("We're in, guys!")

document.title = "OooOOoOOOooOO"
//document.body.style.backgroundColor = "hsl(0, 0%, 15%)"

//const usenm = "Kaisa"
//const welcooomeMsg = document.getElementById("welcome-msg")

//welcooomeMsg.textContent += usenm === "" ? 'Guest' : usenm

//console.dir(document)

const playground = document.getElementById('playground') //töötab HTML id'ga
playground.append(", Wizard")

const playground2 = document.querySelector('#playground') //töötab CSS id'ga
const playground3 = document.querySelector('div') //võtab alati lehe kõige esimese divi
console.log(playground3)

//Stringide lisamine teksti lõppu
const playground4 = document.getElementById('playground2')
playground4.append(' wooo!', ' Wizard', ' Hjellouuu')

//Uue asja loomine, tekstisisu lisamine
const magicalorb = document.createElement('div')
magicalorb.textContent = 'Magical Orb!'
playground.append(magicalorb)

//Uue teksti paragrahvi lisamine lõppu
const scrollOfWisdom = document.createElement('p') //loob uue paragrahvi
playground.append(scrollOfWisdom) //lisab paragrahvi playgroundi lõppu
scrollOfWisdom.innerText = 'Ancient wisdom lies within!' //lisab uuele paragrahvile teksti sisse

//innerText - nähtav tekst
//textContent - kogu tekst, ka peidus


//HTML bloki lisamine ja terve sisu muutmine
const spellbook = document.createElement('div')
spellbook.innerHTML = '<p>Spells include: <strong> Levitation</strong> and <em> Invisibility </em> ! </p>'

console.log(playground.textContent)
console.log(playground.innerHTML)

