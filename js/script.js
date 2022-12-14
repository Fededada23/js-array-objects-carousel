//Creo array immagini
const imagesArray = [
    {
        titolo:"",
        descrizione:"",
        image:"01.webp",
    },
    {
        titolo:"",
        descrizione:"",
        image:"02.webp",
    },
    {
        titolo:"",
        descrizione:"",
        image:"03.webp",
    },
    {
        titolo:"",
        descrizione:"",
        image:"04.webp",
    },
    {
        titolo:"",
        descrizione:"",
        image:"05.webp",
    },
    
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i].image}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    if(itemActive<imagesArray.length-1){
    //verifico l'elemento attivo (itemActive)
    items[itemActive].classList.remove('active');
    circles[itemActive].classList.remove('active');
    //incremento il suo valore di 1
    itemActive++;
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    items[itemActive].classList.add('active');
    //stessa cosa per i cerchi
    circles[itemActive].classList.add('active');
}
else{ 
    items[itemActive].classList.remove('active');
    circles[itemActive].classList.remove('active');
    
    itemActive=0;
    
    items[itemActive].classList.add('active');
    
    circles[itemActive].classList.add('active');
}
});

prev.addEventListener('click', function(){
    if(itemActive>0){
   //verifico l'elemento attivo (itemActive)
    items[itemActive].classList.remove('active');
    circles[itemActive].classList.remove('active');
     //decremento il suo valore di 1
    itemActive--;
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    items[itemActive].classList.add('active');
    //stessa cosa per i cerchi
    circles[itemActive].classList.add('active');
    }
    else{ 
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
       
        itemActive=imagesArray.length-1;
       
        items[itemActive].classList.add('active');
       
        circles[itemActive].classList.add('active');
    }
})
let interval = setInterval(function(){
    if(itemActive<imagesArray.length-1){
        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        //incremento il suo valore di 1
        itemActive++;
        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        items[itemActive].classList.add('active');
        //stessa cosa per i cerchi
        circles[itemActive].classList.add('active');
    }
    else{ 
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        
        itemActive=0;
        
        items[itemActive].classList.add('active');
        
        circles[itemActive].classList.add('active');
    }
},1000)

