let index = 0;
    const slides = document.querySelector(".slides");

    function showSlide() {
        slides.style.transform = `translateX(${-index * 300}px)`;
    }

    function nextSlide() {
        index = (index + 1) % 3;
        showSlide();
    }

    function prevSlide() {
        index = (index - 1 + 3) % 3;
        showSlide();
    }