$('.titul__bg:first').addClass('is-current');
setInterval(function(){
    var $next = $('.titul__bg.is-current')
        .removeClass('is-current')
        .next('.titul__bg');
    
        $next.length ? $next.addClass('is-current') : $('.titul__bg:first').addClass('is-current');
},  5000);