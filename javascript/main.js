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

/* TAB PANEL */

$(document).ready(function(){

  $('.tab-panel').each(function(){

      tabChange($('ul.tabs a', this).first().attr('href'));

      $('.tabs a').on('click', function(){
          if(history.replaceState){
              history.replaceState({}, '', $(this).attr('href'));
              tabChange($(this).attr('href'));
          } else
              location.hash = $(this).attr('href');
          return false;
      });
  });
  function tabChange(hash){
      var tab = hash.substr(1);

      if(!tab) return;

      $(".tab-content").hide();
      $(".tab-content[tab='"+tab+"']").show();

      $("ul.tabs a").removeClass('selected');
      $("ul.tabs a[href='#"+tab+"']").addClass('selected');

  }
  $(window).on('hashchange', function(){
      tabChange(location.hash);
  });
  tabChange(location.hash);

});





