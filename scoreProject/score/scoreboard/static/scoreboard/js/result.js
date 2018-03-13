// ----- On render -----
var green = "#3CC796";
var black = "rgba(0,0,0,0.65)";
var drew = $($('.leader>li')[0]);
var joel = $($('.leader>li')[2]);

$(function() {
  TweenMax.set($('.leader>li'), {
    autoAlpha: 0,
    y: 20
  })
  drew.find('.number').css({
    'color': green
  });
  setTimeout(function() {
    TweenMax.staggerTo($('.leader>li'), 0.6, {
      autoAlpha: 1,
      y: 0,
      ease: Expo.easeOut

    }, 0.075, swappem)
  }, 1500);
});

var swappem = function() {
  setTimeout(function() {
    TweenMax.to(joel, 0.25, {
      scale: 1.1,
      onComplete: function() {
        joel.find('.list_num').text(1);
        joel.find('.number').css('color', green);
      }
    });
    TweenMax.to(joel, 0.6, {
      y: -160,
      delay: 0.1
    })
    TweenMax.to(joel, 0.5, {
      scale: 1,
      delay: 0.6,
      ease: Elastic.easeOut.config(1, 0.3)
    })
    TweenMax.to(drew, 0.5, {
      y: 160,
      delay: 0.1,
      onUpdate: function() {
        drew.find('.list_num').text(3);
        drew.find('.number').css('color', black);
      }
    })
    var numbers = {
      drew: 9735,
      joel: 7653
    };
    TweenMax.to(numbers, 0.667, {
      drew: 6548,
      joel: 9957,
      onUpdate: function() {
        var joelNum = Math.floor(numbers.joel).toLocaleString();
        joel.find('.number').text(joelNum)
        var drewNum = Math.floor(numbers.drew).toLocaleString();
        drew.find('.number').text(drewNum)
      }
    })
    TweenMax.to($('#decoration'), 0.12, {
      autoAlpha: 1,
      scaleX: 1.05,
      scaleY: 1.3,
      delay: 0.6,
      ease: Power3.easeOut,
      onComplete: function() {
        TweenMax.to($('#decoration'), 0.125, {
          scale: 0,
          delay: 0.2,
          ease: Power3.easeIn
        })
      }
    })
    TweenMax.to($('#decoration2'), 0.12, {
      autoAlpha: 1,
      scaleX: 1.05,
      scaleY: 1.3,
      delay: 0.65,
      ease: Power3.easeOut,
      onComplete: function() {
        TweenMax.to($('#decoration2'), 0.125, {
          scale: 0,
          delay: 0.1,
          ease: Power3.easeIn
        })
      }
    })
    TweenMax.to($('#decoration3'), 0.12, {
      autoAlpha: 1,
      scaleX: 1.05,
      scaleY: 1.3,
      delay: 0.7,
      ease: Power3.easeOut,
      onComplete: function() {
        TweenMax.to($('#decoration3'), 0.125, {
          scale: 0,
          ease: Power3.easeIn
        })
      }
    })
  }, 1000)
}