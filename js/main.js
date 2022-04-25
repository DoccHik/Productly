$('.blog__inner').slick({
    // infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 500,
    variableWidth: true,
    responsive: [{
            breakpoint: 1135,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


// Муню бургер
const menuIcon = document.querySelector('.header__menu-icon');
const menuBody = document.querySelector('.header__menu-body');

menuIcon.addEventListener('click', function() {
    // Добавляем класс active на иконку меню
    menuIcon.classList.toggle('active');
    menuBody.classList.toggle('active');


})