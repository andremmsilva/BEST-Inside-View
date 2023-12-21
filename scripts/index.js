import Carousel from "./carousel.js";

let imageCarousel;
let testimonialCarousel;

window.addEventListener("DOMContentLoaded", (_event) => {
    imageCarousel = new Carousel('#imageCarousel', {
        nextBtn: '#imageCarouselNext',
        prevBtn: '#imageCarouselPrev',
        loop: true
    });

    testimonialCarousel = new Carousel('#testimonialCarousel', {
        nextBtn: '#testimonialCarouselNext',
        prevBtn: '#testimonialCarouselPrev',
        loop: true
    });
});

window.addEventListener("resize", (_event) => {
    imageCarousel = new Carousel('#imageCarousel', {
        nextBtn: '#imageCarouselNext',
        prevBtn: '#imageCarouselPrev',
        loop: true
    });

    testimonialCarousel = new Carousel('#testimonialCarousel', {
        nextBtn: '#testimonialCarouselNext',
        prevBtn: '#testimonialCarouselPrev',
        loop: true
    });
});
