$(document).ready(function(){
    var winheight = $(document).innerHeight();
    $('.page-wrapper').innerHeight(winheight);
    $('.home-footer').innerHeight(winheight-150);
    $('.menu-icon').click(function(){
        $('.nav-overlay').fadeToggle();
        $('header .icon-container .menu-hidden').fadeToggle();
        $('header .icon-container .menu-show').fadeToggle();
    });

    $('.nav-overlay').click(function (e) {
        $('.nav-overlay').fadeToggle();
        $('header .icon-container .menu-hidden').fadeToggle();
        $('header .icon-container .menu-show').fadeToggle();
    });
    $('.nav-overlay').click(function (m) {
        m.stopPropagation();
    });
});
