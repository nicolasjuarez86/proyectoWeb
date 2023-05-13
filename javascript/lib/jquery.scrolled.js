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
