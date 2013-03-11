var SpongeApp = function() {

    return {

        init : function()
        {

            jQuery('#home-carousel').carousel({
                interval: 15000,
                pause: 'hover'
            });

            jQuery('#feature-products').carousel({
                interval: false
            });

            jQuery('.top').click(function(){
                jQuery('html,body').animate({scrollTop: jQuery('body').offset().top}, 'slow');
            }); //move to top navigator

            jQuery('[rel="tooltip"]').tooltip();
            jQuery('.popovers').popover();

            // fix sub nav on scroll
            var $nav = $('#master-head .navbar'), navTop = $('#master-head .navbar').length && $('#master-head .navbar').offset().top - 5, isFixed = 0;

            processScroll();

            $(window).on('scroll', processScroll)

            function processScroll() {
                var i, scrollTop = $(window).scrollTop();
                if (scrollTop >= navTop && !isFixed) {
                    isFixed = 1
                    $nav.removeClass('navbar-static-top').addClass('navbar-fixed-top')
                } else if (scrollTop <= navTop && isFixed) {
                    isFixed = 0
                    $nav.addClass('navbar-static-top').removeClass('navbar-fixed-top')
                }
            }

        }

    };

}();