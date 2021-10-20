document.addEventListener("DOMContentLoaded", function () {

  // Slider-home section start
  let sliderHome = new Swiper(".slider-home", {
    // loop: true,
    navigation: {
      nextEl: "#slider-home__arrow-next",
      prevEl: "#slider-home__arrow-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    breakpoints: {

    },
  });
  // Slider-home section end


  // Interactive page start

  //    Info btn

  //    Info btn dropdown 
  let buttonsMenu = document.querySelectorAll('.menu_btn');

  buttonsMenu.forEach((elem) => {
    elem.addEventListener('click', () => {
      elem.closest('.menu-wrap').querySelector('.menu_inactive').classList.toggle('menu_active')
      elem.closest('.menu-wrap').querySelector('.menu_btn').classList.toggle('menu_btn-active')
    })
  });

  //    Registration btn
  // Interactive page end
});
// menu_active