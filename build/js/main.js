$(document).ready(function() {
  triggerCopy();
  parallaxInit();
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

// parallax main page init
function parallaxInit() {
  var b = document.getElementsByTagName('BODY')[0];  

  b.addEventListener('mousemove', function(event) {
    parallaxed1(event);
    parallaxed2(event);
    parallaxed3(event);
    parallaxed4(event);
  });

  function parallaxed1(e) {
    var amountMovedX = (e.clientX * -.2 / 8);
    var amountMovedY = (e.clientY * -.2 / 8);
    var x = document.getElementsByClassName('js-parallax-init-1');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
  }

  function parallaxed2(e) {
    var amountMovedX = (e.clientX * -.2 / 5);
    var amountMovedY = (e.clientY * -.2 / 5);
    var x = document.getElementsByClassName('js-parallax-init-2');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
  }

  function parallaxed3(e) {
    var amountMovedX = (e.clientX * .25 / 6);
    var amountMovedY = (e.clientY * .25 / 6);
    var x = document.getElementsByClassName('js-parallax-init-3');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
  }

  function parallaxed4(e) {
    var amountMovedX = (e.clientX * .1 / 6);
    var amountMovedY = (e.clientY * .1 / 6);
    var x = document.getElementsByClassName('js-parallax-init-4');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
  }
}