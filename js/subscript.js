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

  //doc.html
    $('.doc__item').on('click', function(){
      var dataId = $(this).attr('data-id')
      console.log(dataId)
      $('#'+dataId).fadeIn()
    })

    $('.doc__pop-up').mouseup(function (e){ // событие клика по веб-документу
      var div = $(".doc__pop-up__wrap"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $(this).fadeOut()
      }
    });

    $('.doc__pop-up__close').on('click', function(){
      $(this).closest('.doc__pop-up').fadeOut()
    })
  //doc.html end
});