var container = document.querySelector('.gallery');
var mixer = mixitup(container, {
    selectors: {
        control: '[our-mix-control]'
    },
});
$(document).ready(function(){
  $(".navbar-nav").on("click","li",function(){
    $(this).addClass("active").siblings().removeClass("active");
  });
});
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    //items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:400,
    responsive : {
    // breakpoint from 0 up
    0 : {
        items : 1,
    },
    // breakpoint from 480 up
    480 : {
        items : 3,

    },
    // breakpoint from 768 up
    768 : {
        items : 5,
    }
}
});



// top functionality
  // var ourwindow=$(this).scrollTop();
  $(window).ready(function(){
    // wow
    new WOW().init();


    $(window).scroll(function(){
      var ourwindow = $(this).scrollTop();
      if(ourwindow>200){
        $(".top").fadeIn();
      }else {
        $(".top").fadeOut();
      }
      if(ourwindow>0){
        $(".top-bar").addClass("d-none");
        $(".menu-area").addClass("sticky");
        $(".slider").css({
          "margin-top": "103px"
        });
        $(".menu-area .navbar-light .navbar-nav li").css({
          "margin-top": 0,
          "margin-bottom": "10px"
        });
      }else {
        $(".top-bar").removeClass("d-none");
        $(".menu-area .navbar-light .navbar-nav li").css({
          "margin-top": "25px",
          "margin-bottom": "25px"
        })
      }
    });


// smoth scroll
$('.navbar-nav a[href^="#"]').click(function(e){
  e.preventDefault;
  var target=this.hash;
  $("html").animate({
    scrollTop:$(target).offset().top
  },1000)
})



$(".top").click(function(){
  $("html").animate({
    "scrollTop":0
  },2000);
});
});
