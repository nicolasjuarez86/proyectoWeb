
/* SCROLLED */

$(document).ready(function(){
    var HEADER_HEIGHT = 170;
    var HEADER_HEIGHT_SCROLLED = 90;
  
    $('.Header').scrolled({
      scroll: HEADER_HEIGHT - HEADER_HEIGHT_SCROLLED
    });
  });
  

(function($){
    $.fn.scrolled = function(options) {

        return this.each(function() {

            var $placeholder = $("<div class='placeholder'>");
            var $this = $(this);
            
            $placeholder.css({width: $this.width(), height: $this.height()});
            $this.before($placeholder);

            var watch = function(){
                if($this.css('position') == 'fixed' && $(window).scrollTop() > options.scroll){
                    $this.addClass('isScrolled');
                } else {
                    $this.removeClass('isScrolled');
                }
            }

            $(window).on('scroll', $.throttle(100, watch));
            watch();

        });
    }
})(jQuery);
