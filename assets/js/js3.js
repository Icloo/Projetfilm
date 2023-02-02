let enregistrerfav = document.getElementById('enregistrerfav');


let scifi = document.getElementById('science-fiction');
let comedie = document.getElementById('Comédie');
let drama = document.getElementById('Drame');
let musical = document.getElementById('Film-musical');
let policier = document.getElementById('Policier');
let western = document.getElementById('Western');
let doc = document.getElementById('Documentaire');
let anim = document.getElementById('film-animation');

enregistrerfav.addEventListener('click', localfav);

function localfav() {


    let verification = 0;

  if(scifi.checked == true) {   
 
    verification++;  
    console.log(verification)
}

if(comedie.checked == true) {   
 
    verification++;  
    console.log(verification)
}

if(drama.checked == true) {   
 
    verification++;  
    console.log(verification)
}

if(musical.checked == true) {   
 
    verification++;  
    console.log(verification)
}

if(policier.checked == true) {   
 
    verification++;  
    console.log(verification)
}

if(western.checked == true) {   
 
    verification++;  
    console.log(verification)
}

if(doc.checked == true) {   
 
    verification++;  
    console.log(verification)
}

if(anim.checked == true) {   
 
    verification++;  
    console.log(verification)
}

if (verification>3) {
    alert('Veuillez choisir 3 genre maximum');
} else if (verification===0) {
    alert('Choisir au moins 1 genre, ou fermez la fenêtre');
} else {
    localStorage.removeItem('genrefav');
    localfav2();
    window.location.href = "index.html";
    
}

}

function localfav2() {
   
    if (scifi.checked == true) {

        let listefav = 'genrefav';
        let monfavstring = localStorage.getItem(listefav);
        let monfav = JSON.parse(monfavstring) ?? [];
    
        let newfav = " Science-fiction";
    
        monfav.push(newfav);
    
        localStorage.setItem(listefav, JSON.stringify(monfav));
    }
    if (comedie.checked == true) {

        let listefav = 'genrefav';
        let monfavstring = localStorage.getItem(listefav);
        let monfav = JSON.parse(monfavstring) ?? [];
    
        let newfav = " Comédie";
    
        monfav.push(newfav);
    
        localStorage.setItem(listefav, JSON.stringify(monfav));
    }
    if (drama.checked == true) {

        let listefav = 'genrefav';
        let monfavstring = localStorage.getItem(listefav);
        let monfav = JSON.parse(monfavstring) ?? [];
    
        let newfav = " Drame";
    
        monfav.push(newfav);
    
        localStorage.setItem(listefav, JSON.stringify(monfav));
    }
    if (musical.checked == true) {
 
        let listefav = 'genrefav';
        let monfavstring = localStorage.getItem(listefav);
        let monfav = JSON.parse(monfavstring) ?? [];
    
        let newfav = " Comédie musicale";
    
        monfav.push(newfav);
    
        localStorage.setItem(listefav, JSON.stringify(monfav));
    }
    if (policier.checked == true) {


        let listefav = 'genrefav';
        let monfavstring = localStorage.getItem(listefav);
        let monfav = JSON.parse(monfavstring) ?? [];
    
        let newfav = " Film policier";
    
        monfav.push(newfav);
    
        localStorage.setItem(listefav, JSON.stringify(monfav));
    }
    if (western.checked == true) {

        let listefav = 'genrefav';
        let monfavstring = localStorage.getItem(listefav);
        let monfav = JSON.parse(monfavstring) ?? [];
    
        let newfav = " Western";
    
        monfav.push(newfav);
    
        localStorage.setItem(listefav, JSON.stringify(monfav));
    }
    if (doc.checked == true) {
       
        let listefav = 'genrefav';
        let monfavstring = localStorage.getItem(listefav);
        let monfav = JSON.parse(monfavstring) ?? [];
    
        let newfav = " Documentaire";
    
        monfav.push(newfav);
    
        localStorage.setItem(listefav, JSON.stringify(monfav));
    }
    if (anim.checked == true) {
      
        let listefav = 'genrefav';
        let monfavstring = localStorage.getItem(listefav);
        let monfav = JSON.parse(monfavstring) ?? [];
    
        let newfav = " Film d'animation";
    
        monfav.push(newfav);
    
        localStorage.setItem(listefav, JSON.stringify(monfav));
    }

}

let affichergenrefav = document.getElementById('affichergenrefav');
let favlocal = JSON.parse(localStorage.getItem('genrefav'));
if (favlocal.length > 0) {
affichergenrefav.innerHTML = `
Vos genre favoris sont : ${favlocal}
`;
}
