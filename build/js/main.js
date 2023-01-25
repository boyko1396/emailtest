setInterval(function() {
  $('body').addClass('is-animation');
}, 550);

$(document).ready(function() {
  triggerCopy();

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