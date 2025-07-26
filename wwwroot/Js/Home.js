export function initializeCarousel() {
    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.getElementById('workingCarousel');
        if (!carousel) return;

        const myCarousel = new bootstrap.Carousel(carousel, {
            interval: 3000,
            wrap: true,
            pause: 'hover',
            touch: true
        });

        // Add smooth transition between slides
        carousel.addEventListener('slide.bs.carousel', function (e) {
            const nextSlide = e.relatedTarget;
            const currentSlide = e.from;

            if (currentSlide) currentSlide.classList.add('transition-out');
            if (nextSlide) nextSlide.classList.add('transition-in');
        });

        // Remove transition classes after animation completes
        carousel.addEventListener('slid.bs.carousel', function (e) {
            const previousSlide = e.from;
            const activeSlide = e.to;

            if (previousSlide) previousSlide.classList.remove('transition-out');
            if (activeSlide) activeSlide.classList.remove('transition-in');
        });

        // Pause/play button
        const pauseButton = document.createElement('button');
        pauseButton.innerHTML = '⏸️';
        pauseButton.className = 'carousel-pause-btn';
        pauseButton.style.position = 'absolute';
        pauseButton.style.top = '10px';
        pauseButton.style.right = '10px';
        pauseButton.style.zIndex = '999';
        carousel.appendChild(pauseButton);

        let isPlaying = true;
        pauseButton.addEventListener('click', function () {
            if (isPlaying) {
                myCarousel.pause();
                pauseButton.innerHTML = '▶️';
            } else {
                myCarousel.cycle();
                pauseButton.innerHTML = '⏸️';
            }
            isPlaying = !isPlaying;
        });

        // Keyboard navigation
        document.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') {
                myCarousel.prev();
            } else if (e.key === 'ArrowRight') {
                myCarousel.next();
            }
        });

        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const threshold = 50;
            if (touchEndX < touchStartX - threshold) {
                myCarousel.next();
            }
            if (touchEndX > touchStartX + threshold) {
                myCarousel.prev();
            }
        }
    });
}

// Auto initialize (optional)
// Comment below line if you want to call manually from Razor
initializeCarousel();


@section Scripts {
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const carousel = document.getElementById('workingCarousel');
        if (!carousel) return;

        const myCarousel = new bootstrap.Carousel(carousel, {
            interval: 3000,
        wrap: true,
        pause: 'hover',
        touch: true
            });

        // Add smooth transition between slides
        carousel.addEventListener('slide.bs.carousel', function (e) {
                const nextSlide = e.relatedTarget;
        const currentSlide = e.from;

        if (currentSlide) currentSlide.classList.add('transition-out');
        if (nextSlide) nextSlide.classList.add('transition-in');
            });

        // Remove transition classes after animation completes
        carousel.addEventListener('slid.bs.carousel', function (e) {
                const previousSlide = e.from;
        const activeSlide = e.to;

        if (previousSlide) previousSlide.classList.remove('transition-out');
        if (activeSlide) activeSlide.classList.remove('transition-in');
            });

        // Pause/play button
        const pauseButton = document.createElement('button');
        pauseButton.innerHTML = '⏸️';
        pauseButton.className = 'carousel-pause-btn';
        pauseButton.style.position = 'absolute';
        pauseButton.style.top = '10px';
        pauseButton.style.right = '10px';
        pauseButton.style.zIndex = '999';
        carousel.appendChild(pauseButton);

        let isPlaying = true;
        pauseButton.addEventListener('click', function () {
                if (isPlaying) {
            myCarousel.pause();
        pauseButton.innerHTML = '▶️';
                } else {
            myCarousel.cycle();
        pauseButton.innerHTML = '⏸️';
                }
        isPlaying = !isPlaying;
            });

        // Keyboard navigation
        document.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowLeft') {
            myCarousel.prev();
                } else if (e.key === 'ArrowRight') {
            myCarousel.next();
                }
            });

        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
            }, {passive: true });

        carousel.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
            }, {passive: true });

        function handleSwipe() {
                const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            myCarousel.next();
                }
                if (touchEndX > touchStartX + threshold) {
            myCarousel.prev();
                }
            }
        });
    </script>
}
