let etoile1 = document.getElementById('etoile1');
let etoile2 = document.getElementById('etoile2');
let etoile3 = document.getElementById('etoile3');
let etoile4 = document.getElementById('etoile4');
let etoile5 = document.getElementById('etoile5');


etoile1.addEventListener("mouseover", etoileN1);
etoile2.addEventListener("mouseover", etoileN2);
etoile3.addEventListener("mouseover", etoileN3);
etoile4.addEventListener("mouseover", etoileN4);
etoile5.addEventListener("mouseover", etoileN5);


function etoileN1() {
    etoile1.style.color = "yellow";
    etoile2.style.color = "black";
    etoile3.style.color = "black";
    etoile4.style.color = "black";
    etoile5.style.color = "black";
}

function etoileN2() {
    etoile1.style.color = "yellow";
    etoile2.style.color = "yellow";
    etoile3.style.color = "black";
    etoile4.style.color = "black";
    etoile5.style.color = "black";
}

function etoileN3() {
    etoile1.style.color = "yellow";
    etoile2.style.color = "yellow";
    etoile3.style.color = "yellow";
    etoile4.style.color = "black";
    etoile5.style.color = "black";
}

function etoileN4() {
    etoile1.style.color = "yellow";
    etoile2.style.color = "yellow";
    etoile3.style.color = "yellow";
    etoile4.style.color = "yellow";
    etoile5.style.color = "black";
}

function etoileN5() {
    etoile1.style.color = "yellow";
    etoile2.style.color = "yellow";
    etoile3.style.color = "yellow";
    etoile4.style.color = "yellow";
    etoile5.style.color = "yellow";
}

etoile1.addEventListener("click", etoileN1note);
etoile2.addEventListener("click", etoileN2note);
etoile3.addEventListener("click", etoileN3note);
etoile4.addEventListener("click", etoileN4note);
etoile5.addEventListener("click", etoileN5note);

let affichernote = document.getElementById('affichernote');
let note = 0;


function etoileN1note() {
    note = 1;
    console.log(note);
    affichernote.innerHTML = "  " + note;
}
function etoileN2note() {
    note = 2;
    console.log(note);
    affichernote.innerHTML = "  " + note;
}
function etoileN3note() {
    note = 3;
    console.log(note);
    affichernote.innerHTML = "  " + note;
}
function etoileN4note() {
    note = 4;
    console.log(note);
    affichernote.innerHTML = "  " + note;
}
function etoileN5note() {
    note = 5;
    console.log(note);
    affichernote.innerHTML = "  " + note;
}



let envoyer = document.getElementById('envoyer');

envoyer.addEventListener('click', envoyercomm);

function envoyercomm() {

    let myInput = document.getElementById('commentaire');
    let contenuimput = myInput.value;

    let listeObjets = 'listeObjet';
    let mesObjetsString = localStorage.getItem(listeObjets);
    let mesObjets = JSON.parse(mesObjetsString) ?? [];

    let newObjet = { note, contenuimput };

    mesObjets.push(newObjet);

    localStorage.setItem(listeObjets, JSON.stringify(mesObjets));
}