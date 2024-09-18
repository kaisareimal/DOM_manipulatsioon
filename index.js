/* DOM MANIPULATION */

console.log("We're in, guys!");

document.title = "OooOOoOOOooOO";
//document.body.style.backgroundColor = "hsl(0, 0%, 15%)"

//const usenm = "Kaisa"
//const welcooomeMsg = document.getElementById("welcome-msg")

//welcooomeMsg.textContent += usenm === "" ? 'Guest' : usenm

//console.dir(document)

const playground = document.getElementById("playground"); //töötab HTML id'ga
playground.append(", Wizard");

const playground2 = document.querySelector("#playground"); //töötab CSS id'ga
const playground3 = document.querySelector("div"); //võtab alati lehe kõige esimese divi
console.log(playground3);

//Stringide lisamine teksti lõppu
const playground4 = document.getElementById("playground2");
playground4.append(" wooo!", " Wizard", " Hjellouuu");

//Uue asja loomine, tekstisisu lisamine
const magicalorb = document.createElement("div");
magicalorb.textContent = "Magical Orb!";
playground.append(magicalorb);

//Uue teksti paragrahvi lisamine lõppu
const scrollOfWisdom = document.createElement("p"); //loob uue paragrahvi
playground.append(scrollOfWisdom); //lisab paragrahvi playgroundi lõppu
scrollOfWisdom.innerText = "Ancient wisdom lies within!"; //lisab uuele paragrahvile teksti sisse

//innerText - nähtav tekst
//textContent - kogu tekst, ka peidus

//HTML bloki lisamine ja terve sisu muutmine
playground.innerHTML =
  "<p>Spells include: <strong> Levitation</strong> and <em> Invisibility </em> ! </p>";

console.log(playground.textContent);
console.log(playground.innerText);

//elemendi eemaldamine
const temporaryElement = document.createElement("p");
temporaryElement.textContent = "Now you see me";
playground.append(temporaryElement);

//temporaryElement.remove() //kindla asja kustutamine
playground.removeChild(temporaryElement); //lapselemendi eemaldamine

//while-tsükkel kustutamiseks
const fruitBasket = document.createElement("div");
fruitBasket.innerHTML = "<p>Apple</p><p>Banana</p><p>Cherry</p>";
playground.append(fruitBasket);
console.log(fruitBasket.innerText);

// kustutamine senikaua kuni
while (fruitBasket.firstChild) {
  fruitBasket.removeChild(fruitBasket.firstChild);
  console.log(fruitBasket.innerText);
}

//ELEMENDID

const magicWand = document.createElement("div");
//magicWand.setAttribute('id', 'wand1') lisab id objektile, sama saab teha ka classiga
magicWand.id = "wandybandy"; //lihtsam moodus anda väärtus asja id'le ja samamoodi saab ka klassile anda
magicWand.class = "magical-item supercool";
magicWand.textContent = "Magic Wand";
playground.append(magicWand);

//console.log(playground.getAttribute('id')) saadab info konsooli
console.log(magicWand.id); //lihtsam moodus sama asja jaoks
console.log(magicWand.class);

//DATA ATTRIBUTES ignored by CSS, ei muuda objektide välimust, hoiavad datat

magicWand.id = "secretScroll";
magicWand.dataset.spell = "invisibility"; //Annad attributeile ise nime 'spell'
magicWand.dataset.components = "moonlight, shadow essence";
magicWand.textContent = "Ancient Spell Scroll";

playground.append(magicWand);

console.log("Spell type:", magicWand.dataset.spell);
console.log("Components:", magicWand.dataset.components);

//MANIPULATING CLASSES

const shape = document.createElement("div");
shape.textContent = "Shapeshifter";
playground4.append(shape);

shape.classList.add("magical", "creature"); //lisa klassid
console.log("Initial classes:", shape.className);

shape.classList.remove("creature"); //kustuta klass
shape.classList.add("humanoid"); //lisa klass

console.log("updated classes:", shape.className);

shape.classList.toggle("Invisible", Math.random() > 0.5);
shape.classList.replace("humanoid", "beast"); //asenda esimene (humanoid) klass teisega (beast)
console.log("Third class:", shape.className);

//kuidas lisada stiile javascriptiga

const r6ngas = document.createElement("div");
r6ngas.textContent = "OOO";
r6ngas.style.fontSize = "50px";
r6ngas.style.transition = "all 2s";
r6ngas.style.color = "#f0f0f0";
r6ngas.style.backgroundColor = "#333333";
r6ngas.style.borderRadius = "24px";
playground4.append(r6ngas);

// Panna erinevaid stiile muutuma minig tegevusega

const button = document.createElement("button");
button.textContent = "KLIKKA SIIA";
playground4.append(button);

//üks moodus, kuidas lisada alert nupule
/*button,addEventListener('click', () => {
    alert ('HEEHOO!')
})*/

//funktsiooniga sama alerti lisamine
function spellCast() {
  alert("OMG WHAAT");
}
button.addEventListener("click", spellCast);

//kui tahad ära katkestada mingil hetkel funktsiooni tööd
//button.removeEventListener('click', spellCast)

button.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "#f3a672";
});

button.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "";
});

//dünaamiline elementide loomine ja kustutamine nupuga

const list = document.getElementById("listbox");
const spellList = document.createElement("ul");
list.append(spellList);

function addSpell(spellName) {
  const spell = document.createElement("li");
  spell.textContent = spellName;
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => spell.remove());
  spell.append(removeButton);
  spellList.append(spell);
}

addSpell("Fireball");
addSpell("Frost Nova");
addSpell("AAAAHHHH");

//DOMis navigeerimine

const parentElement = document.createElement("div");
const childElement1 = document.createElement("p");
const childElement2 = document.createElement("span");
parentElement.append(childElement1, childElement2);
list.append(parentElement);

console.log(parentElement.firstChild);
console.log(parentElement.lastChild);
console.log(childElement1.nextSibling);
console.log(childElement2.previousSibling);
console.log(childElement1.parentNode);

//dokumendi fragmendid

const fragment = document.createDocumentFragment();

const spellList2 = document.createElement("ul");
list.append(spellList2);

//seni kuni i on väiksem kui 5, lisab listi elemente
//${i + 1} lisab igal uuel tsüklil i'le 1 juurde
for (let i = 0; i < 5; i++) {
  const magicalItem = document.createElement("li");
  magicalItem.textContent = `Magical Item ${i + 1}`;
  fragment.append(magicalItem); //lisab fragmendile itemi
}

spellList2.append(fragment); //lisab fragmendi spelllisti

//templates - ühtede ja samade parameetritega koodi jupi kloonimine ja lisamine dokumenti

//võtab templiidi
const template = document.getElementById("wiz-template");

//lisab templiidi osadele parameetrid
function createWiz(name, specialty) {
  const wizardElement = template.content.cloneNode(true);
  wizardElement.querySelector(".wiz-name").textContent = name;
  wizardElement.querySelector(".wiz-specialty").textContent = specialty;
  playground4.append(wizardElement);
}

//Test, kas tööab
createWiz("Kaisa", "Time Magic");
createWiz("Gandalf", "Fireballs");
