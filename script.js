

// ===================================      BOTÃO DE MODO ESCURO

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


function scrollToSection(event, sectionId) {
    event.preventDefault(); // evita adicionar #id na URL
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); // rolagem suave
}


// ===================================      CARROSSEL DAS IMAGENS - PROFISSIONAL

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    slides[slideIndex].classList.add("displaySlide");
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

}
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


// ===================================      CARROSSEL DAS IMAGENS - ACADÊMICO

const slides2 = document.querySelectorAll(".slides2 img");
let slideIndex2 = 0;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider2);

function initializeSlider2(){

    slides2[slideIndex2].classList.add("displaySlide2");
}
function showSlide2(index2){

    if(index2 >= slides2.length){
        slideIndex2 = 0;
    }
    else if(index2 < 0){
        slideIndex2 = slides2.length -1;
    }

    slides2.forEach(slide2 => {
        slide2.classList.remove("displaySlide2");
    });
    slides2[slideIndex2].classList.add("displaySlide2");

}
function prevSlide2(){
    slideIndex2--;
    showSlide2(slideIndex2);
}
function nextSlide2(){
    slideIndex2++;
    showSlide2(slideIndex2);
}

