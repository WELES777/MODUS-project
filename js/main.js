/*
 * Custom
 */
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ## App scripts
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$(document).ready(function() {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // ## Top slider
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    var count = 1;
    var currant = 1;
    var slideNew;
    var before = 1;
    var botlist = 1;
    (function() {
        function topSlider() {
            if (currant > 3) currant = 1;
            if (currant <= 0) currant = 3;
            $(".main-slider-index").css({
                "background-image": "url('../img/photo" + currant + ".jpg')"
            }, 200);
            before = count;
            count = currant;
            if ($(".slider-sub" + before).hasClass('active')) {
                $(".slider-sub" + (before)).removeClass('active')
            };
            $(".slider-sub" + count).addClass("active");
            currant++;
        };

        function resuming() {
            topSlider();
            slideNew = setInterval(topSlider, 5000);
        };
        slideNew = setInterval(topSlider, 5000);
        $(".index-ruler span").click(function() {
            clearInterval(slideNew);
            currant = $(this).index() + 1;
            $(".main-slider-index").css({
                "background-image": "url('../img/photo" + currant + ".jpg')"
            }, 200);
            resuming();
        });
        $(".main-slider-arrow1").click(function() {
            clearInterval(slideNew);
            currant = currant - 2;
            resuming();
        });
        $(".main-slider-arrow2").click(function() {
            clearInterval(slideNew);
            resuming();
        });
    })();
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // ## Animation on scroll
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    $(window).scroll(function() {
        function indicatorsRun() {
            bar1.animate(0.5);
            bar2.animate(0.7);
            bar3.animate(0.8);
            bar4.animate(1);
        }
        var bottomWindPos = $(this).height() + $(this).scrollTop();
        var elemPos = $(".indicators").offset();
        var newelemPos = elemPos.top - 10;
        var result = bottomWindPos - newelemPos;
        if (result) indicatorsRun();
    });
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // ## Brand scroll
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    var lastvalue = 6;
    var firstvalue = 1;
    $(".brand-left").click(function() {
        --lastvalue;
        --firstvalue;
        if (lastvalue < 1) lastvalue = 10;
        if (firstvalue < 1) firstvalue = 10;
        $(".combo-brand col-xl:last-child").remove();
        $(".combo-brand").prepend('<col-xl><div class="wrapper"><img src="../img/brand' + firstvalue + '.png" alt="brandlabel"></div></col-xl>');
    });
    $(".brand-right").click(function() {
        ++firstvalue;
        ++lastvalue;
        if (firstvalue > 10) firstvalue = 1;
        if (lastvalue > 10) lastvalue = 1;
        $(".combo-brand col-xl:first-child").remove();
        $(".combo-brand").append('<col-xl><div class="wrapper"><img src="../img/brand' + lastvalue + '.png" alt="brandlabel"></div></col-xl>');
    });
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ## Plugins scripts
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var bar1 = new ProgressBar.SemiCircle('.progressImg1', {
  strokeWidth: 15,
  color: '#e2534b',
  trailColor: '#76c7c0',
  trailWidth: 15,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#e2534b'},
  to: {color: '#ED6A5A'},
  // Set default step function for all animate calls
  step: (state, bar1) => {
    bar1.path.setAttribute('stroke', state.color);
    var value = Math.round(bar1.value() * 100);
    if (value === 0) {
      bar1.setText('');
    } else {
      bar1.setText(value);
    }

    bar1.text.style.color = state.color;
  }
});
bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar1.text.style.fontSize = '3rem';




var bar2 = new ProgressBar.SemiCircle('.progressImg2', {
  strokeWidth: 15,
  color: '#e2534b',
  trailColor: '#76c7c0',
  trailWidth: 15,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#e2534b'},
  to: {color: '#ED6A5A'},
  // Set default step function for all animate calls
  step: (state, bar2) => {
    bar2.path.setAttribute('stroke', state.color);
    var value = Math.round(bar2.value() * 100);
    if (value === 0) {
      bar2.setText('');
    } else {
      bar2.setText(value);
    }

    bar2.text.style.color = state.color;
  }
});
bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar2.text.style.fontSize = '3rem';




var bar3 = new ProgressBar.SemiCircle('.progressImg3', {
  strokeWidth: 15,
  color: '#e2534b',
  trailColor: '#76c7c0',
  trailWidth: 15,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#e2534b'},
  to: {color: '#ED6A5A'},
  // Set default step function for all animate calls
  step: (state, bar3) => {
    bar3.path.setAttribute('stroke', state.color);
    var value = Math.round(bar3.value() * 100);
    if (value === 0) {
      bar3.setText('');
    } else {
      bar3.setText(value);
    }

    bar3.text.style.color = state.color;
  }
});
bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar3.text.style.fontSize = '3rem';





var bar4 = new ProgressBar.SemiCircle('.progressImg4', {
  strokeWidth: 15,
  color: '#e2534b',
  trailColor: '#76c7c0',
  trailWidth: 15,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#e2534b'},
  to: {color: '#ED6A5A'},
  // Set default step function for all animate calls
  step: (state, bar4) => {
    bar4.path.setAttribute('stroke', state.color);
    var value = Math.round(bar4.value() * 100);
    if (value === 0) {
      bar4.setText('');
    } else {
      bar4.setText(value);
    }

    bar4.text.style.color = state.color;
  }
});
bar4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar4.text.style.fontSize = '3rem';
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEN1c3RvbVxyXG4gKi9cclxuLy8gPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj5cclxuLy8gIyMgQXBwIHNjcmlwdHNcclxuLy8gPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyA+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PlxyXG4gICAgLy8gIyMgVG9wIHNsaWRlclxyXG4gICAgLy8gPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj5cclxuICAgIHZhciBjb3VudCA9IDE7XHJcbiAgICB2YXIgY3VycmFudCA9IDE7XHJcbiAgICB2YXIgc2xpZGVOZXc7XHJcbiAgICB2YXIgYmVmb3JlID0gMTtcclxuICAgIHZhciBib3RsaXN0ID0gMTtcclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICBmdW5jdGlvbiB0b3BTbGlkZXIoKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyYW50ID4gMykgY3VycmFudCA9IDE7XHJcbiAgICAgICAgICAgIGlmIChjdXJyYW50IDw9IDApIGN1cnJhbnQgPSAzO1xyXG4gICAgICAgICAgICAkKFwiLm1haW4tc2xpZGVyLWluZGV4XCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoJy4uL2ltZy9waG90b1wiICsgY3VycmFudCArIFwiLmpwZycpXCJcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgYmVmb3JlID0gY291bnQ7XHJcbiAgICAgICAgICAgIGNvdW50ID0gY3VycmFudDtcclxuICAgICAgICAgICAgaWYgKCQoXCIuc2xpZGVyLXN1YlwiICsgYmVmb3JlKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc2xpZGVyLXN1YlwiICsgKGJlZm9yZSkpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAkKFwiLnNsaWRlci1zdWJcIiArIGNvdW50KS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgY3VycmFudCsrO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc3VtaW5nKCkge1xyXG4gICAgICAgICAgICB0b3BTbGlkZXIoKTtcclxuICAgICAgICAgICAgc2xpZGVOZXcgPSBzZXRJbnRlcnZhbCh0b3BTbGlkZXIsIDUwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2xpZGVOZXcgPSBzZXRJbnRlcnZhbCh0b3BTbGlkZXIsIDUwMDApO1xyXG4gICAgICAgICQoXCIuaW5kZXgtcnVsZXIgc3BhblwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzbGlkZU5ldyk7XHJcbiAgICAgICAgICAgIGN1cnJhbnQgPSAkKHRoaXMpLmluZGV4KCkgKyAxO1xyXG4gICAgICAgICAgICAkKFwiLm1haW4tc2xpZGVyLWluZGV4XCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoJy4uL2ltZy9waG90b1wiICsgY3VycmFudCArIFwiLmpwZycpXCJcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgcmVzdW1pbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLm1haW4tc2xpZGVyLWFycm93MVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzbGlkZU5ldyk7XHJcbiAgICAgICAgICAgIGN1cnJhbnQgPSBjdXJyYW50IC0gMjtcclxuICAgICAgICAgICAgcmVzdW1pbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLm1haW4tc2xpZGVyLWFycm93MlwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzbGlkZU5ldyk7XHJcbiAgICAgICAgICAgIHJlc3VtaW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG4gICAgLy8gPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj5cclxuICAgIC8vICMjIEFuaW1hdGlvbiBvbiBzY3JvbGxcclxuICAgIC8vID4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGluZGljYXRvcnNSdW4oKSB7XHJcbiAgICAgICAgICAgIGJhcjEuYW5pbWF0ZSgwLjUpO1xyXG4gICAgICAgICAgICBiYXIyLmFuaW1hdGUoMC43KTtcclxuICAgICAgICAgICAgYmFyMy5hbmltYXRlKDAuOCk7XHJcbiAgICAgICAgICAgIGJhcjQuYW5pbWF0ZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJvdHRvbVdpbmRQb3MgPSAkKHRoaXMpLmhlaWdodCgpICsgJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgICAgICB2YXIgZWxlbVBvcyA9ICQoXCIuaW5kaWNhdG9yc1wiKS5vZmZzZXQoKTtcclxuICAgICAgICB2YXIgbmV3ZWxlbVBvcyA9IGVsZW1Qb3MudG9wIC0gMTA7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGJvdHRvbVdpbmRQb3MgLSBuZXdlbGVtUG9zO1xyXG4gICAgICAgIGlmIChyZXN1bHQpIGluZGljYXRvcnNSdW4oKTtcclxuICAgIH0pO1xyXG4gICAgLy8gPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj5cclxuICAgIC8vICMjIEJyYW5kIHNjcm9sbFxyXG4gICAgLy8gPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj5cclxuICAgIHZhciBsYXN0dmFsdWUgPSA2O1xyXG4gICAgdmFyIGZpcnN0dmFsdWUgPSAxO1xyXG4gICAgJChcIi5icmFuZC1sZWZ0XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC0tbGFzdHZhbHVlO1xyXG4gICAgICAgIC0tZmlyc3R2YWx1ZTtcclxuICAgICAgICBpZiAobGFzdHZhbHVlIDwgMSkgbGFzdHZhbHVlID0gMTA7XHJcbiAgICAgICAgaWYgKGZpcnN0dmFsdWUgPCAxKSBmaXJzdHZhbHVlID0gMTA7XHJcbiAgICAgICAgJChcIi5jb21iby1icmFuZCBjb2wteGw6bGFzdC1jaGlsZFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAkKFwiLmNvbWJvLWJyYW5kXCIpLnByZXBlbmQoJzxjb2wteGw+PGRpdiBjbGFzcz1cIndyYXBwZXJcIj48aW1nIHNyYz1cIi4uL2ltZy9icmFuZCcgKyBmaXJzdHZhbHVlICsgJy5wbmdcIiBhbHQ9XCJicmFuZGxhYmVsXCI+PC9kaXY+PC9jb2wteGw+Jyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIuYnJhbmQtcmlnaHRcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgKytmaXJzdHZhbHVlO1xyXG4gICAgICAgICsrbGFzdHZhbHVlO1xyXG4gICAgICAgIGlmIChmaXJzdHZhbHVlID4gMTApIGZpcnN0dmFsdWUgPSAxO1xyXG4gICAgICAgIGlmIChsYXN0dmFsdWUgPiAxMCkgbGFzdHZhbHVlID0gMTtcclxuICAgICAgICAkKFwiLmNvbWJvLWJyYW5kIGNvbC14bDpmaXJzdC1jaGlsZFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAkKFwiLmNvbWJvLWJyYW5kXCIpLmFwcGVuZCgnPGNvbC14bD48ZGl2IGNsYXNzPVwid3JhcHBlclwiPjxpbWcgc3JjPVwiLi4vaW1nL2JyYW5kJyArIGxhc3R2YWx1ZSArICcucG5nXCIgYWx0PVwiYnJhbmRsYWJlbFwiPjwvZGl2PjwvY29sLXhsPicpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4vLyA+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PlxyXG4vLyAjIyBQbHVnaW5zIHNjcmlwdHNcclxuLy8gPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj5cclxuXHJcbnZhciBiYXIxID0gbmV3IFByb2dyZXNzQmFyLlNlbWlDaXJjbGUoJy5wcm9ncmVzc0ltZzEnLCB7XHJcbiAgc3Ryb2tlV2lkdGg6IDE1LFxyXG4gIGNvbG9yOiAnI2UyNTM0YicsXHJcbiAgdHJhaWxDb2xvcjogJyM3NmM3YzAnLFxyXG4gIHRyYWlsV2lkdGg6IDE1LFxyXG4gIGVhc2luZzogJ2Vhc2VJbk91dCcsXHJcbiAgZHVyYXRpb246IDIwMDAsXHJcbiAgc3ZnU3R5bGU6IG51bGwsXHJcbiAgdGV4dDoge1xyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgYWxpZ25Ub0JvdHRvbTogZmFsc2VcclxuICB9LFxyXG4gIGZyb206IHtjb2xvcjogJyNlMjUzNGInfSxcclxuICB0bzoge2NvbG9yOiAnI0VENkE1QSd9LFxyXG4gIC8vIFNldCBkZWZhdWx0IHN0ZXAgZnVuY3Rpb24gZm9yIGFsbCBhbmltYXRlIGNhbGxzXHJcbiAgc3RlcDogKHN0YXRlLCBiYXIxKSA9PiB7XHJcbiAgICBiYXIxLnBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UnLCBzdGF0ZS5jb2xvcik7XHJcbiAgICB2YXIgdmFsdWUgPSBNYXRoLnJvdW5kKGJhcjEudmFsdWUoKSAqIDEwMCk7XHJcbiAgICBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgYmFyMS5zZXRUZXh0KCcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhcjEuc2V0VGV4dCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFyMS50ZXh0LnN0eWxlLmNvbG9yID0gc3RhdGUuY29sb3I7XHJcbiAgfVxyXG59KTtcclxuYmFyMS50ZXh0LnN0eWxlLmZvbnRGYW1pbHkgPSAnXCJSYWxld2F5XCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZic7XHJcbmJhcjEudGV4dC5zdHlsZS5mb250U2l6ZSA9ICczcmVtJztcclxuXHJcblxyXG5cclxuXHJcbnZhciBiYXIyID0gbmV3IFByb2dyZXNzQmFyLlNlbWlDaXJjbGUoJy5wcm9ncmVzc0ltZzInLCB7XHJcbiAgc3Ryb2tlV2lkdGg6IDE1LFxyXG4gIGNvbG9yOiAnI2UyNTM0YicsXHJcbiAgdHJhaWxDb2xvcjogJyM3NmM3YzAnLFxyXG4gIHRyYWlsV2lkdGg6IDE1LFxyXG4gIGVhc2luZzogJ2Vhc2VJbk91dCcsXHJcbiAgZHVyYXRpb246IDE0MDAsXHJcbiAgc3ZnU3R5bGU6IG51bGwsXHJcbiAgdGV4dDoge1xyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgYWxpZ25Ub0JvdHRvbTogZmFsc2VcclxuICB9LFxyXG4gIGZyb206IHtjb2xvcjogJyNlMjUzNGInfSxcclxuICB0bzoge2NvbG9yOiAnI0VENkE1QSd9LFxyXG4gIC8vIFNldCBkZWZhdWx0IHN0ZXAgZnVuY3Rpb24gZm9yIGFsbCBhbmltYXRlIGNhbGxzXHJcbiAgc3RlcDogKHN0YXRlLCBiYXIyKSA9PiB7XHJcbiAgICBiYXIyLnBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UnLCBzdGF0ZS5jb2xvcik7XHJcbiAgICB2YXIgdmFsdWUgPSBNYXRoLnJvdW5kKGJhcjIudmFsdWUoKSAqIDEwMCk7XHJcbiAgICBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgYmFyMi5zZXRUZXh0KCcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhcjIuc2V0VGV4dCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFyMi50ZXh0LnN0eWxlLmNvbG9yID0gc3RhdGUuY29sb3I7XHJcbiAgfVxyXG59KTtcclxuYmFyMi50ZXh0LnN0eWxlLmZvbnRGYW1pbHkgPSAnXCJSYWxld2F5XCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZic7XHJcbmJhcjIudGV4dC5zdHlsZS5mb250U2l6ZSA9ICczcmVtJztcclxuXHJcblxyXG5cclxuXHJcbnZhciBiYXIzID0gbmV3IFByb2dyZXNzQmFyLlNlbWlDaXJjbGUoJy5wcm9ncmVzc0ltZzMnLCB7XHJcbiAgc3Ryb2tlV2lkdGg6IDE1LFxyXG4gIGNvbG9yOiAnI2UyNTM0YicsXHJcbiAgdHJhaWxDb2xvcjogJyM3NmM3YzAnLFxyXG4gIHRyYWlsV2lkdGg6IDE1LFxyXG4gIGVhc2luZzogJ2Vhc2VJbk91dCcsXHJcbiAgZHVyYXRpb246IDE0MDAsXHJcbiAgc3ZnU3R5bGU6IG51bGwsXHJcbiAgdGV4dDoge1xyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgYWxpZ25Ub0JvdHRvbTogZmFsc2VcclxuICB9LFxyXG4gIGZyb206IHtjb2xvcjogJyNlMjUzNGInfSxcclxuICB0bzoge2NvbG9yOiAnI0VENkE1QSd9LFxyXG4gIC8vIFNldCBkZWZhdWx0IHN0ZXAgZnVuY3Rpb24gZm9yIGFsbCBhbmltYXRlIGNhbGxzXHJcbiAgc3RlcDogKHN0YXRlLCBiYXIzKSA9PiB7XHJcbiAgICBiYXIzLnBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UnLCBzdGF0ZS5jb2xvcik7XHJcbiAgICB2YXIgdmFsdWUgPSBNYXRoLnJvdW5kKGJhcjMudmFsdWUoKSAqIDEwMCk7XHJcbiAgICBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgYmFyMy5zZXRUZXh0KCcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhcjMuc2V0VGV4dCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFyMy50ZXh0LnN0eWxlLmNvbG9yID0gc3RhdGUuY29sb3I7XHJcbiAgfVxyXG59KTtcclxuYmFyMy50ZXh0LnN0eWxlLmZvbnRGYW1pbHkgPSAnXCJSYWxld2F5XCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZic7XHJcbmJhcjMudGV4dC5zdHlsZS5mb250U2l6ZSA9ICczcmVtJztcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgYmFyNCA9IG5ldyBQcm9ncmVzc0Jhci5TZW1pQ2lyY2xlKCcucHJvZ3Jlc3NJbWc0Jywge1xyXG4gIHN0cm9rZVdpZHRoOiAxNSxcclxuICBjb2xvcjogJyNlMjUzNGInLFxyXG4gIHRyYWlsQ29sb3I6ICcjNzZjN2MwJyxcclxuICB0cmFpbFdpZHRoOiAxNSxcclxuICBlYXNpbmc6ICdlYXNlSW5PdXQnLFxyXG4gIGR1cmF0aW9uOiAxNDAwLFxyXG4gIHN2Z1N0eWxlOiBudWxsLFxyXG4gIHRleHQ6IHtcclxuICAgIHZhbHVlOiAnJyxcclxuICAgIGFsaWduVG9Cb3R0b206IGZhbHNlXHJcbiAgfSxcclxuICBmcm9tOiB7Y29sb3I6ICcjZTI1MzRiJ30sXHJcbiAgdG86IHtjb2xvcjogJyNFRDZBNUEnfSxcclxuICAvLyBTZXQgZGVmYXVsdCBzdGVwIGZ1bmN0aW9uIGZvciBhbGwgYW5pbWF0ZSBjYWxsc1xyXG4gIHN0ZXA6IChzdGF0ZSwgYmFyNCkgPT4ge1xyXG4gICAgYmFyNC5wYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgc3RhdGUuY29sb3IpO1xyXG4gICAgdmFyIHZhbHVlID0gTWF0aC5yb3VuZChiYXI0LnZhbHVlKCkgKiAxMDApO1xyXG4gICAgaWYgKHZhbHVlID09PSAwKSB7XHJcbiAgICAgIGJhcjQuc2V0VGV4dCgnJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYXI0LnNldFRleHQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJhcjQudGV4dC5zdHlsZS5jb2xvciA9IHN0YXRlLmNvbG9yO1xyXG4gIH1cclxufSk7XHJcbmJhcjQudGV4dC5zdHlsZS5mb250RmFtaWx5ID0gJ1wiUmFsZXdheVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnO1xyXG5iYXI0LnRleHQuc3R5bGUuZm9udFNpemUgPSAnM3JlbSc7Il0sImZpbGUiOiJtYWluLmpzIn0=
