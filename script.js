/*
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.*/




const nameUser = document.getElementById('name');
const Kms = document.getElementById('input');
const Ages = document.getElementById('Age-user');
const button = document.getElementById('button');
const paragraph = document.getElementById('cost');
const parag = document.getElementById('propriety');


let tariffa = 0.21;


// Click del bottone
button.addEventListener('click', function() {   
    const Name = nameUser.value;
    const Km = parseInt(Kms.value.trim());
    const Age = parseInt(Ages.value.trim());
    
let costo = Km * tariffa;
let sconto = (costo * 20 ) /100;

    if(isNaN(Km) || isNaN(Age)){
        alert ("Devi inserire un numero");
    } else {
        if(Age < 18){
            costo = costo - sconto;
        }else if(Age > 65){
            sconto = (costo * 40) /100;
            costo = costo - sconto;
        }   
    }
        paragraph.innerText += costo.toFixed(2) + '€ ' ;
        parag.innerText = Name + '';
    
});