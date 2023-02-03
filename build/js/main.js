$(document).ready(function() {
  triggerCopy();
  animatedMainInit();

  $('.aside__slide:first').show();
  $('.js-step-next').click(function() {
    var currentSlide = $(this).parents('.aside__slide');
    currentSlide.slideToggle(450);
    currentSlide.next().slideToggle(450);
  });

  $('.js-step-prev').click(function() {
    var currentSlide = $(this).parents('.aside__slide');
    currentSlide.slideToggle(450);
    currentSlide.prev().slideToggle(450);
  });

  $('.js-progress-hook').click(function() {
    var currentSlide = $(this).parents('.aside__slide');
    $('.js-progress').toggleClass('is-active');
    setTimeout(function() {
      $('body').addClass('is-animation');
    }, 550);
    setTimeout(function() {
      $('.aside').removeClass('aside--theme-gray');
      $('.aside').addClass('aside--theme-red');
      currentSlide.next().slideToggle(450);
      currentSlide.next().next().slideToggle(450);
      $('.main__layout').addClass('is-show');
    }, 8700);
  });

  // copy el
  function triggerCopy() {
    $('.js-copy-trigger').click(function() {
      var copyText = $(this).data('copy');
      var copyTextCopied = $(this).data('copy-text');
      var copyCurrent = $(this);

      var $copyCopy = $(this);
      var $temp = $('<input>');
      $('body').append($temp);
      $temp.val($copyCopy.text()).select();
      document.execCommand('copy');
      $temp.remove();

      copyCurrent.addClass('is-copied');
      setTimeout(function() {
        copyCurrent.removeClass('is-copied');
      }, 1500);
    });
  }
});

// animation main page
function animatedMainInit() {
  setInterval(function() {
    $('body').addClass('is-animation');
  }, 550);
}