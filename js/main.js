$(document).ready(function(){

    /* Адаптивная функция */
    $(".search-wrap").adaptive_append({
		//важен порядок, от большего к меньшему 
		991:'#desk-search-wrap', 

		0:'#mob-search-wrap'
	});

    /* Опускаем контент на нужную высоту под фиксированное меню */
    var heightHeaderTop;
    var heightLogoRow;
    var topLogoRow;
    var marginSlider;
    if($(window).width()<992 && $(window).width()>767){
        setTimeout(function(){
            heightHeaderTop = parseFloat($('.header__top').height()+34);
            $('.logo-row').css({top: heightHeaderTop, paddingTop: 17});
            heightLogoRow = parseFloat($('.logo-row').height());
            marginSlider = heightLogoRow + heightHeaderTop + 10;
            $('.main-content').css({marginTop: marginSlider});
        }, 500);
    }
    if($(window).width()<768){
        setTimeout(function(){
            heightLogoRow = parseFloat($('.logo-row').height());
            topLogoRow = parseFloat($('.logo-row').css('paddingTop'));
            marginSlider = heightLogoRow + topLogoRow;
            $('.main-content').css({marginTop: marginSlider});
        }, 500);
    }
    $(window).resize(function(){
        if($(window).width()<768){
            $('.logo-row').css({paddingTop: 20});
        }
        if($(window).width()>767 && $(window).width()<992){
            heightHeaderTop = parseFloat($('.header__top').height()+34);
            $('.logo-row').css({top: heightHeaderTop, paddingTop: 17});
            heightLogoRow = parseFloat($('.logo-row').height());
            marginSlider = heightLogoRow + heightHeaderTop + 10;
            $('.main-content').css({marginTop: marginSlider});
        }
    });

    /* Главный слайдер и карусель */
    if($('.main-slider').length){
    	$('.main-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            dots:false,
            autoplay:true,
            autoplaySpeed: 8000,
            responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
        });
    }
    if($('.carousel').length){
        $('.carousel').slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 2,
            draggable: true,
            dots:false,
            arrows:false,
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    speed: 600
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 400
                }
            }
        ]
        });
    }

    /* Colorbox */
    $("a.footer__button").colorbox({
        html: '<div id="newsletter-popup" class="newsletter"><img src="images/bg-newsletter.jpg" alt=""/><a id="close-popup" href="javascript:void(0);" class="close-popup"></a><form action="/" method="post" class="newsletter-form"><input type="text" value="" name="" class="newsletter-form__input"/><a href="javascript:void(0);" class="newsletter-form__send">Подписаться</a></form></div>',
        width: 844,
        height: 514
    });


    /* Вызываем мобильное меню */
    if($('#mobile-menu-button, #close-menu').length){
    	$('#mobile-menu-button, #close-menu').on('click', function(){
    		$('#overlay').toggleClass('overlay_active');
            $('.menu-row').toggleClass('menu-row_active');
    	});
    }

    /* Фиксация верхнего меню при прокрутке и кнопка "Наверх" */
    if($(window).width()>991){
        if ( $(this).scrollTop() > 75  ){
            $('.header').addClass('header_fixed');
            $('#arrow-up').fadeIn('slow');
        	}
        }
        $(window).scroll(function(){
            if($(window).width()>991){
            if ( $(this).scrollTop() > 75  ){
                $('.header').addClass('header_fixed');
                $('#arrow-up').fadeIn('slow');
            } else {
                $('.header').removeClass('header_fixed');
                $('#arrow-up').fadeOut('400');
            }
            }
        });
        $('#arrow-up').on('click', function(){
            $('html, body').animate({scrollTop: 0}, 600);
        });


        /* Плавная прокрутка к якорям */
        /*
    $('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		if($(window).width()>1199){
			$('html, body').animate({scrollTop: ($(target).offset().top)-150}, 1000);
			return false;
		} else {
			$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
			return false;
		}
	});*/
});