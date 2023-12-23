let pastEditionsPrev, pastEditionsNext;
let pastEditionsIdx = 0;

let testimonialsPrev, testimonialsNext;
let testimonialsIdx = 0;

addEventListener("DOMContentLoaded", () => {
    pastEditionsPrev = document.getElementById("past-editions-prev");
    pastEditionsNext = document.getElementById("past-editions-next");
    testimonialsPrev = document.getElementById("testimonials-prev");
    testimonialsNext = document.getElementById("testimonials-next");
    pastEditionsIdx = 2;
    testimonialsIdx = 2;

    const pastEditionSliders = document.querySelectorAll(".past-editions-s");
    updateSlider(pastEditionSliders, pastEditionsIdx);

    pastEditionsPrev.addEventListener("click", (_event) => {
        pastEditionsIdx--;
        if (pastEditionsIdx < 0) {
            pastEditionsIdx = pastEditionSliders.length - 1;
        }
        updateSlider(pastEditionSliders, pastEditionsIdx);
    });

    pastEditionsNext.addEventListener("click", (_event) => {
        pastEditionsIdx++;
        if (pastEditionsIdx >= pastEditionSliders.length) {
            pastEditionsIdx = 0;
        }
        updateSlider(pastEditionSliders, pastEditionsIdx);
    });

    const testimonialSliders = document.querySelectorAll(".testimonials-s");
    updateSlider(testimonialSliders, testimonialsIdx);

    testimonialsPrev.addEventListener("click", (_event) => {
        testimonialsIdx--;
        if (testimonialsIdx < 0) {
            testimonialsIdx = testimonialSliders.length - 1;
        }
        updateSlider(testimonialSliders, testimonialsIdx);
    });

    testimonialsNext.addEventListener("click", (_event) => {
        testimonialsIdx++;
        if (testimonialsIdx >= testimonialSliders.length) {
            testimonialsIdx = 0;
        }
        updateSlider(testimonialSliders, testimonialsIdx);
    });
});

function updateSlider(sliders, newIdx) {
    sliders.forEach(element => {
        element.checked = false;
    });

    sliders[newIdx].checked = true;
}