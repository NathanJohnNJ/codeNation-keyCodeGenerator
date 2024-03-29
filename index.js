const titleDiv = document.getElementById("titleDiv");
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const welcomeSection = document.getElementById("welcome");
const welText = document.getElementById("welText");
const instructions = document.getElementById("instructions");
const changeColour = document.getElementById("changeColour");
const colours = document.getElementById("colours");
const blue = document.getElementById("blue");
const monoChrome = document.getElementById("monoChrome");
const green = document.getElementById("green");
const red = document.getElementById("red");
const key = document.getElementById("key");
const keyDiv = document.getElementById("keyInfo");
const keyCode = document.getElementById("keyCode");
const keyCodeDiv = document.getElementById("keyCodeDiv");
const locationDiv = document.getElementById("locationDiv");
const locationText = document.getElementById("location");

//Opening animation and game setup
document.addEventListener("DOMContentLoaded", () => {
    titleDiv.style.marginTop = "3%";
    title1.style.fontSize = "50px";
    title2.style.fontSize = "14px";
    setTimeout(() => {welcome()}, 2000);
});

function welcome(){
    colours.style.display = "flex";
    welcomeSection.style.display = "flex";
    setTimeout(() => {start()}, 1800);
}
function start(){
    instructions.style.display = "flex";
    setTimeout(() => {changeColour.style.display = "flex"}, 5000);
    let width = window.innerWidth;
    (width <= "768")?prompt():console.log("Not a mobile device");
}

document.addEventListener('keydown', (event) => {
    welcomeSection.style.display = "none";
    keyDiv.style.display = "flex";
    var name = event.key;
    var code = event.code;
    var location = event.location;
    if(event.shiftKey == true){
        var shiftPressed = " + shift";
        name = name + shiftPressed;
        key.style.fontSize = "35px"
        key.innerText = `${name}`;
    } else {
        name = name;
        key.style.fontSize = "70px"
        key.innerText = `${name}`;
    }
    console.log(`The code for this key is ${code}.`);
    keyCode.innerText =  `${code}`;
    console.log(`The location for this key is ${location}.`);
    locationText.innerText = `${location}`;
});

function setColour(col1, col2) {
    var r = document.querySelector(':root');
    r.style.setProperty(col1, col2);
};

blue.addEventListener("click", () => {
   setColour("--blue", "#1E4E8C");
   setColour("--grey", "#D6D7DC");
   setColour("--gold", "#E4D094");
   setColour("--darkGold", "#9B7E56");
   setColour("--black", "#0A0A0C");
});

monoChrome.addEventListener("click", () => {
    setColour("--blue", "#FFFFFF");
    setColour("--grey", "#000000");
    setColour("--gold", "#C0C0C0");
    setColour("--darkGold", "#808080");
    setColour("--black", "#000000");
 });

 green.addEventListener("click", () => {
    setColour("--blue", "#82AC85");
    setColour("--grey", "#FFFFFF");
    setColour("--gold", "#E2CFC9");
    setColour("--darkGold", "#D1ACA5");
    setColour("--black", "#000000");
 });

 red.addEventListener("click", () => {
    setColour("--blue", "#C61A09");
    setColour("--grey", "#141312");
    setColour("--gold", "#FFC9BB");
    setColour("--darkGold", "#FFA590");
    setColour("--black", "#867774");
 });

//  > When viewing on a phone an input box is shown and used so a user can get the key code information on mobile and desktop machines
