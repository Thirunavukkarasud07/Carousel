 var formInput = document.querySelectorAll(".form-input");
  for(let i=0;i<formInput.length;i++){
    formInput[i].addEventListener('focusout', function() {
      if (formInput[i].value.length > 0) {
        formInput[i].classList.add('active-field');
        console.log("add class");
      } else {
        formInput[i].classList.remove('active-field');
        console.log("remove class");
      }
    });
  }
  
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop:true,
      margin:10,
      autoplay:false,
      nav:true,
      dots:false,
      autoplayTimeout:6000,
      dots:false,
      items: 1,
      navText : ["<i class='fa fa-chevron-left project-owl-left-icon'></i>","<i class='fa fa-chevron-right project-owl-right-icon'></i>"]
    });
  });

  
  window.addEventListener('DOMContentLoaded', function(e) {
    $('.project-slick-carousel').slick({
      dots: false,
      autoplay: false,
      autoplaySpeed: 5000,
      prevArrow: '<button class="previous-button is-control project-carousel-slick-leftslider">' +
                 '  <span class="fas fa-angle-left" aria-hidden="true"></span>' +
                 '  <span class="sr-only"><i class="fa-solid fa-chevron-left"></i></span>' +
                 '</button>',
      nextArrow: '<button class="next-button is-control project-carousel-slick-rightslider">' +
                 '  <span class="fas fa-angle-right" aria-hidden="true"></span>' +
                 '  <span class="sr-only"><i class="fa-solid fa-angle-left"></i></span>' +
                 '</button>'
    });
  });
  var swiper = new Swiper(".Swiper-project-carousel", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    // effect:"cube",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".project-carousel-left-icon",
      nextEl: ".project-carousel-right-icon",
    },
  });


