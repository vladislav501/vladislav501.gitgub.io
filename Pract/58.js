document.getElementById("fixedButton").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
function showAd() {
    alert("Посетите наш сайт для уникальных товаров и услуг!");
}
setInterval(showAd, 90000);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
});

document.querySelector('.slider').addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
        showSlide(currentSlide + 1);
    } else {
        showSlide(currentSlide - 1);
    }
});

