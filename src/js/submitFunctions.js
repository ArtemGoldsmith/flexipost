module.exports = function() {

  $('.modal.login form').validator().submit(function (e) {
    if ( !e.isDefaultPrevented() ) {
      e.preventDefault();
      $('.modal-container').fadeOut(300).children('.modal.login').fadeOut(300);
      let userInfo = JSON.stringify($(this).serializeObject()); // output in JSON string
      console.log(userInfo);
    }
  });

  $('.modal.registration form').validator().submit(function (e) {
    if ( !e.isDefaultPrevented() ) {
      e.preventDefault();
      let userInfo = JSON.stringify($(this).serializeObject()); // output in JSON string
      console.log(userInfo);

      $('.modal.registration .success-message .user-email').text($('#userEmail').val());
      $('.modal.registration form,' +
        '.modal.registration .socials,' +
        '.modal.registration .or-line').fadeOut(300);
      $('.modal.registration .success-message').fadeIn(300);
      setTimeout(function() {
        $('.modal-container').fadeOut(300).children('.modal.registration').fadeOut(300);
      }, 3000);
    }
  });

};