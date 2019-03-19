'use strict';

function menuToggle(){
  $('#hamburger').on('click', function(event){
    console.log('menu toggled');
    event.preventDefault();
    $('.menu').toggleClass('active');
  });
}

$(function (){
  menuToggle();
});