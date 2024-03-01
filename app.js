//slider

let catArr = [];

for(let i= 1; i<=3; i++){
let foto = document.createElement('img');
let contener = document.querySelector(".slider");
contener.appendChild(foto);
foto.src = `img/${i}.jpg`;
catArr[i] = foto;
catArr[i].add
foto = '';
if(i > 1){
    catArr[i].style.display = 'none';
}
catArr[i].classList.add('cats');
}
actualSlide = 1;

//galeria
for(let i= 4; i<=15; i++){
    let photo = document.createElement('img');
    let gallery = document.querySelector("#gallery");
    gallery.appendChild(photo);
    photo.src = `img/${i}.jpg`;
    catArr[i] = photo;
    photo = '';
    catArr[i].classList.add('catGallery');
    }

function slideLeft() {
    if(actualSlide == 1){
        actualSlide = 3;
        catArr[actualSlide].style.display = 'block';    
        catArr[1].style.display = 'none';
    } else if(actualSlide == 2){
        actualSlide = 1;
        catArr[actualSlide].style.display = 'block';
        catArr[2].style.display = 'none';
    } else {
        actualSlide = 2;
        catArr[actualSlide].style.display = 'block';
        catArr[3].style.display = 'none';
    }
    
}
function slideRight() {
    if(actualSlide == 1){
        actualSlide = 2;
        catArr[actualSlide].style.display = 'block';    
        catArr[1].style.display = 'none';
    } else if(actualSlide == 2){
        actualSlide = 3;
        catArr[actualSlide].style.display = 'block';
        catArr[2].style.display = 'none';
    } else {
        actualSlide = 1;
        catArr[actualSlide].style.display = 'block';
        catArr[3].style.display = 'none';
    }
}





