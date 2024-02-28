// -----------------------------

//   JS INDEX
/* =================== */
/* 

    ## Preloader
    ## sticky
    ## Dropdown 
    ## Video
    ## owl carousl
    ## Wow
    ## Googel Map
    ## Shuffle Js
    ## Ajax

*/

(function($) {
  "use strict"; 


 //**======================Type Js =============**/
 if ($('.typing').length > 0) {   
 //var typeString = ['Attractive!','Fast','Responsive'];
 var typeString = ['Creative'];
 var  i = 0;
 var count = 0
 var selectedText = '';
 var text = '';
 (function type() {
   if (count == typeString.length) {
     count = 0;
   }
   selectedText = typeString[count];
   text = selectedText.slice(0, ++i);
   document.getElementById('typing').innerHTML = text;
   if (text.length === selectedText.length) {
     count++;
     i = 0;
   }
   setTimeout(type, 300);
 }());

 function sleep(milliseconds) {
   var start = new Date().getTime();
   for (var i = 0; i < 1e7; i++) {
     if ((new Date().getTime() - start) > milliseconds){
       break;
     }
   }
 }
}
   //**======================End Type Js =============**/
 

//**================== Preloder========================*//
$(window).on('load', function() {
  $('#preloader').fadeOut('slow', function() { $(this).remove(); });
});

//**================= End of Preloder =====================**//

//**================= Stellarnav =====================**//

$(window).on('load',function() {
  $('.stellarnav').stellarNav({
      theme: 'dark',
      breakpoint: 768,
      position: 'right',
      openingSpeed: 300,
      closingDelay: 300,
      phoneBtn: '18009997788',
      locationBtn: 'https://www.google.com/maps'
  });
});

//**================= End Stellarnav =====================**//

//**================= Sticky =====================**//

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 50) {
      $('.header-area').addClass('nav-fixed');
  } else {
      $('.header-area').removeClass('nav-fixed');
  }
});


$(window).on('scroll', function() {
  if ($(window).scrollTop() > 50) {
      $('.header-area.heada-2').addClass('nav-fixed2');
  } else {
      $('.header-area.heada-2').removeClass('nav-fixed2');
  }
});

//**=================End Sticky =====================**//

//**===================Scroll UP ===================**//

$(document).ready(function () {

  $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
          $('.flaticon-multimedia-option').fadeIn();
      } else {
          $('.flaticon-multimedia-option').fadeOut();
      }
  });

  $('.flaticon-multimedia-option').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 1000);
      return false;
  });

});
//**===================Scroll UP ===================**//


//**================= CounterUp =====================**//

if ($('.counterUp').length > 0) {   
    $('.counterUp').counterUp({
        delay: 10,
        time: 1000
    });
  }
  
  //**================= End CounterUp =====================**//

//*==================nav Click Animation================= *//

   /*---------------------
    smooth scroll
    --------------------- */
    if ($('.smoothscroll').length > 0) {   
      
    $('.smoothscroll').on('click', function(e) {
      e.preventDefault();
      var target = this.hash;

      $('html, body').stop().animate({
          'scrollTop': $(target).offset().top - 80
      }, 1200);
  });
}



    // RTL Switcher

    $('.psg-icon').on('click', function(){

      $(this).parent().toggleClass('active');

  });

//*===============End nav Click Animation==================*//



//*Animation js *//

//**=================== WOW ================================**//
   var wowSel = 'wow';
   var wow = new WOW({
       boxClass: wowSel,
       animateClass: 'animated',
       offset: 0,
       mobile: true,
       live: true,
       callback: function(box) {
       },
       scrollContainer: null
   });
   wow.init();

//**============== End of WOW =============================**//


//**================== Owl Carousl========================*//

if ($('.home-slide-1').length > 0) {   

$('.home-slide-1').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  center:true,
  autoplay:true,
  dots:false,
  autoplayTimeout:5000,
  smartSpeed :2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
  
})
}

   //slider-2
if ($('.team-slide-1').length > 0) { 

$('.team-slide-1').owlCarousel({
 
  loop:true,
  margin:30,
  center:true,
  dots:true,
  nav:false,
  autoplay:true,
  autoplayTimeout:3000,
  smartSpeed :2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      767:{
        items:2
    },
      768:{
        items:3
    },
      1000:{
          items:3
      }
  }
  
})

}

//slide-3
if ($('.home-slide-6').length > 0) { 
$('.home-slide-6').owlCarousel({
  loop:true,
  margin:0,
  center:true,
  nav:false,
  dots:true,
  autoplay:true,
  autoplayTimeout:5000,
  smartSpeed :5000,
  touchDrag: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


}

//slide-4

if ($('.home-slide-9').length > 0) { 
  
  $('.home-slide-9').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    center:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:5000,
    dots:false,
    smartSpeed :2000,
    touchDrag: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    
  })
  
  $('.home-slide-9').find('.owl-nav').removeClass('disabled');
$('.home-slide-9').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});
  
  }


  //slide-5

