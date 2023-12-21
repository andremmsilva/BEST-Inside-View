class Carousel {
    constructor(selector, options = {}) {
        this.container = document.querySelector(selector);
        this.items = this.container.querySelectorAll('.mycarousel-item');
        this.nextBtn = options.nextBtn ? document.querySelector(options.nextBtn) : null;
        this.prevBtn = options.prevBtn ? document.querySelector(options.prevBtn) : null;
        this.currentIndex = 0;
        this.itemsLength = this.items.length;
        this.translateValue = 0;

        // Optional settings
        this.loop = options.loop || false; // loop at the end or not

        this.init();
        this.attachEvents();
    }

    init() {
        // Initial setup, if any, like setting initial active item
        this.items[this.currentIndex].classList.add('active');
        this.updateButtons();
    }

    attachEvents() {
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
    }

    next() {
        const itemsToShow = window.innerWidth >= 768 ? 3 : 1;
        if (this.currentIndex < this.itemsLength - itemsToShow) {
            this.currentIndex++;
        } else if (this.loop) {
            this.currentIndex = 0;
        }
        this.updateCarousel();
    }

    prev() {
        const itemsToShow = window.innerWidth >= 768 ? 3 : 1;
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else if (this.loop) {
            this.currentIndex = (this.itemsLength - itemsToShow);
        }
        this.updateCarousel();

    }

    updateCarousel() {
        const itemWidth = this.container.clientWidth / (window.innerWidth >= 768 ? 3 : 1);
        const translateValue = -this.currentIndex * itemWidth;
        this.items.forEach((item) => {
            item.style.transform = `translateX(${translateValue}px)`;
        });
    }

    updateButtons() {
        if (!this.loop) {
            // If not looping, possibly hide buttons at start/end
            if (this.prevBtn) {
                this.prevBtn.style.visibility = this.currentIndex > 0 ? 'visible' : 'hidden';
            }
            if (this.nextBtn) {
                this.nextBtn.style.visibility = this.currentIndex < this.itemsLength - 1 ? 'visible' : 'hidden';
            }
        }
    }
}

export default Carousel;
