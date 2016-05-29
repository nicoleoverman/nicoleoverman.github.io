'use strict';

var $i = 0;
$('.hamburger-icon').click(function() {
    if ($i % 2 == 0) {
        $(this).addClass('is_active');
        $('.nav-menu').addClass('open_nav');
        $('.page-wrapper').addClass('menu_open');
    } else {
        $(this).removeClass('is_active');
        $('.nav-menu').removeClass('open_nav');
        $('.page-wrapper').removeClass('menu_open');
    }
    $i++;
});

$('.nav-menu a').click(function(){
    $i++;
    $('.hamburger-icon').removeClass('is_active');
    $('.nav-menu').removeClass('open_nav');
    $('.page-wrapper').removeClass('menu_open');
});

$('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});