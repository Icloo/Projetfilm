const url = "https://api.themoviedb.org/3/discover/movie?api_key=27ee3958861736148a0122a3bb092665&primary_release_date.gte=2022-09-15&primary_release_date.lte=2023-01-31";

let listefilm = document.getElementById('listefilm');


fetch(url)
    .then((tropbienleJS) => tropbienleJS.json())
    .then((tropbienleJS) => {
        console.log(tropbienleJS);

    const films = tropbienleJS.results;
        

    for (let film of films) {
        
        listefilm.innerHTML += `
        <div id="film">
          
    
            <div class="desc">
                <h2>${film.title}</h2>
                <p>Date de sortie : ${film.release_date}</p>
                <img src="https://image.tmdb.org/t/p/original${film.poster_path}" class="affiche">
                <p>${film.overview}</p>
                <p>Langue : ${film.original_language}</p>
                <p>Genre : ${film.genre_ids}</p>
                <p class="idfilm">${film.id}</p>
                <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModal" id="boutoncomm">
                    blablabla
                </button>
               
            </div>
    

            
        </div>
        `;

        let testnote = film.id;
        console.log(testnote);

        let testtest = document.querySelector('.idfilm');
        console.log(testtest.textContent);

        listefilm.onclick = (event) => {
            let target = event.target;
        
            console.log(target);
            
            if (target.id == "boutoncomm") {
        
                
             
        
        } //fin du if target
        } //fin du onclick target
        
         


} // fin du for of
      


    
}); // fin du fetch




    
