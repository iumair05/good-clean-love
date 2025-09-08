document.querySelectorAll('.social-card').forEach(card => {
    const video = card.querySelector('.social-video');
    const playToggle = card.querySelector('.play-toggle');
    const playIcon = playToggle.querySelector('.icon-play');
    const pauseIcon = playToggle.querySelector('.icon-pause');

    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playIcon.style.display = "none";
            pauseIcon.style.display = "block";
        } else {
            video.pause();
            playIcon.style.display = "block";
            pauseIcon.style.display = "none";
        }
    }

    playToggle.addEventListener('click', togglePlayPause);


    video.addEventListener('click', togglePlayPause);
});


// social made section swiper
const socialSwiper = new Swiper(".socialSwiper", {
    slidesPerView: 1,
    spaceBetween: 36,
    loop: false,
    navigation: {
        nextEl: ".social-swiper-next",
        prevEl: ".social-swiper-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 36,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 36,
        },
    }
});
