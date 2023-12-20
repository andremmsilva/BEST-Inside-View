const carouselContainer = document.getElementById('imgcarousel-container');
const carousel = document.getElementById('imgcarousel');
const prevBtn = document.getElementById('carousel-prev-btn');
const nextBtn = document.getElementById('carousel-next-btn');

const maxImageHeight = 271;

let currentIndex = 0;
let w = window.innerWidth;
let h = window.innerHeight;

let carouselWidth = 0;
let carouselItemWidth = 0;
let carouselItemHeight = 0;

addEventListener("resize", (_event) => {
    w = window.innerWidth;
    h = window.innerHeight;
    renderCarousel();
});

addEventListener("load", (_event) => {
    renderCarousel();
})

function renderCarousel() {
    carouselWidth = Math.min(Math.floor(w * 0.95), 846);
    carouselContainer.style.width = carouselWidth.toString().concat("px");
    if (w < 768) {
        carouselItemWidth = carouselWidth - 8;
        prevBtn.children[0].className = "bi bi-arrow-left-square-fill text-light";
        nextBtn.children[0].className = "bi bi-arrow-right-square-fill text-light";
    } else {
        carouselItemWidth = Math.floor(carouselWidth / 3) - 8;
        prevBtn.children[0].className = "bi bi-chevron-left text-dark";
        nextBtn.children[0].className = "bi bi-chevron-right text-dark";
    }
    carouselItemHeight = Math.min(carouselItemWidth, maxImageHeight);
    for (let i = 0; i < carousel.children.length; i++) {
        const element = carousel.children[i];
        element.style.width = carouselItemWidth.toString().concat("px");
        element.style.height = carouselItemHeight.toString().concat("px");
        element.children[0].style.width = carouselItemWidth.toString().concat("px");
        element.children[0].style.height = carouselItemHeight.toString().concat("px");
    }
    prevBtn.style.left = Math.max(8, Math.floor(w / 2 - carouselWidth / 2 - carouselItemWidth / 5))
        .toString().concat("px");
    nextBtn.style.right = Math.max(8, Math.floor(w / 2 - carouselWidth / 2 - carouselItemWidth / 5))
        .toString().concat("px");
    prevBtn.style.display = 'inline';
    nextBtn.style.display = 'inline';
}

function prevSlide() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
}

function nextSlide() {
    if (w < 768) {
        currentIndex = Math.min(currentIndex + 1, carousel.children.length - 1);
    } else {
        currentIndex = Math.min(currentIndex + 1, carousel.children.length - 3);
    }
    updateCarousel();
}

function updateCarousel() {
    const translateValue = -currentIndex * (carouselItemWidth + 8); // Adjust the value based on item width and margin
    carousel.style.transform = `translateX(${translateValue}px)`;
}