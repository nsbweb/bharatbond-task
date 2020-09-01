$('.carousel').carousel({
    interval: 2000
});

$(document).ready(function() {
    $menuLeft = $('.pushmenu-left');
    $nav_list = $('#menu-trigger');
    
    $nav_list.click(function() {
        $(this).toggleClass('active');
        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
    });
});