$(document).ready(function() {
  $("a.scroll").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination
      },
      800
    );
    return false;
  });

  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });

  class minTimer {
    constructor(hour, min, sec) {
      this.hour = document.querySelectorAll(`.${hour}`);
      this.min = document.querySelectorAll(`.${min}`);
      this.sec = document.querySelectorAll(`.${sec}`);
    }
    start() {
      // время таймера
      let timerPar = {
        hour: 1,
        min: 45,
        sec: 4
      };
      setInterval(() => {
        for (let i = 0; i < this.min.length; i++) {
          let hourString = ("0" + timerPar.hour).slice(-2);
          let minString = ("0" + timerPar.min).slice(-2);
          let secString = ("0" + timerPar.sec).slice(-2);
          // каждая цифра в отдельном элементе
          this.hour[i].innerHTML = `<span>${hourString[0]}</span><span>${
            hourString[1]
          }</span>`;
          this.min[i].innerHTML = `<span>${minString[0]}</span><span>${
            minString[1]
          }</span>`;
          this.sec[i].innerHTML = `<span>${secString[0]}</span><span>${
            secString[1]
          }</span>`;

          // цифры вместе
          // this.hour[i].innerHTML = hourString
          // this.min[i].innerHTML = minString
          // this.sec[i].innerHTML = secString
        }
        timerPar.sec--;
        if (timerPar.sec == -1) {
          timerPar.sec = 59;
          timerPar.min--;
        }
        if (timerPar.min == -1) {
          timerPar.min = 59;
          timerPar.hour--;
        }
      }, 1000);
    }
  }
  let timer = new minTimer("t-hour", "t-min", "t-sec").start();

  $('.feedback, .ever-popup-btn').click(function (t) {
    t.preventDefault(),
    $('.popup-window').removeClass('hidden')
  }),
  $('.close-popup').click(function () {
    $('.popup-window').addClass('hidden')
  }),
  $('body').click(function (t) {
    t.target.closest('.popup-window') || t.target.closest('.feedback, .ever-popup-btn') || $('.popup-window').addClass('hidden')
  })
});
