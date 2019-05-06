/*
Menu navigation */

var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.1, {    
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});
t1.to(".two", 0.1, {
     y: -6,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.1
});

t1.to(".three", 0, { display:'none'});


t1.to(".menu", 1, {
     top: "0%", 
     ease: Expo.easeInOut,
     delay: -0.5
});

t1.staggerFrom(".menu ul li", 0.8, {x: 200, opacity: 0, ease:Expo.easeOut}, 0.3);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
     t1.reversed(!t1.reversed());
});

/* light-box galleri / forstørret billeder */
             $('a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

/* billeder bevæg sig højre eller venstre og fade */

     function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}



// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});
/*
$('#carousel div').click(function() {
  moveToSelected($(this));
});
*/
$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});

/* chat bubble same as images */
     function moveToSelectedchat(element) {

  if (element == "next2") {
    var selected = $(".selected2").next();
  } else if (element == "prev2") {
    var selected = $(".selected2").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected2");

  $(prev).removeClass().addClass("prev2");
  $(next).removeClass().addClass("next2");

  $(nextSecond).removeClass().addClass("nextRightSecond2");
  $(prevSecond).removeClass().addClass("prevLeftSecond2");

  $(nextSecond).nextAll().removeClass().addClass('hideRight2');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft2');

}



// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev2');
        break;

        case 39: // right
        moveToSelected('next2');
        break;

        default: return;
    }
    e.preventDefault();
});
/*
$('#carousel div').click(function() {
  moveToSelected($(this));
});
*/
$('#prev2').click(function() {
  moveToSelectedchat('prev2');
});

$('#next2').click(function() {
  moveToSelectedchat('next2');
});
