const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let index = 0;

function showSlide(i) {
    index = (i + carouselItems.length) % carouselItems.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(index - 1));
nextButton.addEventListener('click', () => showSlide(index + 1));

showSlide(index);

    function toggleDescription(element) {
            element.classList.toggle('show');
        }
        function toggleMenu() {
            const links = document.querySelector('.navbar .links');
            links.classList.toggle('active');
        }       
