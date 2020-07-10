(function($) {
    'use strict';
    var navbar = $('.js-navbar:not(.navbar-fixed)');
    $(window).on('load', function() {
        $('.loader').fadeOut(1000);
    });
    jQuery('#menu-header-menu a').on("click", function(e) {
        if (!this.parent().hasClass('menu-item-has-children')) {
            $('.close-menu').click();
        }
    });
    jQuery('.menu-lang a').on("click", function(e) {
        var myindex = $(this).index();
        jQuery('.menu-lang a').removeClass('active');
        $(this).addClass('active');
        $('.right-boxed a').eq(myindex).addClass('active');
    });
    navbar.affix({
        offset: {
            top: 50
        }
    });
    navbar.addClass('animated slideInDown');
    navbar.on('affix.bs.affix', function() {
        if (!navbar.hasClass('affix')) {
            navbar.addClass('animated slideInDown');
        }
    });
    navbar.on('affixed-top.bs.affix', function() {
        navbar.removeClass('animated slideInDown');
    });
    $('.nav-mobile-list li a[href="#"]').on('click', function() {
        $(this).closest('li').toggleClass('current');
        $(this).closest('li').children('ul').slideToggle(200);
        return false;
    });
    $('.navbar-toggle').on('click', function() {
        $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
    });
    $('.close-menu, .click-capture, .menu-list li a').on('click', function() {
        $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
        $('.menu-list ul').slideUp(300);
    });
    $('.menu-list li a').on('click', function() {
        $('.menu-list li').removeClass('active');
        $(this).closest('li').addClass('active');
    });
    $('.menu-item-has-children >  a').on('click', function() {
        $(this).closest('li').children('ul').toggle(200);
        return false;
    });
    if ($('.owl-carousel').length > 0) {
        $(".review-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                720: {
                    items: 1,
                },
                1280: {
                    items: 1
                }
            },
            responsiveRefreshRate: 0,
            nav: true,
            navText: [],
            animateIn: 'fadeIn',
            dots: false
        });
        $(".project-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                720: {
                    items: 1,
                },
                1280: {
                    items: 1
                }
            },
            autoHeight: true,
            nav: true,
            navText: [],
            loop: true,
            responsiveRefreshRate: 0,
            smartSpeed: 500,
            dots: false
        });
    }
    if ($('.pagepiling').length > 0) {
        $('.pagepiling').pagepiling({
            scrollingSpeed: 280,
            loopBottom: true,
            loopTop: true,
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
            afterLoad: function(anchorLink, index) {
                if ($('.pp-section.active').scrollTop() > 0) {
                    $('.navbar').removeClass('navbar-white');
                } else {
                    $('.navbar').addClass('navbar-white');
                }
            }
        });
        $('.pp-scrollable').on('scroll', function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop > 0) {
                $('.navbar-2').removeClass('navbar-white');
            } else {
                $('.navbar-2').addClass('navbar-white');
            }
        });
        $('#pp-nav').remove().appendTo('body').addClass('white right-boxed hidden-xs');
        $('.pp-nav-up').on('click', function() {
            $.fn.pagepiling.moveSectionUp();
        });
        $('.pp-nav-down').on('click', function() {
            $.fn.pagepiling.moveSectionDown();
        });
    }
    $('.project-box').on('mouseover', function() {
        var index = $('.project-box').index(this);
        $('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });
    if ($('.js-form').length) {
        $('.js-form').each(function() {
            $(this).validate({
                errorClass: 'error wobble-error',
                submitHandler: function(form) {
                    $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: $(form).serialize(),
                        success: function() {
                            $('.success-message').show();
                        },
                        error: function() {
                            $('.error-message').show();
                        }
                    });
                }
            });
        });
    }
    
    
})(jQuery);