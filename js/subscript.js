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
  $('.doc__item').on('click', function () {
    var dataId = $(this).attr('data-id')

    $('#' + dataId).fadeIn()
  })

  $('.doc__pop-up').mouseup(function (e) { // событие клика по веб-документу
    var div = $(".doc__pop-up__wrap"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $(this).fadeOut()
    }
  });

  $('.doc__pop-up__close').on('click', function () {
    $(this).closest('.doc__pop-up').fadeOut()
  })
  //doc.html end

  //ask.html
  $('.ask__title').on('click', function () {
    $(this).closest('.ask__item').toggleClass('active')
    $(this).next('.ask__content').slideToggle()
  })

  $('.btn-pop-up').on('click', function () {
    var dataId = $(this).attr('data-id')
    $('#' + dataId).fadeIn()
  })

  if (jQuery().niceSelect) {
    $('.sub-select').niceSelect();
  }

  $('.sub-select').on('change', function () {
    $(this).closest('.ask-pop-up__top-row').addClass('active')
  })

  $('#ask-form').on('submit', function (e) {
    e.preventDefault()
    $(this).closest('.doc__pop-up').fadeOut()
    $('#ask-pop-up-senk').fadeIn()
  })
  //ask.html end

  // Interactive page start
  //    Info btn dropdown 
  let buttonsMenu = document.querySelectorAll('.menu_btn');

  buttonsMenu.forEach((elem) => {
    elem.addEventListener('click', () => {
      let menuItem = $(elem).closest('.menu-wrap').find('.menu_inactive').eq(0)
      menuItem.slideToggle()
      menuItem.toggleClass('menu_active')
      elem.closest('.menu-wrap').querySelector('.menu_btn').classList.toggle('menu_btn-active')
    })
  });

  //    Interactive info btn
  let interactiveButtons = document.querySelectorAll('.btn-primary');

  interactiveButtons.forEach((button) => {
    let interactiveTarget = button.dataset.target;

    button.addEventListener('click', () => {
      //Получаем блок, который нужно показать
      let block = document.querySelector(interactiveTarget);
      //Получаем все остальнные блоки, чтобы их скрыть
      let allBlocks = document.querySelectorAll('.content-box');
      //Скрываем блоки
      allBlocks.forEach(item => {
        item.classList.remove('interactive--show')// класс для скрытыя
      });

      //Показываем нужный блок
      block.classList.add('interactive--show')
    })
  })
  //    Interactive registration btn
  // Interactive page end
});