// blogslider start
$('.blogslid').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.blogslidtwo').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// blogslider end
// product slider jas start
$('.testi_bigg_deal').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testi_small_deal'
});
$('.testi_small_deal').slick({
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.testi_bigg_deal',
    dots: false,
    centerMode: false,
    arrows: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-chevron-down"></i></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-chevron-up"></i></button>',
    focusOnSelect: true
});
$('.video-testimonial').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    vertical: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
// product slider jas end
// simple slick slider start
$(".tab_slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
});
// simple slick slider end
// wow animation js
$(function() {
    new WOW().init();
});
// responsive menu js
$(function() {
    // Init slicknav (appends .slicknav_menu after #menu by default)
    $('#menu').slicknav({
        allowParentLinks: false,
        label: ''
    });

    // Unconditionally build the .mob-header-bar in DOM (CSS will hide it on desktop)
    var $logoSrc = $('.logo_here img').attr('src');
    var $logoHref = $('.logo_here').closest('a').attr('href') || '/';
    var $logoLink = $('.logo_here a').attr('href') || '/';
    var $logoImgEl = $('.logo_here a').html();

    // Create mobile bar wrapper
    var $mobileBar = $('<div class="mob-header-bar"></div>');
    var $mobileLogo = $('<a href="' + $logoLink + '" class="mob-logo">' + $logoImgEl + '</a>');

    // Move slicknav button into mobile bar
    var $slicknavMenu = $('.slicknav_menu');

    $mobileBar.append($mobileLogo);
    $mobileBar.append($slicknavMenu);
    $('header.main_header').prepend($mobileBar);
});
// slick slider in tabs js end
if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function(e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));
        if ($(target).is(":visible")) {
            return false;
        } else {
            target
                .parents(".tabs-box")
                .find(".tab-buttons")
                .find(".tab-btn")
                .removeClass("active-btn");
            $(this).addClass("active-btn");
            target
                .parents(".tabs-box")
                .find(".tabs-content")
                .find(".tab")
                .fadeOut(0);
            target
                .parents(".tabs-box")
                .find(".tabs-content")
                .find(".tab")
                .removeClass("active-tab");
            $(target).fadeIn(300);
            $(target).addClass("active-tab");
        }
    });
}
window.onscroll = function() {
    myFunction()
};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
$('[data-targetit]').on('click', function() {
    $(this).siblings().removeClass('current');
    $(this).addClass('current');
    var target = $(this).data('targetit');
    $('.' + target).siblings('[class^="tabs"]').removeClass('current');
    $('.' + target).addClass('current');
    $('.slick-slider').slick('setPosition', 0);
});
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
var path = window.location.href;
$('#menu li a').each(function() {
    if (this.href === path) {
        $(this).addClass('active');
        e.preventDefault();
    }
});