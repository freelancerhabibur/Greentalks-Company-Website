(function ($) {
    "use strict";

    var talkGreen = {

        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },

        /* ============================================================ */
        /* Sticky Menu
        /* ============================================================ */
        sticky_menu: function() {
            var fixed_top = $("header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    fixed_top.addClass("sticky");
                } else {
                    fixed_top.removeClass("sticky");
                }
            });
        },
        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image]").each(function() {
                var $this = $(this);               
    
                if(  $this.attr("data-bg-color") !== undefined ){                        
                    $this.css("background-color", $this.attr("data-bg-color") );
                }
                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                    $this.css("background-size", $this.attr("data-bg-size") );
                    $this.css("background-repeat", $this.attr("data-bg-repeat") );
                    $this.css("background-position", $this.attr("data-bg-position") );
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                }
            });
        },
        
        
        initializ: function() {
			talkGreen.preloader();
			talkGreen.background_image();
		}
    };
    $(function() {
		talkGreen.initializ();
	});

})(jQuery);