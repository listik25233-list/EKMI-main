document.addEventListener('DOMContentLoaded', function() {
    // Get all slides and dots
    const slides = document.querySelectorAll('.main-container-image-sofa');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 1;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(slideNumber) {
        // Remove active class from all slides and dots
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Add active class to current slide and dot
        const targetSlide = document.querySelector(`.main-container-image-sofa[data-slide="${slideNumber}"]`);
        const targetDot = document.querySelector(`.dot[data-index="${slideNumber}"]`);
        
        if (targetSlide && targetDot) {
            targetSlide.classList.add('active');
            targetDot.classList.add('active');
            currentSlide = slideNumber;
        }
    }

    // Function to advance to next slide
    function nextSlide() {
        currentSlide = currentSlide >= slides.length ? 1 : currentSlide + 1;
        showSlide(currentSlide);
    }

    // Add click event listeners to dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideNumber = parseInt(dot.getAttribute('data-index'));
            clearInterval(slideInterval);
            showSlide(slideNumber);
            startSlideshow();
        });
    });

    // Function to start automatic slideshow
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Start the slideshow
    startSlideshow();

    // Furniture slider functionality
    const furnitureSlider = document.querySelector('.furniture-slider');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const cards = document.querySelectorAll('.furniture-card');
    let currentPosition = 0;
    const cardsToShow = 3;
    const totalSlides = Math.ceil(cards.length / cardsToShow);

    function updateSliderPosition() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 87; // match the gap from CSS
        const offset = currentPosition * -(cardWidth + gap) * cardsToShow;
        furnitureSlider.style.transform = `translateX(${offset}px)`;
    }

    function nextPage() {
        if (currentPosition < totalSlides - 1) {
            currentPosition++;
        } else {
            currentPosition = 0;
        }
        updateSliderPosition();
    }

    function prevPage() {
        if (currentPosition > 0) {
            currentPosition--;
        } else {
            currentPosition = totalSlides - 1;
        }
        updateSliderPosition();
    }

    if (prevArrow && nextArrow) {
        prevArrow.addEventListener('click', prevPage);
        nextArrow.addEventListener('click', nextPage);
    }

    // Initial setup
    updateSliderPosition();

    // Update slider position on window resize
    window.addEventListener('resize', updateSliderPosition);

    // Modal functionality
    const showModalBtn = document.getElementById('show-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modal = document.getElementById('consultation-modal');
    const overlay = document.getElementById('modal-overlay');

    if(showModalBtn) {
        showModalBtn.addEventListener('click', () => {
            if (modal && overlay) {
                modal.classList.add('active');
                overlay.classList.add('active');
                document.body.classList.add('modal-open');
            }
        });
    }

    const closeAll = () => {
        if (modal && overlay) {
            modal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    };

    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', closeAll);
    }

    if(overlay) {
        overlay.addEventListener('click', closeAll);
    }

    const categories = document.querySelectorAll('.category-name');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            categories.forEach(c => c.classList.remove('active'));
            category.classList.add('active');
        });
    });
});