if ($('.home-slide-10').length > 0) { 

  $('.home-slide-10').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    center:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:5000,
    dots:true,
    smartSpeed :2000,
    touchDrag: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })
  
  
  }

   //slider-6
if ($('.testimonial').length > 0) { 

  $('.testimonial').owlCarousel({
   
    loop:true,
    margin:30,
    center:true,
    dots:false,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed :2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        767:{
          items:2
      },
        768:{
          items:3
      },
        1000:{
            items:3
        }
    }
    
  })
  
  }
  
//slide-7
if ($('.home-slide-11').length > 0) { 
  $('.home-slide-11').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:false,
    autoplayTimeout:5000,
    smartSpeed :2000,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })
  $('.home-slide-11').on('mousewheel','.owl-stage', function (e) {
    var owl = $('.home-slide-11');
    if (e.deltaY>0) {
        owl.trigger('prev.owl',[7000]);
    } else {
        owl.trigger('next.owl',[7000]);
    }
    e.preventDefault();
  });

  
  }

//slide-9

if ($('.product-d-info').length > 0) { 
  $(document).ready(function() {
    $('.product-d-info').owlCarousel({
      items: 1,
      loop: false,
      center: true,
      margin: 10,
      nav:false,
      dots:false,
      autoplay:false,
      callbacks: true,
      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: 'URLHash'
    });
  })
  }
//**==================End  Owl Carousl========================*//



//*================Portfolio Shuffle ============*//
/*---------------------
    Shuffle Activation    
   --------------------- */
   $(window).on('load', function(e) {
    if ($('body').find('.my-shuffle-container').length !== 0) {
        var Shuffle = window.Shuffle;
        var jQuery = window.jQuery;
        var portFolioShuffle = new Shuffle(document.querySelector('.my-shuffle-container'), {
            itemSelector: '.single-portfolio',
            sizer: '.Ssizer-element',
            buffer: 1,
        });
        $('input[name="shuffle-filter"]').on('change', function(evt) {
            var input = evt.currentTarget;
            if (input.checked) {
                portFolioShuffle.filter(input.value);
            }
        });
    }
});



//*================End Portfolio Shuffle ============*//




}(jQuery));


//**==================Video Play- Pause-Stop===================================**//

var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  var pauseButton = document.getElementById("pause-button");
  var fullbody = document.querySelector('body');

  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
    
  });

  fullbody.addEventListener("click", function() {
    player.pauseVideo();
      
  });
}
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//***================== End YouTube Video Pause-Play-Stop =============******//


//**=================== Google Map ==========================**//

if ($('#googleMap').length > 0) { 
var user_lat, user_lng;
    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('googleMap'), {
            center: {
                lat: 23.782062,
                lng: 90.416053
            },
            zoom: 15,
            scrollwheel: false
        });
              
     /*  var marker = new google.maps.Marker({
        position:  {  lat: 23.782062, lng: 90.416053},
        map: map,
        icon: "assets/images/gmap.png"
      }); */

          } 
        }
//====================================================================
//map2
var user_lat, user_lng;
    var map;
    var grayStyles = [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]

    function initMap() {
        map = new google.maps.Map(document.getElementById('googleMap2'), {
            center: {
                lat: 23.782062,
                lng: 90.416053
            },
            zoom: 15,
            scrollwheel: false,
            styles: grayStyles
        });
              
     /*  var marker = new google.maps.Marker({
        position:  {  lat: 23.782062, lng: 90.416053},
        map: map,
        icon: "assets/images/gmap.png"
      }); */

          } 
//*================ End Google Map ============*//



/*---------------------
    // Ajax Contact Form
    --------------------- */

   $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function() {
    
        var yourname = $('#yourname').val();
        var email = $('#email').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }
    
        yourname = $.trim(yourname);
        email = $.trim(email);
        msg = $.trim(msg);
    
        if (yourname != '' && email != '' && msg != '') {
            var values = "yourname=" + yourname + "&email=" + email + "&msg=" + msg;
            $.ajax({
                type: "POST",
                url: "assets/mail-sender/contact.php",
                data: values,
                success: function() {
                    $('#yourname').val('');
                    $('#email').val('');
                    $('#msg').val('');
    
                   $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                        $('.cf-msg').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')   
            $('.cf-msg').fadeOut(2000)
        }
        return false;
    });
    
    
    // Ajax Contact Form JS END


    
    // Product Cart  Increment

    function increaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('number').value = value;
    }
    
    function decreaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      value--;
      document.getElementById('number').value = value;
    }

    // Product Cart  Increment End