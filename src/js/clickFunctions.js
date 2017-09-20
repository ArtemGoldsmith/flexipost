module.exports = function() {

  // modals
  function modalCall(modalClass) {
    $('.modal-container .modal-bg').fadeIn(300);
    $('.modal-container .modal').fadeOut(300);
    $('.modal-container').fadeIn(300).children('.modal.' + modalClass + '').fadeIn(300);
  }

  $('.modal-container .modal-bg').on('click', function(e) {
    e.preventDefault();
    $(this).fadeOut(300);
    $('.modal-container .modal').fadeOut(300);
  });

  $('.modal .close').on('click', function(e) {
    e.preventDefault();
    $(this).parent('.modal').fadeOut(300);
    $('.modal-bg').fadeOut(300);
  });

  $('.sign-up-btn').on('click', function() {
    modalCall('registration');
  });

  $('.sign-in-btn').on('click', function() {
    modalCall('login');
  });

  $('header #menu').on('click', function(e) {
    e.preventDefault();
    $('.main-wrapper').toggleClass('sidebar-opened');
    setTimeout(function() {
      $('#post-slider-2').trigger('refresh.owl.carousel');
    }, 250);
  });

};