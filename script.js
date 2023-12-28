      // Initialize Swiper
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Number of slides to show at once
        spaceBetween: 10, // Space between slides
        loop: true, // Enable loop mode to make it continuous
        autoplay: {
            delay: 3000, // Auto-scroll delay in milliseconds (3 seconds in this case)
        },
        pagination: {
            el: '.swiper-pagination', // Pagination element
            clickable: true, // Enable clickable pagination bullets
        },
        navigation: {
            nextEl: '.swiper-button-next', // Next button element
            prevEl: '.swiper-button-prev', // Previous button element
        },
    });