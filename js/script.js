
document.addEventListener('DOMContentLoaded', () => {
'use strict';


    
    const movieDB = {
        movies: [
            "Logan",
            "Justice League",
            "La-la-land",
            "Obsession",
            "Scott Pilgrim against ..."
        ]
    };
    
 const promoAdv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        bg = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit',(event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkBox.checked;
        
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if(favorite) {
                console.log('favorite');
            }
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, movieList);
        addForm.reset();
        }    

        event.target.reset();
    });
    
    function createMovieList (films, parent){
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((item, i) => {
            parent.innerHTML += `<li class="promo__interactive-item"> ${i+1} - ${item}
                                 <div class="delete"></div>
                                 </li>`;
        });  
        document.querySelectorAll('.delete').forEach((btn, i)=> {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList(movieDB.movies, movieList);
            });
        });  
    }

const makeChanges = (x,y) => {
x.textContent = 'DRAMA';
y.style.backgroundImage = 'url("img/bg.jpg")';
};

const addBlock = (arr)=>{
    arr.forEach (arr=>{
        arr.remove();
    });
};

const sortArr = (arr)=> {
    arr.sort();
};

document.querySelectorAll('.delete').forEach((btn, i)=> {
    btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i,1);
    });
});

createMovieList(movieDB.movies, movieList);
makeChanges(genre, bg);
addBlock(promoAdv);

});