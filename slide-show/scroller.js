var slideIndex = 1;



const plusSlide = (n) => {
    showSlides(slideIndex += n);

}

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

const showSlides = (n) => {
    let sliders = document.querySelectorAll(".slider");
    let dots = document.querySelectorAll(".dot");


    let length = sliders.length;

    if (n > length)
        slideIndex = 1;

    if (n < 1)
        slideIndex = length;

    //slideIndex = n > length ? 1 : n < 1 ? length : 1;

    for (let i = 0; i < length; i++) {
        sliders[i].style.display = 'none';
    }

    for (let i = 0; i < length; i++) {
        dots[i].classList.remove('.active');
    }

    sliders[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add(".active");
}
showSlides(slideIndex);