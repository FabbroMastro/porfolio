




/* -------------------------------------------
   Sliders
------------------------------------------- */
initSlider('.mil-projects-slider', {
    parallax: true,
    autoHeight: true,
    spaceBetween: 15,
    slidesPerView: 1,
    speed: 800,
    navigation: {
        prevEl: '.mil-project-prev',
        nextEl: '.mil-project-next',
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
        },
    },
});

const sliders = document.querySelectorAll('.mil-reviews-slider');
const paginations = document.querySelectorAll('.mil-reviews-pagination');

sliders.forEach((slider, index) => {
    const pagination = paginations[index];

    const prevButton = document.querySelectorAll('.mil-review-prev')[index];
    const nextButton = document.querySelectorAll('.mil-review-next')[index];

    initSlider(slider, {
        parallax: true,
        autoHeight: true,
        spaceBetween: 15,
        slidesPerView: 1,
        speed: 800,
        pagination: {
            el: pagination,
            clickable: true,
        },
        navigation: {
            prevEl: prevButton,
            nextEl: nextButton,
        },
    });
});

function initSlider(slider, options) {
    if (slider) {
        new Swiper(slider, options);
    }
}

