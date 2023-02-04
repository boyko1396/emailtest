$(document).ready(function() {
  triggerCopy();
  animatedMainInit();
  downloadReceiptEvent();

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
    }, 1700);
  });

  // result nav
  $(function() {
    $('.layout__slide:first').show();
    $('.js-result-next').click(function() {
      $(this).parents('.layout__slide').slideToggle(450);
      $(this).parents('.layout__slide').next().slideToggle(450);
    });
  });

  $(function() {
    $('#' + $('.js-payment-method:checked').val()).show();
    $('.js-payment-method').change(function(){
      $('.layout__slide-payment-method').hide();
      $('#' + $(this).val()).show();
    });
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

  // event after download receipt
  function downloadReceiptEvent() {
    $('.js-download-receipt-input').change(function() {
      $('body').addClass('is-completed');
      $('.main__aside').addClass('is-hide');
      $('.main__layout').addClass('is-hide');
      $('.main__success').addClass('is-show');
    });
  }
});

// animation main page
function animatedMainInit() {
  setTimeout(function() {
    $('body').addClass('is-animation');
  }, 550);
}