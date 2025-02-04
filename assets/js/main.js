$(document).ready(function() {
    const scrollSpeed = 700;
    // Smooth scroll
    {
        $('a[href*="#"]').click(function() {
            var target = $(this.hash === '#' || '' ? 'html' : this.hash);
            if (!target.length) return;
            var header = $('header').innerHeight();
            var position = target.offset().top - header;
            $('html, body').animate({ scrollTop: position }, scrollSpeed, 'swing');
            return false;
        });
    }

    // Page-top
    {
        $('#js-page-top').click(function() {
            $("body,html").animate({ scrollTop: 0 }, scrollSpeed, "swing");
            return false;
        });
    }

    // Hamburger
    {
        var nav = $('#js-nav');
        var hamburger = $('#js-hamburger');
        hamburger.on('click', function() {
            if ( $(this).hasClass('is-active') == false ) {
                $(this).addClass('is-active').attr("aria-expanded", "true");
                nav.addClass('is-active');
            }
            else {
                $(this).removeClass('is-active').attr("aria-expanded", "false");
                nav.removeClass('is-active');
            }
        });
        $('header nav a').on('click', function() {
            hamburger.removeClass('is-active').attr("aria-expanded", "false");
            nav.removeClass('is-active');
        });
    }

    // Discord追従ボタンの表示・非表示
    {
        const mvHeight = $('#js-mv').height();
        $(window).on('scroll', function() {
            const scrollPos = $(this).scrollTop();
            if (scrollPos > mvHeight * 0.5) {
                $('#js-cv-button').fadeIn();
            } else {
                $('#js-cv-button').fadeOut();
            }
        });
    }

    // Animation
    {
        $.fn.acs = function (options) {
            const elements = this;
            const defaults = {
                screenPos: 0.8,
                className: 'js-anime-active'
            };
            const setting = $.extend(defaults, options);

            $(window).on('load scroll', function () {
                add_class_in_scrolling();
            });
            function add_class_in_scrolling() {
                const winScroll = $(window).scrollTop();
                const winHeight = $(window).height();
                const scrollPos = winScroll + (winHeight * setting.screenPos);
        
                if (elements.offset().top < scrollPos) {
                    elements.addClass(setting.className);
                }
            }
        }
        $('.js-anime').each(function () {
            $(this).acs();
        });
    }
});

$(window).on('load', function() {

    // Loading
    {
        Loader();
        setTimeout(() => {
            if ($('body').hasClass('is-loading') == true ) {
                Loader();
            }
        }, 6000);

        function Loader() {
            setTimeout(() => {
                $('body').removeClass('is-loading').addClass('is-loaded');
                $('#js-loading-cont').addClass('is-hidden');
            }, 2000);
            setTimeout(() => {
                $('#js-mv').addClass('is-show');
            }, 2400);
            setTimeout(() => {
                $('#js-loading').remove();
            }, 2600);
        }
    }
});


// Viewport
!(function () {
    const viewport = document.querySelector('meta[name="viewport"]');
    function switchViewport() {
        const value =
            window.outerWidth > 375
            ? 'width=device-width,initial-scale=1'
            : 'width=375';
        if (viewport.getAttribute('content') !== value) {
            viewport.setAttribute('content', value);
        }
    }
    addEventListener('resize', switchViewport, false);
    switchViewport();
})();


