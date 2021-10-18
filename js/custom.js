function forResize() {
  $('.js-searchContent').innerHeight($('.js-header-wrapper').innerHeight());

  var coef = 1;
  var width = 'device-width';
  var screenSide = screen.width;
  if (screen.width > screen.height) {
    screenSide = screen.height;
  }
  if (screenSide < 720) {
    coef = (screenSide / 720).toFixed(2);
  }
  $('meta[name=viewport]').attr('content', 'width=' + width + ', minimum-scale=' + coef + ', initial-scale=' + coef + ', maximum-scale=3, user-scalable=yes');

  var appHeight = $(window).innerHeight() - $('.js-footer').innerHeight();
  $('.js-app-inner').css({ 'minHeight': appHeight });

  $('#main').css({ 'min-height': $(window).height() - $('.js-footer').innerHeight() - $('.js-header-wrapper').innerHeight() });
}
$(document).ready(function () {
  // forResize();
  // $(window).resize(function () {
  //   forResize();
  // });
  $('.gallery-box').each(function () {
    var div = $(this).find('.draggable');
    if (div) {
      $(this).attr('style', 'padding-top:3%');
    }

  });
  $(document).on('click', 'body', function (e) {
    if ($(e.target).closest('.js-searchContent').length == 0 && $('.js-searchContent').hasClass('active')) {
      $('.js-searchContent').removeClass('active');
    }
  });

  $(document).on('mouseover', '.js-oblone-text a', function (e) {
    var area = $(this).closest('text').attr('data-area');
    $('.js-oblone-map [data-area="' + area + '"]').addClass('hover');
  });
  $(document).on('mouseout', '.js-oblone-text a', function (e) {
    var area = $(this).closest('text').attr('data-area');
    $('.js-oblone-map [data-area="' + area + '"]').removeClass('hover');
  });


  $(document).on('click', '.js-menu-toggler', function (e) {
    e.preventDefault();
    $('body').toggleClass('noscroll');
    $('.js-menu-toggler').toggleClass('active');
    $('.js-header').toggleClass('active');
    $('.js-header-background').toggleClass('active');
  });

  $(document).on('mousedown', 'body', function (e) {
    if ($(e.target).closest('.js-header').length == 0 && $(e.target).closest('.js-menu-toggler').length == 0 && $('.js-header').hasClass('active')) {
      $('body').removeClass('noscroll');
      $('.js-menu-toggler').removeClass('active');
      $('.js-header').removeClass('active');
      $('.js-header-background').removeClass('active');
    }
  });


  $(document).on('click', '.js-searchToggler', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.js-searchContent').toggleClass('active');
  });

  $('[type="reset"]').click(function () {
    location.href = location.origin + location.pathname;
  });

  var Active = true;
  $('ul.menu').find('li.drop').each(function () {
    $(this).find('ul.drop-down').each(function () {
      $(this).find('li.active').each(function () {
        Active = false;
      });
    });
  });
  if (Active == true) {
    $('li.parent-active').removeClass().addClass('drop active');
  }

  $('.gallery-box').find('.draggable').each(function () {
    $(this).attr('style', 'border:1px solid;');
  });

  $('.share').click(function () {
    var href = $(this).attr('data-href');
    window.open(href, '_blank', 'width= 600,height=600,scrollbars=1'); return false;
  });
});
