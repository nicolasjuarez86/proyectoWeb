/** GLIDER CARROUSEL **/

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '#dots',
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }      
    })
})


/* SCROLLED */

$(document).ready(function(){
  var HEADER_HEIGHT = 170;
  var HEADER_HEIGHT_SCROLLED = 90;

  $('.Header').scrolled({
    scroll: HEADER_HEIGHT - HEADER_HEIGHT_SCROLLED
  });
});






