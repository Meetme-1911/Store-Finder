$(document).ready(function(){

  $('#search-icon').click(function(){
    $(this).toggleClass('fa-times');
    $('#search-box').toggleClass('active');
  });

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.nbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){

    $('#search-icon').removeClass('fa-times');
    $('#search-box').removeClass('active');

    $('#menu').removeClass('fa-times');
    $('.nbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
      $('header').addClass('sticky');
      // $('.nbar a').addClass('t-black');
    }else{
      $('header').removeClass('sticky');
      // $('.nbar a').removeClass('t-black')
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});