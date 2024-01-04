const rotateBtn = document.querySelector('.rotate-btn')
const slides = document.querySelectorAll('.bg-slide')
const totalSlides = slides.length;

let index = 0;

rotateBtn.addEventListener('click', ()=>{
    slides[index].classList.remove('active')

    index++

    if(index == totalSlides){
        index = 0
    }

    slides[index].classList.add('active')
})

