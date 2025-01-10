document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider-container");

    sliders.forEach((slider) => {
        const track = slider.querySelector(".slider-track");
        const items = slider.querySelectorAll(".slider-item");
        const btnLeft = slider.querySelector(".slider-arrow.left");
        const btnRight = slider.querySelector(".slider-arrow.right");

        const itemWidth = items[0].clientWidth + 10; // Учитываем отступ
        const maxScroll = (items.length * itemWidth) - slider.clientWidth;
        let currentScroll = 0;

        // Сдвиг влево
        btnLeft.addEventListener("click", () => {
            // Если текущий слайд первый, переходим к последнему
            if (currentScroll <= 0) {
                currentScroll = maxScroll;
            } else {
                currentScroll -= itemWidth;
            }
            track.style.transform = `translateX(-${currentScroll}px)`;
        });

        // Сдвиг вправо
        btnRight.addEventListener("click", () => {
            // Если текущий слайд последний, переходим к первому
            if (currentScroll >= maxScroll) {
                currentScroll = 0;
            } else {
                currentScroll += itemWidth;
            }
            track.style.transform = `translateX(-${currentScroll}px)`;
        });
    });
});
