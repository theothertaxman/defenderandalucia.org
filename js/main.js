$(document).ready(function() {
    $('.slider').slick();

    $('.slick-arrow').text('')

    $('.burger').click(function() {
        $('.burger').toggleClass('active')
        $('html').toggleClass('lock')
        $('body').toggleClass('lock')
        $('.nav').toggleClass('visible')
    })
})    

let lastScrollPosition = 0
//const left = parseFloat($('.code').css('left'))


$(window).scroll(function() {
    const position = $('.code').css('position')
    const et = $('.code').offset().top;
    const eh = $('.code').outerHeight();
    const wt = $(window).scrollTop();
    const wh = $(window).height();

    if (position == 'absolute') {
        if (wt > lastScrollPosition && wt + wh >= et) {
            $('.code').css('left', '3%')
        }
        else if (wt < lastScrollPosition && wt + wh <= et + eh) {
            $('.code').css('left', '15%')
        }
    }
    else if (position == 'relative') {
        if (wt > lastScrollPosition && wt + wh >= et) {
            $('.code').css('left', '3%')
        }
        else if (wt < lastScrollPosition && wt + wh <= et + eh) {
            $('.code').css('left', '7%')
        }
    }

    lastScrollPosition = wt
})