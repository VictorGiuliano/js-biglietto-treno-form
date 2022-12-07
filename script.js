/*
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.*/




const nameUserElement = document.getElementById('name');
const KmsElement = document.getElementById('input');
const AgesElement = document.getElementById('Age-user');
const buttonElement = document.getElementById('button');


const paragraphElement = document.getElementById('cost');
const proprietyElement = document.getElementById('propriety');
const coachElement = document.getElementById('coach');
const pnrElement = document.getElementById('pnr');
const priceElement = document.getElementById('price');


let tariffa = 0.21;


// Click del bottone
button.addEventListener ('click', function() {   
    const Name = nameUserElement.value.trim();
    const Km = parseInt(KmsElement.value.trim());
    const Age = parseInt(AgesElement.value.trim());
    
let costo = Km * tariffa;
let sconto = (costo * 20 ) /100;
let rateName = 'Tariffa Ordinaria';


    if(!Name || isNaN(Km) || Km < 1){
        alert ("Valori non validi");
        return;
    }

        if(Age < 18){
            costo = costo - sconto;
            rateName = "Tariffa Giovani"
        }else if(Age > 65){
            sconto = (costo * 40) /100;
            costo = costo - sconto;
            rateName = "Tariffa Anziani"
        }   
    
        paragraphElement.innerText += costo.toFixed(2) + '€ ' ;
        proprietyElement.innerText = Name;
    
});