document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelector(".cards");
    const totalImages = document.querySelectorAll(".card").length;
    let index = 0;

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    
    function showImage(index) {
        cards.style.transform = `translateX(-${index * 100}%)`; 
    }
    

    function nextImage() {
        index = (index + 1) % totalImages; 
        showImage(index);
    }


    function prevImage() {
        index = (index - 1 + totalImages) % totalImages;
        showImage(index);
    }

    const carouselContainer = document.querySelector('.carousel-container');
    let autoSlide = setInterval(nextImage, 3000);

    carouselContainer.addEventListener('mouseenter', function() {
        clearInterval(autoSlide); 
    });

    carouselContainer.addEventListener('mouseleave', function() {
        autoSlide = setInterval(nextImage, 3000); 
    });

    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);

    showImage(index);
});
