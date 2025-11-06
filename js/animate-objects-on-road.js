"use strict";

// Array med information om bilerne
const carInfo = [
{ 
     className: "car1", 
     carBrand: "Ford", 
     carModel: "Mustang",
     releaseYear: 1974,
     carColor: "Red",
     fuelType: "Diesel"
},
{ 
     className: "car2", 
     carBrand: "Volkswagen", 
     carModel: "Police Car",
     releaseYear: 2010,
     carColor: "Black and White",
     fuelType: "Petrol"
},
{  
     className: "car3", 
     carBrand: "Toyota", 
     carModel: "Corolla",
     releaseYear: 2018,
     carColor: "Light Blue",
     fuelType: "Hybrid"
},
{  
     className: "car4", 
     carBrand: "Mercedes-Benz", 
     carModel: "Citaro",
     releaseYear: 2020,
     carColor: "Yellow",
     fuelType: "Electric"
},
{  
     className: "car5", 
     carBrand: "Volvo", 
     carModel: "FH16",
     releaseYear: 2019,
     carColor: "White",
     fuelType: "Diesel"  
}];


// Hovedfunktion der kører når DOM er loaded - venter med at køre js koden til hele HTML er loaded. Slutter i bunden af filen

document.addEventListener("DOMContentLoaded", () => {

     
// Henter toolTip id og gemmer det i en variabel

const toolTip = document.getElementById("toolTip");


// Funktion der viser tooltip med bilinformation. Parameter: html = den tekst indeholdende html-tags som skal vises i tooltip

function showTooltip (html){
     if (toolTip){
          // indsætter html-teksten i tooltip
          toolTip.innerHTML = html;
          // Gør tooltip synlig ved at tilføje class "is-visible"
          toolTip.classList.add ("is-visible");
          setTimeout(function() {
               toolTip.classList.remove("is-visible");
          },
          8000); // tooltip forsvinder efter 8 sekunder
     }    
}

carInfo.forEach ((car) => {
     document.querySelectorAll("." + car.className).forEach((elem)=> {
     elem.addEventListener("mouseover", () => {
          const carDetails = `
                 <strong>${car.carBrand} ${car.carModel}</strong><br>
                  Release year:${car.releaseYear}<br>
                  Color: ${car.carColor}<br>
                 Fuel Type: ${car.fuelType}
            `;
            showTooltip(carDetails);
          });
     });
});



// Opretter variabler som henter DOM-elementer

const getRedCar = document.getElementById("redCar");
const getPoliceCar = document.getElementById("policeCar");
const getBlueCar = document.getElementById("blueCar");
const getBus = document.getElementById("bus");

const sun = document.querySelector(".sun");
const scene = document.querySelector(".scene");

// Opretter lydobjekter

const soundRedCar = new Audio();
soundRedCar.src = "../sound/red-car-horn.wav";

const soundPoliceCar = new Audio();
soundPoliceCar.src = "../sound/police-car-sound.wav";

const soundBlueCar = new Audio();
soundBlueCar.src = "../sound/blue-car-sound.wav";

const soundBus = new Audio();
soundBus.src = "";


// Tilføjer event listeners


getRedCar.addEventListener("click", () => {
     soundRedCar.play();
});

getPoliceCar.addEventListener("click", () => {
     soundPoliceCar.play();
});

getBlueCar.addEventListener("click", () => {
     soundBlueCar.play();
});

getBus.addEventListener("click", () => {
     soundBus.play();
});


//Skrift mellem dag og nat

if (sun && scene) {
     sun.addEventListener("click", () => {
          scene.classList.toggle("night");
     });
}    


});



