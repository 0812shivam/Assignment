const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;
let interval;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 103; 
    carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

function autoAdvance() {
    currentIndex++;
    showSlide(currentIndex);
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
}
interval = setInterval(autoAdvance, 5000); 
carousel.addEventListener('mouseenter', () => {
    clearInterval(interval);
});
carousel.addEventListener('mouseleave', () => {
    interval = setInterval(autoAdvance, 5000); 
});

showSlide(currentIndex);


