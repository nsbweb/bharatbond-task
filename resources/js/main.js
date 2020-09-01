$('.carousel').carousel({
    interval: 2000
});

$(document).ready(function() {
    $menuLeft = $('.pushmenu-left');
    $nav_list = $('#menu-trigger');
    $nav_overlay = $('.nav-shade');
    $nav_overlay.hide();
    
    $nav_list.click(function() {
        $(this).toggleClass('active');
        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
        $nav_overlay.toggle();
    });
    
    $nav_overlay.click(function() {
        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
        $(this).toggle();
    })
});

$('.acc-sec-list').each(function(){
    $(this).find('.acc-sec').each(function(){
        $(this).find('.txt').hide();
        $(this).click(function(e){
            e.preventDefault();
            if(!$(this).hasClass('active')){
                $(this).addClass('active');
                $(this).find('.txt').show();
            }else{
                $(this).removeClass('active');
                $(this).find('.txt').hide();
            }
        })
    });
});